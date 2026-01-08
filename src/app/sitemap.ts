// src/app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.alfackm.pl";
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified,
    },
    {
      url: `${baseUrl}/media`,
      lastModified,
    },
    {
      url: `${baseUrl}/partnerzy`,
      lastModified,
    },
    {
      url: `${baseUrl}/partnerzy/zostan-partnerem`,
      lastModified,
    },
    {
      url: `${baseUrl}/members`,
      lastModified,
    },
    {
      url: `${baseUrl}/statut`,
      lastModified,
    },
    {
      url: `${baseUrl}/o-nas`,
      lastModified,
    },
  ];
}
