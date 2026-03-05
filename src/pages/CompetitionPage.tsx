import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MakerFairBar from "../components/MakerFairBar";
import SearchModal from "../components/SearchModal";
import Section from "../components/Section";
import InfoNote from "../components/InfoNote";
import { NAV_ITEMS, SEARCH_HINT, type NavSection } from "../data/nav";
import { COMPETITION } from "../data/competition";
import { scrollToId } from "../utils/scroll";
import { openExternal } from "../utils/url";

function useHashScroll() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      // scroll to top intro
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const id = hash.replace("#", "");
    setTimeout(() => scrollToId(id), 0);
  }, [hash]);
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg bg-gray-50 overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-4 py-3 font-semibold text-[#001F3F] flex items-center justify-between"
      >
        <span>{q}</span>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-4 pb-4 text-sm text-gray-800">{a}</div>}
    </div>
  );
}

export default function CompetitionPage() {
  useHashScroll();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);

  const handleNav = (section: NavSection) => {
    if (section === "home") {
      navigate("/");
      return;
    }
    if (section === "about" || section === "support" || section === "contact") {
      navigate(`/#${section}`);
      return;
    }
    if (section === "competition") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // internal sections
    scrollToId(section);
  };

  const handleSearch = (q: string) => {
    if (!q) return;
    setSearchOpen(false);

    const allowed = ["about", "support", "contact", "category", "registration", "faq", "competition"];
    if (!allowed.includes(q)) {
      alert(`No results found for "${q}"`);
      return;
    }

    if (q === "about" || q === "support" || q === "contact") {
      navigate(`/#${q}`);
      return;
    }
    if (q === "competition") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    scrollToId(q);
  };

  return (
    <div className="min-h-screen bg-white">
      <MakerFairBar
        logoSrc="/assets/PMFnewlogo.png"
        onLogo={() => navigate("/")}
        onSearch={() => setSearchOpen(true)}
        items={NAV_ITEMS}
        onNavAction={(action) => {
          if (action.type === "scroll") handleNav(action.target);
          else navigate(action.route ?? "/competition");
        }}
      />

      <SearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSubmit={handleSearch}
        hint={SEARCH_HINT}
      />

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        {/* INTRO */}
        <Section id="intro">
          <h1 className="text-[#001F3F] font-extrabold text-3xl">
            {COMPETITION.title}
          </h1>
          <p className="mt-4 text-gray-800 leading-7">{COMPETITION.intro}</p>

          <div className="mt-6 h-52 w-full rounded-xl border border-[#001F3F]/30 bg-[#001F3F]/10 flex items-center justify-center text-[#001F3F] font-semibold">
            RoboTrack GP Banner
          </div>
        </Section>

        {/* CATEGORY */}
        <Section id="category">
          <h2 className="text-[#001F3F] font-extrabold text-3xl">
            Competition Categories
          </h2>
          <p className="mt-4 text-gray-800 leading-7">
            The RoboTrack GP tournament is divided into two distinct categories based on technical experience and hardware capabilities:
          </p>

          <div className="mt-6 space-y-6">
            {COMPETITION.categories.map((c) => (
              <div key={c.title} className={`rounded-xl border-2 ${c.borderClass} shadow-sm p-6 bg-white`}>
                <div className={`font-extrabold text-xl ${c.titleClass}`}>{c.title}</div>
                <div className="mt-2 font-semibold text-gray-800">{c.subtitle}</div>
                <ul className="mt-4 text-sm text-gray-700 space-y-1 list-disc pl-5">
                  {c.descriptionLines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>

                <div className="mt-4">
                  <button
                    onClick={() => openExternal(COMPETITION.participantsBookletUrl)}
                    className="px-4 py-2 rounded-md bg-[#001F3F] text-white hover:opacity-95"
                  >
                    {c.title} Participants Booklet
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <InfoNote text={COMPETITION.note} />
          </div>
        </Section>

        {/* REGISTRATION */}
        <Section id="registration">
          <h2 className="text-[#001F3F] font-extrabold text-3xl">
            Register for RoboTrack GP
          </h2>
          <p className="mt-4 text-gray-800">
            Ready to compete? Click the button below to open the registration form.
          </p>

          <div className="mt-6">
            <button
              onClick={() => openExternal(COMPETITION.registrationFormUrl)}
              className="px-6 py-3 rounded-md bg-[#001F3F] text-white hover:opacity-95"
            >
              Open Registration Form
            </button>
          </div>

          <div className="mt-6 rounded-lg bg-gray-50 p-4">
            <div className="text-[#001F3F] font-extrabold text-lg">Registration Fees:</div>
            <ul className="mt-2 text-sm text-gray-800 list-disc pl-5 space-y-1">
              {COMPETITION.fees.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="mt-2 text-xs text-gray-600">{COMPETITION.includes}</div>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <h2 className="text-[#001F3F] font-extrabold text-3xl">
            Frequently Asked Questions (FAQ)
          </h2>

          <div className="mt-6 space-y-3">
            {COMPETITION.faq.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}