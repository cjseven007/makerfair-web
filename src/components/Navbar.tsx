import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
      isActive
        ? "bg-[#001F3F] text-white shadow-md"
        : "text-gray-600 hover:bg-gray-100 hover:text-[#001F3F]"
    }`;

  const getMobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-3 rounded-xl text-base font-bold transition-all ${
      isActive
        ? "bg-[#001F3F] text-white"
        : "text-gray-600 hover:bg-gray-50 hover:text-[#001F3F]"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <img
              src="./assets/PMFnewlogo.png"
              alt="PETROBOTS Maker Fair"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-[#001F3F] font-extrabold tracking-wide leading-tight">
                PETROBOTS Maker Fair
              </span>
              <span className="text-[#D4AF37] font-bold text-xs tracking-widest uppercase">
                2026
              </span>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" end className={getLinkClass}>
              Home
            </NavLink>
            <NavLink to="/competition" className={getLinkClass}>
              Competition
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-gray-50 text-[#001F3F] hover:bg-gray-100 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="text-xl font-bold">{open ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <nav className="md:hidden pb-6 pt-2 border-t border-gray-100 animate-in slide-in-from-top-2 fade-in">
            <div className="flex flex-col gap-2">
              <NavLink to="/" end onClick={() => setOpen(false)} className={getMobileLinkClass}>
                Home
              </NavLink>
              <NavLink to="/competition" onClick={() => setOpen(false)} className={getMobileLinkClass}>
                Competition
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}