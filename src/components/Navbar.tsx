import { useState } from "react";
import { NavLink } from "react-router-dom";

const linkClass =
  "px-3 py-2 rounded-md text-sm font-semibold transition hover:bg-white/10";
const activeClass = "bg-white/15";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#001F3F]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="/assets/PMFnewlogo.png"
              alt="PETROBOTS Maker Fair"
              className="h-10 w-auto object-contain"
            />
            <span className="hidden sm:inline text-white font-extrabold tracking-wide">
              Maker Fair 2026
            </span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2 text-white">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/competition"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Competition
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white rounded-md px-3 py-2 hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <nav className="md:hidden pb-3 text-white">
            <div className="flex flex-col gap-1">
              <NavLink
                to="/"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/competition"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Competition
              </NavLink>
            </div>
          </nav>
        )}
      </div>

      {/* Gold separator */}
      <div className="h-[6px] bg-[#D4AF37]" />
    </header>
  );
}