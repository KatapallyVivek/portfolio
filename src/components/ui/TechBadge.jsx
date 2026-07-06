export default function TechBadge({ name }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-text-secondary border border-white/5">
      {name}
    </span>
  );
}
