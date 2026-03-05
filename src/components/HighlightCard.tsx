import React from "react";

export default function HighlightCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-[250px] rounded-xl border border-[#001F3F]/20 bg-gray-50 p-5">
      <div className="text-[#001F3F] font-extrabold text-lg">{title}</div>
      <div className="mt-2 text-sm text-gray-700">{description}</div>
    </div>
  );
}