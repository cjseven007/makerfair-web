import { useEffect, useMemo, useRef, useState } from "react";
import { HOME } from "../data/home";
import { mailTo, openExternal } from "../utils/url";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  // slideshow (mobile friendly)
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setIdx((prev) => (prev + 1) % HOME.heroImages.length);
    }, 8000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  const heroBg = useMemo(() => HOME.heroImages[idx], [idx]);

  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <div
          className="h-[72vh] min-h-[520px] w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0,31,63,0.65), rgba(0,31,63,0.65)), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white text-xs sm:text-sm">
                📍 UTP, Perak • 27–28 June 2026
              </p>

              <h1 className="mt-4 text-white font-extrabold tracking-tight text-4xl sm:text-5xl">
                {HOME.title}
              </h1>

              <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed">
                {HOME.tagline}
              </p>

              <p className="mt-3 text-white/80 text-sm sm:text-base">
                {HOME.dateVenue}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate("/competition")}
                  className="rounded-lg bg-white text-[#001F3F] font-semibold px-5 py-3 hover:opacity-95"
                >
                  Explore Competition
                </button>
                <button
                  onClick={() => openExternal(HOME.marketingProposalUrl)}
                  className="rounded-lg border border-white/70 text-white font-semibold px-5 py-3 hover:bg-white/10"
                >
                  View Proposal
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* dots */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
          {HOME.heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-6 bg-white" : "w-2 bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 space-y-14">
        {/* About */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* About Maker Fair */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src={HOME.about.makerFair.logo}
                  alt="PETROBOTS Maker Fair logo"
                  className="h-full w-full object-contain p-2"
                />
              </div>
              <div>
                <h2 className="text-[#001F3F] font-extrabold text-2xl sm:text-3xl">
                  {HOME.about.makerFair.title}
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  {HOME.about.makerFair.subtitle}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4 text-gray-800 leading-relaxed">
              {HOME.about.makerFair.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}

              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {HOME.about.makerFair.keyFacts.map((f) => (
                    <div key={f.label} className={f.label === "Venues" ? "sm:col-span-2" : ""}>
                      <div className="text-gray-500">{f.label}</div>
                      <div className="font-semibold text-gray-800">{f.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* About Organizer */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src={HOME.about.organizer.logo}
                  alt="PETROBOTS logo"
                  className="h-full w-full object-contain p-2"
                />
              </div>
              <div>
                <h2 className="text-[#001F3F] font-extrabold text-2xl sm:text-3xl">
                  {HOME.about.organizer.title}
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  {HOME.about.organizer.subtitle}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4 text-gray-800 leading-relaxed">
              {HOME.about.organizer.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}

              <div className="rounded-xl border border-[#001F3F]/10 bg-[#001F3F]/5 p-4">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <div className="text-[#001F3F] font-extrabold">
                      {HOME.about.organizer.pastExecution.title}
                    </div>
                    <div className="mt-1 text-xs text-gray-600">
                      {HOME.about.organizer.pastExecution.stats?.map((s) => `${s.label}: ${s.value}`).join(" • ")}
                    </div>
                  </div>
                </div>

                <div className="mt-3 space-y-3 text-sm text-gray-700 leading-relaxed">
                  {HOME.about.organizer.pastExecution.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-[#001F3F] font-extrabold text-3xl">
                Support the Event
              </h2>
              <p className="mt-2 text-gray-600">
                Choose a support path that fits you — contributor or sponsor.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contributor */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 shadow-sm">
              <div className="text-[#001F3F] font-extrabold text-xl">
                Contributor Support
              </div>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                Non-commercial support for the event. Appreciation-based contribution to foster maker culture.
              </p>

              <ul className="mt-4 text-sm text-gray-700 list-disc pl-5 space-y-1">
                {HOME.contributor.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-5 text-xs font-extrabold text-[#001F3F]">
                {HOME.contributor.role}
              </div>
              <div className="text-sm font-semibold text-gray-800">
                {HOME.contributor.name}
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openExternal(HOME.marketingProposalUrl)}
                  className="rounded-lg bg-[#001F3F] text-white font-semibold px-4 py-3 hover:opacity-95"
                >
                  View Marketing Proposal
                </button>
                <button
                  onClick={() => mailTo(HOME.contributor.email)}
                  className="rounded-lg border border-[#001F3F]/30 bg-white text-[#001F3F] font-semibold px-4 py-3 hover:bg-gray-50"
                >
                  Email Contributor
                </button>
              </div>
            </div>

            {/* Sponsor */}
            <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-6 shadow-sm">
              <div className="text-[#001F3F] font-extrabold text-xl">
                Event Sponsorship
              </div>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                Commercial partnership opportunities with branding, engagement, and social media exposure.
              </p>

              <ul className="mt-4 text-sm text-gray-700 list-disc pl-5 space-y-1">
                {HOME.sponsor.bullets.slice(0, 5).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-5 text-xs font-extrabold text-[#001F3F]">
                {HOME.sponsor.role}
              </div>
              <div className="text-sm font-semibold text-gray-800">
                {HOME.sponsor.name}
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openExternal(HOME.marketingProposalUrl)}
                  className="rounded-lg bg-[#001F3F] text-white font-semibold px-4 py-3 hover:opacity-95"
                >
                  View Marketing Proposal
                </button>
                <button
                  onClick={() => mailTo(HOME.sponsor.email)}
                  className="rounded-lg border border-[#001F3F]/30 bg-white text-[#001F3F] font-semibold px-4 py-3 hover:bg-gray-50"
                >
                  Email Sponsor
                </button>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs italic text-gray-500">
            Contributor support does not include branding, publicity, or commercial benefits and follows UTP financial governance policy.
          </p>
        </section>

        {/* Contact */}
        <section className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
          <h2 className="text-[#001F3F] font-extrabold text-2xl">Contact</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HOME.contacts.map((c) => (
              <div key={c.email} className="rounded-xl border border-gray-200 p-4">
                <div className="text-[#001F3F] font-bold">{c.role}</div>
                <div className="text-sm text-gray-700">{c.name}</div>
                <button
                  onClick={() => mailTo(c.email)}
                  className="mt-2 text-sm text-[#001F3F] underline"
                >
                  {c.email}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
}