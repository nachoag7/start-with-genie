/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.startwithgenie.com",
  generateRobotsTxt: true,
  exclude: [],
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.startwithgenie.com/sitemap.xml',
    ],
  },
} 