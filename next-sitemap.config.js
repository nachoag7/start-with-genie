/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.startwithgenie.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/sitemap.xml'],
  additionalPaths: async (config) => {
    const result = [
      {
        loc: '/about-genie-llc',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/',
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
    ]
    return result
  },
} 