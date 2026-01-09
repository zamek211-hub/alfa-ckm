import { events } from "@/data/events";

export default function sitemap() {
  const baseUrl = "https://www.alfackm.pl";

  const staticPages = [
    "",
    "/o-nas",
    "/kontakt",
    "/media",
    "/partnerzy",
    "/members",
    "/statut",
  ];

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const eventUrls = events.map((event) => ({
    url: `${baseUrl}/media/${event.slug}`,
    lastModified: new Date(event.date),
  }));

  return [...staticUrls, ...eventUrls];
}
