import Link from 'next/link';

const partners = [
  {
    name: 'Partner 1',
    description: 'Wsparcie techniczne i logistyczne.',
    logo: '/assets/partners/partner1.png',
    url: 'https://example.com',
  },
  {
    name: 'Partner 2',
    description: 'Organizacja wydarzeń motocyklowych.',
    logo: '/assets/partners/partner2.png',
    url: 'https://example.com',
  },
  {
    name: 'Partner 3',
    description: 'Sprzęt i akcesoria motocyklowe.',
    logo: '/assets/partners/partner3.png',
    url: 'https://example.com',
  },
  {
    name: 'Partner 4',
    description: 'Szkolenia i bezpieczeństwo.',
    logo: '/assets/partners/partner4.png',
    url: 'https://example.com',
  },
  {
    name: 'Partner 5',
    description: 'Wsparcie medialne i promocja.',
    logo: '/assets/partners/partner5.png',
    url: 'https://example.com',
  },
  {
    name: 'Partner 6',
    description: 'Serwis i mechanika motocyklowa.',
    logo: '/assets/partners/partner6.png',
    url: 'https://example.com',
  },
  {
    name: 'Partner 7',
    description: 'Odzież i wyposażenie riderów.',
    logo: '/assets/partners/partner7.png',
    url: 'https://example.com',
  },
  {
    name: 'Partner 8',
    description: 'Wsparcie organizacyjne klubu.',
    logo: '/assets/partners/partner8.png',
    url: 'https://example.com',
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-black text-yellow-200 px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* HEADER */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest text-yellow-300/80 mb-4">
            PARTNERZY
          </h1>
          <p className="text-sm text-yellow-200/60 uppercase tracking-wider">
            Firmy i organizacje wspierające ALFA-CKM
          </p>
        </section>

        {/* GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="border border-yellow-300/20 p-6 text-center
                         hover:border-yellow-300/60 transition"
            >
              {/* LOGO */}
              <div className="mb-4 flex items-center justify-center h-24">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* NAME */}
              <h3 className="text-sm uppercase tracking-wider text-yellow-300/80 mb-2">
                {partner.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-xs text-yellow-200/60 mb-4">
                {partner.description}
              </p>

              {/* LINK */}
              <Link
                href={partner.url}
                target="_blank"
                className="text-xs text-yellow-300/70 hover:text-yellow-300 underline"
              >
                Odwiedź stronę
              </Link>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
}
