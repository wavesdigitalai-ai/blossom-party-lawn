import type { MetadataRoute } from 'next';

const BASE = 'https://www.blossompartylawn.in';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE + '/', changeFrequency: 'weekly', priority: 1.0 },
    { url: BASE + '/about', changeFrequency: 'monthly', priority: 0.9 },
    { url: BASE + '/occasions', changeFrequency: 'monthly', priority: 0.9 },
    { url: BASE + '/gallery', changeFrequency: 'monthly', priority: 0.8 },
    { url: BASE + '/packages', changeFrequency: 'monthly', priority: 0.9 },
    { url: BASE + '/contact', changeFrequency: 'monthly', priority: 0.9 },
  ];
}
