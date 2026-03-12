import { getAllEvents } from "@/lib/events";

export default function sitemap() {
  const baseUrl = "https://www.alfackm.pl";

  const events = getAllEvents();

  const eventPages = events.map((event) => ({
    url: `${baseUrl}/media/${event.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/media`,
      lastModified: new Date(),
    },
    ...eventPages,
  ];
}