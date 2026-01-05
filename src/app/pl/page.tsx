import Image from "next/image";
import Link from "next/link";

export default function PolishHomePage() {
  return (
    <section
      className="relative h-[100svh] w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/baner/baner_bike.jpg')",
      }}
    >
      {/* 🔰 LOGO KLUBU – LEWY GÓRNY RÓG */}
      <div className="absolute top-6 left-6 z-20">
        <Image
          src="/assets/logo/alfa-ckm-logo.png"
          alt="ALFA-CKM Logo"
          width={600}
          height={600}
          priority
          className="
            w-[88px]
            md:w-[120px]
            lg:w-[150px]
            opacity-90
          "
        />
      </div>

      {/* PRZYCIEMNIENIE BANERA */}
      <div className="absolute inset-0 bg-black/40" />

      {/* TREŚĆ HERO */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className="text-brand-red text-4xl md:text-6xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          ALFA-CKM
        </h1>

        <p className="mt-4 text-white/90 uppercase tracking-widest text-sm md:text-base">
          Wiara • Braterstwo • Wolność na Dwóch Kołach
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/pl/o-nas"
            className="px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition"
          >
            Poznaj nas
          </Link>

          <Link
            href="/pl/media"
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition"
          >
            Zobacz galerię
          </Link>
        </div>
      </div>
    </section>
  );
}
