const fs = require('fs');
const report = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));
const errors = report.audits['errors-in-console'];
console.log(JSON.stringify(errors.details.items, null, 2));
