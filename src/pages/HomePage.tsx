import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MakerFairBar from "../components/MakerFairBar";
import SearchModal from "../components/SearchModal";
import Section from "../components/Section";
import HighlightCard from "../components/HighlightCard";
import Footer from "../components/Footer";
import { NAV_ITEMS, SEARCH_HINT, type NavSection } from "../data/nav";
import { HOME } from "../data/home";
import { scrollToId } from "../utils/scroll";
import { mailTo, openExternal } from "../utils/url";

function useHashScroll() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    // delay to allow render
    setTimeout(() => scrollToId(id), 0);
  }, [hash]);
}

export default function HomePage() {
  useHashScroll();
  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);

  // slideshow
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setIdx((prev) => (prev + 1) % HOME.heroImages.length);
    }, 10_000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  const heroBg = useMemo(() => HOME.heroImages[idx], [idx]);

  const handleNav = (section: NavSection) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (section === "competition" || section === "category" || section === "registration" || section === "faq") {
      // route to competition + optionally hash
      if (section === "competition") navigate("/competition");
      else navigate(`/competition#${section}`);
      return;
    }
    // about/support/contact are on homepage
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
    handleNav(q as NavSection);
  };

  return (
    <div className="min-h-screen bg-white">
      <MakerFairBar
        logoSrc="/assets/PMFnewlogo.png"
        onLogo={() => handleNav("home")}
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

      {/* HERO */}
      <div className="relative w-full">
        <div
          className="h-[80vh] w-full bg-[#001F3F]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,31,63,0.55), rgba(0,31,63,0.55)), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-white font-extrabold text-4xl md:text-5xl">
              {HOME.title}
            </h1>
            <div className="mt-4 text-white font-extrabold text-xl md:text-2xl">
              {HOME.tagline}
            </div>
            <div className="mt-6 text-white text-sm md:text-base">
              {HOME.dateVenue}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => navigate("/competition")}
                className="px-6 py-3 border border-white text-white rounded-md hover:bg-white/10"
              >
                Explore Competition
              </button>
              <button
                onClick={() => scrollToId("support")}
                className="px-6 py-3 border border-white text-white rounded-md hover:bg-white/10"
              >
                Support Us
              </button>
            </div>
          </div>
        </div>

        {/* dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {HOME.heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-3 bg-white" : "w-2 bg-white/60"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-[#001F3F] font-extrabold text-3xl">
          About PETROBOTS Maker Fair
        </h2>
        <p className="mt-4 text-gray-800 leading-7">{HOME.aboutText}</p>

        <div className="mt-6 flex flex-wrap gap-4">
          {HOME.highlights.map((h) => (
            <HighlightCard key={h.title} title={h.title} description={h.description} />
          ))}
        </div>
      </Section>

      {/* SUPPORT */}
      <Section id="support" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-[#001F3F] font-extrabold text-3xl">Support the Event</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contributor */}
          <div className="rounded-xl bg-blue-50 border border-blue-100 shadow-sm p-6">
            <div className="text-[#001F3F] font-extrabold text-xl">Contributor Support</div>
            <p className="mt-3 text-gray-800 leading-7 text-sm">
              Non-commercial support for the event. Appreciation-based contribution to foster maker culture.
            </p>

            <details className="mt-4">
              <summary className="cursor-pointer font-semibold text-[#001F3F]">
                What Contributors Receive
              </summary>
              <ul className="mt-2 text-sm text-gray-800 list-disc pl-5">
                {HOME.contributor.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </details>

            <div className="mt-4 text-xs font-extrabold text-[#001F3F]">
              {HOME.contributor.role}
            </div>
            <div className="text-sm font-semibold text-gray-800">{HOME.contributor.name}</div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={() => openExternal(HOME.marketingProposalUrl)}
                className="px-4 py-2 rounded-md bg-[#001F3F] text-white hover:opacity-95"
              >
                View Marketing Proposal
              </button>
              <button
                onClick={() => mailTo(HOME.contributor.email)}
                className="px-4 py-2 rounded-md bg-[#001F3F] text-white hover:opacity-95"
              >
                Contact as Contributor
              </button>
            </div>
          </div>

          {/* Sponsor */}
          <div className="rounded-xl bg-amber-50 border border-amber-100 shadow-sm p-6">
            <div className="text-[#001F3F] font-extrabold text-xl">Event Sponsorship</div>
            <p className="mt-3 text-gray-800 leading-7 text-sm">
              Commercial partnership opportunities with branding, engagement, and social media exposure.
            </p>

            <details className="mt-4">
              <summary className="cursor-pointer font-semibold text-[#001F3F]">
                What Sponsors Receive
              </summary>
              <ul className="mt-2 text-sm text-gray-800 list-disc pl-5">
                {HOME.sponsor.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </details>

            <div className="mt-4 text-xs font-extrabold text-[#001F3F]">
              {HOME.sponsor.role}
            </div>
            <div className="text-sm font-semibold text-gray-800">{HOME.sponsor.name}</div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={() => openExternal(HOME.marketingProposalUrl)}
                className="px-4 py-2 rounded-md bg-[#001F3F] text-white hover:opacity-95"
              >
                View Marketing Proposal
              </button>
              <button
                onClick={() => mailTo(HOME.sponsor.email)}
                className="px-4 py-2 rounded-md bg-[#001F3F] text-white hover:opacity-95"
              >
                Contact as Sponsor
              </button>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs italic text-gray-500">
          Contributor support does not include branding, publicity, or commercial benefits and follows UTP financial governance policy.
        </p>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-[#001F3F] font-extrabold text-3xl">Contact Us</h2>

        <div className="mt-6 space-y-5">
          {HOME.contacts.map((c) => (
            <div key={c.email}>
              <div className="text-[#001F3F] font-extrabold">{c.role}</div>
              <div className="text-sm text-gray-700">{c.name}</div>
              <button
                onClick={() => mailTo(c.email)}
                className="text-sm text-[#001F3F] underline hover:opacity-90"
              >
                {c.email}
              </button>
            </div>
          ))}
        </div>
      </Section>

      <Footer
        logo={HOME.footer.logo}
        socials={HOME.footer.socials}
        title="PETROBOTS Maker Fair 2026"
        address={HOME.footer.address}
        note={HOME.footer.note}
      />
    </div>
  );
}