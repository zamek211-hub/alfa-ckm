export type Partner = {
  name: string;
  logo: string;
  description: string;
  url?: string;
  active?: boolean;
};

export const partners: Partner[] = [
  {
    name: "Partner 1",
    logo: "/assets/partners/partner1.png",
    description:
      "Firma wspierająca działalność ALFA-CKM w zakresie wydarzeń i inicjatyw klubowych.",
    url: "https://partner1.pl",
    active: false,
  },
  {
    name: "Partner 2",
    logo: "/assets/partners/partner2.png",
    description:
      "Partner technologiczny oraz sponsor wydarzeń motocyklowych.",
    url: "https://partner2.pl",
    active: false,
  },
  {
    name: "Partner 3",
    logo: "/assets/partners/partner3.png",
    description:
      "Wsparcie logistyczne i organizacyjne dla klubu.",
    url: "https://partner3.pl",
    active: false,
  },
  {
    name: "Partner 4",
    logo: "/assets/partners/partner4.png",
    description:
      "Partner medialny oraz promocyjny wydarzeń ALFA-CKM.",
    url: "https://partner4.pl",
    active: false,
  },
  {
    name: "Partner 5",
    logo: "/assets/partners/partner5.png",
    description:
      "Firma wspierająca rozwój inicjatyw społecznych klubu.",
    url: "https://partner5.pl",
    active: false,
  },
  {
    name: "Partner 6",
    logo: "/assets/partners/partner6.png",
    description:
      "Partner wydarzeń szkoleniowych i integracyjnych.",
    url: "https://partner6.pl",
    active: false,
  },
];
