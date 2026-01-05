import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative w-full h-screen">
      <img
        src="/assets/baner/baner_bike.jpg"
        alt="ALFA-MOT Baner"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-center text-white p-4">
        <h1 className="text-6xl font-bold mb-4">ALFA-MOT</h1>

        <p className="text-xl mb-8">
          Wiara Braterstwo Wolność na Dwóch Kołach
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/pl/about" className="bg-white text-black px-6 py-3 rounded">
            Poznaj nas
          </Link>
          <Link href="/pl/members" className="bg-white text-black px-6 py-3 rounded">
            Dołącz do nas
          </Link>
          <Link href="/pl/media" className="bg-white text-black px-6 py-3 rounded">
            Zobacz galerię
          </Link>
        </div>
      </div>
    </div>
  );
}
