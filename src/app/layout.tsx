// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alfackm.pl"),

  title: {
    default: "ALFA Chrześcijański Klub Motocyklowy | Polkowice",
    template: "%s | ALFA",
  },

  description:
    "ALFA Chrześcijański Klub Motocyklowy z Polkowic to wspólnota motocyklistów oparta na wartościach chrześcijańskich. Łączymy pasję do motocykli z wiarą, odpowiedzialnością i braterstwem.",

  keywords: [
    "ALFA klub motocyklowy",
    "ALFA CKM",
    "chrześcijański klub motocyklowy",
    "motocykliści chrześcijańscy",
    "klub motocyklowy Polska",
    "klub motocyklowy Polkowice",
    "motocykliści Polkowice",
    "klub motocyklowy Dolny Śląsk",
    "chrześcijańscy motocykliści Polska",
    "motor klub chrześcijański",
  ],

  authors: [{ name: "ALFA Chrześcijański Klub Motocyklowy" }],

  alternates: {
    canonical: "https://www.alfackm.pl",
  },

  openGraph: {
    title: "ALFA Chrześcijański Klub Motocyklowy | Polkowice",
    description:
      "ALFA Chrześcijański Klub Motocyklowy – wspólnota motocyklistów oparta na wartościach chrześcijańskich.",
    url: "https://www.alfackm.pl",
    siteName: "ALFA",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/assets/og/alfackm-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ALFA Chrześcijański Klub Motocyklowy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ALFA Chrześcijański Klub Motocyklowy",
    description:
      "Oficjalna strona ALFA Chrześcijański Klub Motocyklowy.",
    images: ["/assets/og/alfackm-og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ALFA Chrześcijański Klub Motocyklowy",
    url: "https://www.alfackm.pl",
    logo: "https://www.alfackm.pl/assets/logo/logo.png",
    description:
      "ALFA Chrześcijański Klub Motocyklowy z Polkowic to wspólnota motocyklistów oparta na wartościach chrześcijańskich.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Polkowice",
      addressCountry: "PL",
    },
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
    ],
  };

  return (
    <html lang="pl">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <Header />

        <main className="flex-1 w-full">{children}</main>

        <Footer />
      </body>
    </html>
  );
}