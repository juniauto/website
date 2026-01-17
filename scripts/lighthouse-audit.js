const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

// Configuration
const THRESHOLDS = {
    performance: 0.70, // Start realistic, aim for 0.90
    accessibility: 0.90,
    'best-practices': 0.90,
    seo: 0.90,
};

const PORT = 4444;
const URL = `http://localhost:${PORT}`;
const REPORT_PATH = 'lighthouse-report.json';

// Helper: Log with style
const log = (msg, type = 'info') => {
    const colors = {
        info: '\x1b[36m%s\x1b[0m', // Cyan
        success: '\x1b[32m%s\x1b[0m', // Green
        error: '\x1b[31m%s\x1b[0m', // Red
        warn: '\x1b[33m%s\x1b[0m', // Yellow
    };
    console.log(colors[type] || colors.info, `[Quality Gate] ${msg}`);
};

// Helper: Check if port is ready
const checkPort = () => {
    return new Promise((resolve, reject) => {
        let attempts = 0;
        const maxAttempts = 20;

        const interval = setInterval(() => {
            const req = http.get(URL, (res) => {
                if (res.statusCode === 200) {
                    clearInterval(interval);
                    resolve();
                }
            });

            req.on('error', () => {
                attempts++;
                if (attempts >= maxAttempts) {
                    clearInterval(interval);
                    reject(new Error('Server failed to start in time'));
                }
            });
            req.end();
        }, 1000);
    });
};

async function run() {
    let serverProcess;

    try {
        // 1. Build Project
        log('🔨 Building for production...', 'info');
        execSync('npm run build', { stdio: 'inherit' });

        // 2. Start Preview Server
        log(`🚀 Starting preview server on port ${PORT}...`, 'info');
        serverProcess = spawn('npm', ['run', 'preview', '--', '--port', PORT.toString()], {
            stdio: 'pipe', // pipe stdio to allow background run but ignore output to keep clean
            detached: true
        });

        // 3. Wait for Server
        log('⏳ Waiting for server to be ready...', 'info');
        await checkPort();
        log('✅ Server is up!', 'success');

        // 4. Run Lighthouse
        log('🕵️  Running Lighthouse Audit...', 'info');
        // Use npx to run lighthouse without adding devDependency if not present
        // --chrome-flags="--headless" is crucial for CI/headless envs
        const lhCommand = `npx -y lighthouse ${URL} --output json --output-path ${REPORT_PATH} --chrome-flags="--headless" --only-categories=performance,accessibility,best-practices,seo`;
        execSync(lhCommand, { stdio: 'inherit' });

        // 5. Analyze Results
        const report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf8'));
        const scores = {
            performance: report.categories.performance.score,
            accessibility: report.categories.accessibility.score,
            'best-practices': report.categories['best-practices'].score,
            seo: report.categories.seo.score,
        };

        log('\n📊 --- SCORECARD ---', 'info');
        let passed = true;
        const failedMetrics = [];

        Object.entries(THRESHOLDS).forEach(([category, threshold]) => {
            const score = scores[category];
            const score100 = (score * 100).toFixed(0);
            const threshold100 = (threshold * 100).toFixed(0);

            if (score < threshold) {
                passed = false;
                failedMetrics.push(category);
                log(`❌ ${category}: ${score100} (Target: ${threshold100})`, 'error');
            } else {
                log(`✅ ${category}: ${score100} (Target: ${threshold100})`, 'success');
            }
        });

        if (!passed) {
            log(`\n🚫 Quality Gate FAILED. Improvements needed in: ${failedMetrics.join(', ')}`, 'error');

            // Helpful details
            log('\n💡 Top Improvement Opportunities:', 'warn');
            const auditList = Object.values(report.audits)
                .filter(a => a.score !== null && a.score < 0.9 && (a.details?.overallSavingsMs > 0 || a.score === 0))
                .sort((a, b) => (b.details?.overallSavingsMs || 0) - (a.details?.overallSavingsMs || 0))
                .slice(0, 10);

            auditList.forEach(a => {
                const savings = a.details?.overallSavingsMs ? ` (${(a.details.overallSavingsMs).toFixed(0)}ms savings)` : '';
                log(`- ${a.title}${savings}`, 'warn');
                if (a.details && a.details.items && a.details.items.length > 0) {
                    a.details.items.slice(0, 3).forEach(item => {
                        log(`  > ${item.url || item.node?.snippet || 'Item'}`, 'info');
                    });
                }
            });

            process.exit(1);
        } else {
            log('\n✨ Quality Gate PASSED. Code is ready for shipping!', 'success');
        }

    } catch (error) {
        log(`Unexpected Error: ${error.message}`, 'error');
        process.exit(1);
    } finally {
        // Cleanup
        if (serverProcess) {
            log('🧹 Killing preview server...', 'warn');
            // process.kill(-serverProcess.pid) works if detached and own group, 
            // but simple kill usually works for simple spawning
            try {
                process.kill(-serverProcess.pid);
            } catch (e) {
                try {
                    serverProcess.kill();
                } catch (e2) { }
            }
        }
    }
}

run();
