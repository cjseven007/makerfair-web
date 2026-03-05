import React from "react";
import NavigateDropdown from "./NavigateDropDown";
import type { NavItem, DropdownItem } from "../data/nav";

export default function MakerFairBar({
  logoSrc,
  onLogo,
  onSearch,
  items,
  onNavAction,
}: {
  logoSrc: string;
  onLogo: () => void;
  onSearch: () => void;
  items: NavItem[];
  onNavAction: (action: DropdownItem["action"]) => void;
}) {
  return (
    <header className="sticky top-0 z-40 bg-[#001F3F]">
      <div className="h-24 px-6 flex items-center gap-3">
        <button
          onClick={onLogo}
          className="rounded-md hover:bg-white/10 px-2 py-1"
          title="Home"
        >
          <img
            src={logoSrc}
            alt="MakerFair Logo"
            className="h-16 w-[200px] object-contain"
          />
        </button>

        <div className="flex-1 flex items-center justify-center gap-6">
          {items.map((it) => {
            if (it.kind === "link") {
              return (
                <button
                  key={it.label}
                  onClick={() => onNavAction(it.action)}
                  className="text-white text-lg hover:opacity-90"
                >
                  {it.label}
                </button>
              );
            }
            return (
              <NavigateDropdown
                key={it.label}
                label={it.label}
                width={it.width}
                onTitleClick={() => onNavAction(it.titleAction)}
                items={it.items}
                onItemClick={(item) => onNavAction(item.action)}
              />
            );
          })}
        </div>

        <button
          onClick={onSearch}
          className="text-white text-3xl px-2 py-2 rounded-md hover:bg-white/10"
          aria-label="Search"
          title="Search"
        >
          🔍
        </button>
      </div>

      {/* gold separator like Flutter */}
      <div className="h-[7px] w-full bg-[#D4AF37]" />
    </header>
  );
}