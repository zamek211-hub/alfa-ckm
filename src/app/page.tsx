<h1 className="text-red-500">TEST HOME</h1>

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative w-full h-screen bg-alfaBlack">
      <img
        src="/assets/baner/baner_bike.jpg"
        alt="ALFA-CKM Baner"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-center px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-alfaRed tracking-widest mb-4">
          ALFA-CKM
        </h1>

        <p className="text-sm md:text-base text-alfaCream uppercase tracking-wider mb-10">
          Wiara • Braterstwo • Wolność na Dwóch Kołach
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="/about"
            className="px-6 py-2 text-sm border border-alfaGold text-alfaGold
                       hover:bg-alfaGold hover:text-alfaBlack transition"
          >
            Poznaj nas
          </Link>

          <Link
            href="/members"
            className="px-6 py-2 text-sm border border-alfaGold text-alfaGold
                       hover:bg-alfaGold hover:text-alfaBlack transition"
          >
            Dołącz do nas
          </Link>

          <Link
            href="/media"
            className="px-6 py-2 text-sm border border-alfaGold text-alfaGold
                       hover:bg-alfaGold hover:text-alfaBlack transition"
          >
            Zobacz galerię
          </Link>
        </div>
      </div>
    </div>
  );
}
