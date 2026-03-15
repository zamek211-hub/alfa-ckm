import Link from "next/link";
import Image from "next/image";
import { gallery } from "@/data/gallery";

export default function EventGrid() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {gallery.map((event) => (

        <Link
          key={event.slug}
          href={`/media/${event.slug}`}
          className="block rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-500 transition"
        >

          <Image
            src={event.cover}
            alt={event.title}
            width={600}
            height={400}
            className="w-full h-64 object-cover"
          />

          <div className="p-4 text-center text-white">
            {event.title}
          </div>

        </Link>

      ))}

    </div>
  );
}