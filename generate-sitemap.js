import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper to get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = 'https://aartechsolonics.com/'; // Replace with your site domain
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/brands', changefreq: 'monthly', priority: 0.7 },
  { url: '/work', changefreq: 'monthly', priority: 0.7 },
  { url: '/media', changefreq: 'monthly', priority: 0.7 },
  { url: '/industries', changefreq: 'monthly', priority: 0.7 },
  { url: '/products', changefreq: 'monthly', priority: 0.7 },
  { url: '/solutions', changefreq: 'monthly', priority: 0.7 },
  { url: '/media/announcement-page', changefreq: 'yearly', priority: 0.6 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.6 },
  { url: '/cookies', changefreq: 'yearly', priority: 0.6 },

  // Industries
  { url: '/industries/defence-and-exploration', changefreq: 'yearly', priority: 0.5 },
  { url: '/industries/renewable-energy', changefreq: 'yearly', priority: 0.5 },
  { url: '/industries/non-renewable-energy', changefreq: 'yearly', priority: 0.5 },
  { url: '/industries/power-transmission-and-distribution', changefreq: 'yearly', priority: 0.5 },
  { url: '/industries/heavy-engineering-industries', changefreq: 'yearly', priority: 0.5 },
  { url: '/industries/health-care', changefreq: 'yearly', priority: 0.5 },
  { url: '/industries/it-and-telecom', changefreq: 'yearly', priority: 0.5 },
  { url: '/industries/transportation', changefreq: 'yearly', priority: 0.5 },
  { url: '/industries/waste-management', changefreq: 'yearly', priority: 0.5 },

  // Products
  { url: '/products/BTS-2000', changefreq: 'yearly', priority: 0.5 },
  { url: '/products/kranking-ultracapacitors', changefreq: 'yearly', priority: 0.5 },
  { url: '/products/control-relay-panels', changefreq: 'yearly', priority: 0.5 },
  { url: '/products/clip-fault-current-limiters', changefreq: 'yearly', priority: 0.5 },
  { url: '/products/best-case', changefreq: 'yearly', priority: 0.5 },
  { url: '/products/load-checker', changefreq: 'yearly', priority: 0.5 },
  { url: '/products/solar-design-and-services', changefreq: 'yearly', priority: 0.5 },
  { url: '/products/solid-waste-treatment', changefreq: 'yearly', priority: 0.5 },
  { url: '/products/ac-and-dc', changefreq: 'yearly', priority: 0.5 },
  { url: '/products/flywheel', changefreq: 'yearly', priority: 0.5 },
  { url: '/products/fuel-cell', changefreq: 'yearly', priority: 0.5 },

  // Solutions
  { url: '/solutions/control-and-automation', changefreq: 'yearly', priority: 0.5 },
  { url: '/solutions/process-continuity', changefreq: 'yearly', priority: 0.5 },
  { url: '/solutions/reliable-engine-starting', changefreq: 'yearly', priority: 0.5 },
  { url: '/solutions/fault-current-limiting', changefreq: 'yearly', priority: 0.5 },
  { url: '/solutions/solar-design-engineering', changefreq: 'yearly', priority: 0.5 },
  { url: '/solutions/solid-waste-treatment', changefreq: 'yearly', priority: 0.5 },
  { url: '/solutions/customised-plastic-case', changefreq: 'yearly', priority: 0.5 },
  { url: '/solutions/uninterrupted-power-supply', changefreq: 'yearly', priority: 0.5 },
  { url: '/solutions/power-backup-unit', changefreq: 'yearly', priority: 0.5 },
  { url: '/solutions/energy-storage', changefreq: 'yearly', priority: 0.5 },
  { url: '/solutions/load-limiting', changefreq: 'yearly', priority: 0.5 }
];


const generateSitemap = async () => {
  const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
  const writeStream = createWriteStream(sitemapPath);

  const smStream = new SitemapStream({ hostname: siteUrl });

  smStream.pipe(writeStream);

  // Write page entries
  pages.forEach(page => smStream.write(page));

  smStream.end();

  streamToPromise(smStream)
    .then(() => console.log('Sitemap successfully generated!'))
    .catch(console.error);
};

generateSitemap();
