import fs from 'fs';
import path from 'path';

const sitemapPath = path.join(process.cwd(), 'dist', 'sitemap-0.xml');

if (fs.existsSync(sitemapPath)) {
    let content = fs.readFileSync(sitemapPath, 'utf8');

    // Replace the trailing slash ONLY for the home page URL
    // We look for the exact string <loc>https://www.juniauto.com.br/</loc>
    const oldUrl = '<loc>https://www.juniauto.com.br/</loc>';
    const newUrl = '<loc>https://www.juniauto.com.br</loc>';

    if (content.includes(oldUrl)) {
        content = content.replace(oldUrl, newUrl);
        fs.writeFileSync(sitemapPath, content);
        console.log('✅ Sitemap home page URL fixed: removed trailing slash.');
    } else {
        console.log('ℹ️ Sitemap home page URL already fixed or not found.');
    }
} else {
    console.error('❌ Sitemap not found at:', sitemapPath);
}
