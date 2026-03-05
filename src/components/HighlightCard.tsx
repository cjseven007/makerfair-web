export default function HighlightCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full sm:w-[260px] rounded-2xl border border-[#001F3F]/15 bg-gray-50 p-5 shadow-sm">
      <div className="text-[#001F3F] font-extrabold text-lg">{title}</div>
      <div className="mt-2 text-sm text-gray-700 leading-relaxed">{description}</div>
    </div>
  );
}