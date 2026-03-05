import React, { useState } from "react";
import type { DropdownItem } from "../data/nav";

export default function NavigateDropdown({
  label,
  width = 220,
  onTitleClick,
  items,
  onItemClick,
}: {
  label: string;
  width?: number;
  onTitleClick?: () => void;
  items: DropdownItem[];
  onItemClick: (item: DropdownItem) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={onTitleClick}
        className="flex items-center gap-1 text-white text-lg hover:opacity-90"
      >
        {label}
        <span className="text-2xl leading-none">▾</span>
      </button>

      {open && (
        <div
          className="absolute left-0 mt-2 rounded-lg shadow-lg border border-white/10 bg-[#001F3F] overflow-hidden"
          style={{ width }}
        >
          {items.map((it) => (
            <button
              key={it.label}
              onClick={() => onItemClick(it)}
              className="w-full text-left px-4 py-3 text-white/95 hover:bg-white/10 text-sm"
            >
              {it.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}