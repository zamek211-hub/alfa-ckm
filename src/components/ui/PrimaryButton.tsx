import Link from "next/link";

export default function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block bg-brand-accent text-white px-6 py-3 uppercase tracking-wide text-sm font-semibold hover:opacity-90 transition"
    >
      {children}
    </Link>
  );
}
