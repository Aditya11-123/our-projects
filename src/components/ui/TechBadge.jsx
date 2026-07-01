export default function TechBadge({ name }) {
  return (
    <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-sm bg-white/[0.02] border border-white/5 text-gray-300 hover:border-primary/50 hover:text-white hover:bg-primary/5 transition-all duration-300">
      {name}
    </span>
  );
}
