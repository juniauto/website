const fs = require('fs');

try {
    const report = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));

    const analyzeCategory = (categoryId) => {
        console.log(`\n--- ${report.categories[categoryId].title} (Score: ${(report.categories[categoryId].score * 100).toFixed(0)}) ---`);

        const auditRefs = report.categories[categoryId].auditRefs;
        const failingRefs = auditRefs.filter(ref => ref.weight > 0 && report.audits[ref.id].score < 1);

        if (failingRefs.length === 0) {
            console.log("🎉 Perfect Score! No issues found.");
            return;
        }

        failingRefs.forEach(ref => {
            const audit = report.audits[ref.id];
            console.log(`\n❌ ${audit.title}`);
            console.log(`   Description: ${audit.description}`);

            if (audit.details && audit.details.items && audit.details.items.length > 0) {
                console.log('   Violations:');
                audit.details.items.slice(0, 5).forEach(item => {
                    const identifier = item.node ? item.node.snippet : (item.url || 'Unknown Item');
                    console.log(`   - ${identifier}`);
                });
            }
        });
    };

    analyzeCategory('accessibility');
    analyzeCategory('best-practices');

} catch (e) {
    console.error("Error reading report:", e.message);
}
