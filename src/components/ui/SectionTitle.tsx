export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-text">
        <span className="text-brand-accent">/</span> {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-brand-muted max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
