// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ALFA-CKM – Chrześcijański Klub Motocyklowy | Polska, Polkowice",
    template: "%s | ALFA-CKM",
  },

  description:
    "ALFA-CKM to chrześcijański klub motocyklowy działający w Polsce, wywodzący się z Polkowic. Łączymy pasję do motocykli z wiarą, odpowiedzialnością i wspólnotą.",

  metadataBase: new URL("https://www.alfackm.pl"),

  alternates: {
    canonical: "https://www.alfackm.pl",
  },

  openGraph: {
    title: "ALFA-CKM – Chrześcijański Klub Motocyklowy | Polska, Polkowice",
    description:
      "ALFA-CKM to chrześcijański klub motocyklowy działający w Polsce, wywodzący się z Polkowic. Wspólnota, motocykle i wartości chrześcijańskie.",
    url: "https://www.alfackm.pl",
    siteName: "ALFA-CKM",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/assets/hero/alfa-ckm-logo.png",
        width: 1200,
        height: 630,
        alt: "ALFA-CKM",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ALFA-CKM – Chrześcijański Klub Motocyklowy",
    description:
      "Oficjalna strona chrześcijańskiego klubu motocyklowego ALFA-CKM.",
    images: ["/assets/hero/alfa-ckm-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 w-full">{children}</main>

        <Footer />
      </body>
    </html>
  );
}