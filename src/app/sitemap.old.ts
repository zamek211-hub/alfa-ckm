export default function sitemap() {
  const baseUrl = "https://www.alfackm.pl";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/o-nas`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/czlonkowie`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/partnerzy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/statut`,
      lastModified: new Date(),
    }
  ];
}