import React from "react";
import { openExternal } from "../utils/url";

export default function Footer({
  logo,
  socials,
  title,
  address,
  note,
}: {
  logo: string;
  socials: { icon: string; url: string }[];
  title: string;
  address: string;
  note: string;
}) {
  return (
    <footer className="bg-[#001F3F] text-white">
      <div className="px-6 py-10 max-w-6xl mx-auto flex flex-col items-center gap-4">
        <img
          src={logo}
          alt="PETROBOTS"
          className="h-[200px] w-[400px] object-contain"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />

        <div className="flex items-center justify-center gap-6">
          {socials.map((s) => (
            <button
              key={s.url}
              onClick={() => openExternal(s.url)}
              className="hover:opacity-90"
              title={s.url}
            >
              <img src={s.icon} alt="" className="h-8 w-8" />
            </button>
          ))}
        </div>

        <div className="text-lg font-extrabold text-white/70">{title}</div>
        <div className="text-center text-xs text-white">
          {address}
        </div>
        <div className="text-center text-[10px] text-white/30">{note}</div>
      </div>
    </footer>
  );
}