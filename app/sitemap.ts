import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jasaweb-premium.vercel.app', // Ganti domain nanti
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Jika ada halaman lain, tambahkan disini
  ];
}