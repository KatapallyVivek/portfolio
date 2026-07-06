export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
