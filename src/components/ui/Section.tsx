export default function Section({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full px-6 py-16 md:px-12 max-w-7xl mx-auto">
      {children}
    </section>
  );
}
