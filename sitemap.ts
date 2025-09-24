import { MetadataRoute } from 'next'

const SITE_URL = 'https://church-website-ruby-tau.vercel.app/' 

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
   
  ]
}
