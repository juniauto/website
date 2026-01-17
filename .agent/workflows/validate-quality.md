---
description: Validate project quality using Lighthouse (Performance, Accessibility, SEO, Best Practices) and orchestrate improvements.
---

# Quality Gate Validation Workflow

This workflow automatically builds the project in production mode, runs a local Lighthouse audit, and enforces quality thresholds.

## Roles
- **@dev**: Responsible for fixing Performance and Best Practices issues.
- **@qa**: Responsible for analyzing Accessibility issues and verifying fixes.

## Workflow Steps

1. **Run the Audit**
   Execute the quality gate script. This will build the project and run Lighthouse.
   ```bash
   npm run quality:audit
   ```
   *Note: This script will fail (exit code 1) if any score is below the defined thresholds in `scripts/lighthouse-audit.js`.*

2. **Analyze Results**
   If the audit passes:
   - ✅ **DONE**. The project is ready for deployment.
   
   If the audit fails, check the "Top Improvement Opportunities" output in the console.

3. **Remediate Issues**
   
   **For Performance Failures (< 70):**
   - **Enable Text Compression**: Check if assets are gzipped/brotli compressed (usually handled by deployment platform, but check build settings).
   - **Image Optimization**: Ensure all images are in `.webp` and properly sized.
   - **Render Blocking**: Defer non-critical JS/CSS.
   - **CLS (Layout Shift)**: Ensure all images have explicit `width` and `height`.

   **For Accessibility Failures (< 90):**
   - **Contrast**: Fix colors to meet WCAG AA standards.
   - **Semantic HTML**: Ensure proper heading hierarchy (`h1` -> `h2`).
   - **ARIA**: Verify interactive elements have accessible names and roles.

   **For SEO/Best Practices Failures (< 90):**
   - Add missing `<meta>` tags.
   - Fix `target="_blank"` security risks (`rel="noopener noreferrer"`).
   - Ensure `robots.txt` and `sitemap.xml` are generated.

4. **Iterate**
   After applying fixes, run step 1 again.
   ```bash
   npm run quality:audit
   ```
   Repeat until the Quality Gate passes.

## Threshold Configuration
Thresholds are defined in `scripts/lighthouse-audit.js`:
- Performance: 70
- Accessibility: 90
- Best Practices: 90
- SEO: 90
