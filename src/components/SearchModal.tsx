import React, { useEffect, useMemo, useState } from "react";

export default function SearchModal({
  open,
  onClose,
  onSubmit,
  hint,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (query: string) => void;
  hint: string;
}) {
  const [q, setQ] = useState("");

  useEffect(() => {
    if (open) setQ("");
  }, [open]);

  const normalized = useMemo(() => q.trim().toLowerCase(), [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-xl rounded-xl bg-white shadow-xl border border-gray-200">
        <div className="p-5 border-b border-gray-200">
          <h2 className="text-2xl font-extrabold text-[#001F3F]">Search</h2>
        </div>

        <div className="p-5 space-y-3">
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSubmit(normalized);
              if (e.key === "Escape") onClose();
            }}
            placeholder={hint}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#001F3F]/30"
          />

          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="rounded-lg px-4 py-2 border border-gray-300 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => onSubmit(normalized)}
              className="rounded-lg px-4 py-2 bg-[#001F3F] text-white hover:opacity-95"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}