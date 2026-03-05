import React from "react";

export default function InfoNote({ text }: { text: string }) {
  return (
    <div className="w-full rounded-lg border border-amber-200 bg-amber-50 p-4 flex gap-3 items-start">
      <div className="text-amber-700">ℹ️</div>
      <p className="text-sm text-amber-900">{text}</p>
    </div>
  );
}