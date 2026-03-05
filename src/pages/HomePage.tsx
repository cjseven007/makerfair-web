import { useEffect, useMemo, useRef, useState } from "react";
import { HOME } from "../data/home";
import { mailTo, openExternal } from "../utils/url";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
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
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative">
        <div
          className="h-[72vh] min-h-[520px] w-full transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `linear-gradient(rgba(0,31,63,0.7), rgba(0,31,63,0.7)), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-white text-xs sm:text-sm font-medium tracking-wide">
                📍 {HOME.dateVenue}
              </p>
              <h1 className="mt-6 text-white font-extrabold tracking-tight text-5xl sm:text-6xl leading-tight">
                {HOME.title}
              </h1>
              <p className="mt-6 text-white/90 text-lg sm:text-xl leading-relaxed max-w-2xl font-light">
                {HOME.tagline}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/competition")}
                  className="rounded-full bg-white text-[#001F3F] font-bold px-8 py-4 hover:bg-gray-100 transition shadow-lg"
                >
                  Explore Competition
                </button>
                <button
                  onClick={() => openExternal(HOME.marketingProposalUrl)}
                  className="rounded-full border-2 border-white/70 text-white font-bold px-8 py-4 hover:bg-white/10 transition"
                >
                  View Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Slideshow Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
          {HOME.heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === i ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-20 space-y-20">
        
        {/* 1. About Event */}
        <section className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={HOME.about.makerFair.logo}
              alt="PETROBOTS Maker Fair logo"
              className="h-48 md:h-56 object-contain drop-shadow-sm"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <h2 className="text-[#001F3F] font-extrabold text-3xl sm:text-4xl tracking-tight">
              {HOME.about.makerFair.title}
            </h2>
            <p className="text-lg text-[#D4AF37] font-bold">
              {HOME.about.makerFair.subtitle}
            </p>
            <div className="space-y-4  text-lg leading-relaxed font-light">
              {HOME.about.makerFair.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Event Details (Separated) */}
        <section className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100">
          <div className="text-center mb-10">
            <h2 className="text-[#001F3F] font-extrabold text-3xl sm:text-4xl tracking-tight">
              Event Details
            </h2>
            <p className="mt-3 text-gray-500 font-light">Key information about the upcoming Maker Fair</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME.about.makerFair.keyFacts.map((f) => (
              <div key={f.label} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col justify-center">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  {f.label}
                </div>
                <div className="font-semibold text-[#001F3F]">
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. About Organizer */}
        <section className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={HOME.about.organizer.logo}
              alt="PETROBOTS logo"
              className="h-32 md:h-48 object-contain drop-shadow-sm"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <h2 className="text-[#001F3F] font-extrabold text-3xl sm:text-4xl tracking-tight">
              {HOME.about.organizer.title}
            </h2>
            <p className="text-lg text-[#D4AF37] font-bold">
              {HOME.about.organizer.subtitle}
            </p>
            <div className="space-y-4  text-lg leading-relaxed font-light">
              {HOME.about.organizer.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Past Execution */}
        <section className="bg-[#001F3F]/5 rounded-[2.5rem] p-8 sm:p-12 border border-[#001F3F]/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#001F3F] to-[#D4AF37]" />
          <div className="text-center space-y-6 mb-10">
            <h2 className="text-[#001F3F] font-extrabold text-3xl sm:text-4xl tracking-tight">
              {HOME.about.organizer.pastExecution.title}
            </h2>
            <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm text-sm font-bold text-[#001F3F]">
              🏆 {HOME.about.organizer.pastExecution.stats?.[0].label}: {HOME.about.organizer.pastExecution.stats?.[0].value}
            </div>
            <div className="space-y-4  text-lg leading-relaxed font-light text-left md:text-center max-w-4xl mx-auto">
              {HOME.about.organizer.pastExecution.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200/50">
            <img 
              src="/src/assets/Group-photo-Makerfair25.png" 
              alt="Past Execution Group Photo" 
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>
        </section>

        {/* 5. Support */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[#001F3F] font-extrabold text-3xl sm:text-4xl tracking-tight">
              Support the Event
            </h2>
            <p className="mt-4 text-lg text-gray-500 font-light">
              Choose a support path that fits you — contributor or sponsor.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contributor Card */}
            <div className="rounded-3xl border border-blue-100 bg-blue-50/30 p-8 sm:p-10 transition hover:shadow-md">
              <h3 className="text-[#001F3F] font-extrabold text-2xl">Contributor Support</h3>
              <p className="mt-3  leading-relaxed font-light">
                Non-commercial support for the event. Appreciation-based contribution to foster maker culture.
              </p>
              <ul className="mt-6  list-disc pl-5 space-y-2 font-light">
                {HOME.contributor.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <div className="mt-8 pt-8 border-t border-blue-100">
                <div className="text-xs font-bold tracking-widest text-gray-400 uppercase">{HOME.contributor.role}</div>
                <div className="mt-1 text-lg font-bold text-[#001F3F]">{HOME.contributor.name}</div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button onClick={() => openExternal(HOME.marketingProposalUrl)} className="rounded-full bg-[#001F3F] text-white font-semibold px-6 py-3 hover:opacity-90 transition">
                    View Proposal
                  </button>
                  <button onClick={() => mailTo(HOME.contributor.email)} className="rounded-full bg-white text-[#001F3F] font-semibold px-6 py-3 hover:bg-gray-50 transition border border-gray-200">
                    Email
                  </button>
                </div>
              </div>
            </div>

            {/* Sponsor Card */}
            <div className="rounded-3xl border border-amber-100 bg-amber-50/30 p-8 sm:p-10 transition hover:shadow-md">
              <h3 className="text-[#001F3F] font-extrabold text-2xl">Event Sponsorship</h3>
              <p className="mt-3  leading-relaxed font-light">
                Commercial partnership opportunities with branding, engagement, and social media exposure.
              </p>
              <ul className="mt-6  list-disc pl-5 space-y-2 font-light">
                {HOME.sponsor.bullets.slice(0, 5).map((b) => <li key={b}>{b}</li>)}
              </ul>
              <div className="mt-8 pt-8 border-t border-amber-100/60">
                <div className="text-xs font-bold tracking-widest text-gray-400 uppercase">{HOME.sponsor.role}</div>
                <div className="mt-1 text-lg font-bold text-[#001F3F]">{HOME.sponsor.name}</div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button onClick={() => openExternal(HOME.marketingProposalUrl)} className="rounded-full bg-[#001F3F] text-white font-semibold px-6 py-3 hover:opacity-90 transition">
                    View Proposal
                  </button>
                  <button onClick={() => mailTo(HOME.sponsor.email)} className="rounded-full bg-white text-[#001F3F] font-semibold px-6 py-3 hover:bg-gray-50 transition border border-gray-200">
                    Email
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-sm font-light text-gray-400 max-w-2xl mx-auto">
            Contributor support does not include branding, publicity, or commercial benefits and follows UTP financial governance policy.
          </p>
        </section>

        {/* 6. Contact */}
        <section className="pt-8 border-t border-gray-100">
          <h2 className="text-[#001F3F] font-extrabold text-3xl sm:text-4xl tracking-tight text-center mb-10">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {HOME.contacts.map((c) => (
              <div key={c.email} className="space-y-2">
                <div className="text-xs font-bold tracking-widest text-gray-400 uppercase">{c.role}</div>
                <div className="text-lg font-bold text-[#001F3F]">{c.name}</div>
                <button
                  onClick={() => mailTo(c.email)}
                  className="text-sm font-medium text-[#D4AF37] hover:text-[#001F3F] transition-colors"
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