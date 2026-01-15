import Link from "next/link";
import Image from "next/image";
import { EventItem } from "@/data/events";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={`/media/${event.slug}`}
      className="group border border-brand-gold/20 hover:border-brand-gold transition overflow-hidden"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={event.cover}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-4 bg-black">
        <h3 className="text-brand-gold font-semibold mb-1">
          {event.title}
        </h3>

        <p className="text-xs text-brand-cream/70">
          {event.date}
          {event.location && ` • ${event.location}`}
        </p>
      </div>
    </Link>
  );
}
