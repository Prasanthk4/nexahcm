const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://your-domain.com'; // Replace with your actual domain
const PAGES_DIR = path.join(__dirname, '../src/pages');

// Get all pages from the pages directory
const getPages = () => {
  const pages = fs.readdirSync(PAGES_DIR)
    .filter(file => file.endsWith('.jsx'))
    .map(file => {
      const name = file.replace('.jsx', '').toLowerCase();
      return name === 'home' ? '' : name;
    });

  return pages;
};

// Generate sitemap XML
const generateSitemap = () => {
  const pages = getPages();
  const currentDate = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${BASE_URL}/${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
