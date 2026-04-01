import { HOME } from "../data/home";

interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

interface SponsorTiers {
  platinum: Sponsor[];
}

interface SponsorsData {
  title: string;
  subtitle?: string;
  tiers: SponsorTiers;
  note?: string;
}

export default function Sponsors() {
  // If no sponsors data exists, don't render anything
  if (!HOME.sponsors || !HOME.sponsors.tiers) return null;

  const { tiers, title, subtitle, note } = HOME.sponsors as SponsorsData;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h2 className="text-[#001F3F] font-extrabold text-3xl sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {tiers.platinum?.length > 0 && (
          <div className="mt-12">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-sm font-bold text-[#001F3F] uppercase tracking-widest">
                Platinum Sponsors
              </span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {tiers.platinum.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:opacity-90 transition-opacity"
                  aria-label={s.name}
                >
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="h-20 md:h-24 object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition"
                  />
                </a>
              ))}
            </div>
          </div>
        )}
        {
        <div className="mt-12 pt-8">
          <p className="text-gray-600 font-light mb-4">
            Interested in partnering with PETROBOTS Maker Fair 2026?
          </p>
          <button
            onClick={() => window.open(HOME.marketingProposalUrl, '_blank')}
            className="rounded-full bg-[#001F3F] text-white font-semibold px-6 py-3 hover:opacity-90 transition"
          >
            Download Marketing Proposal
          </button>
        </div>
        }

        {note && (
          <p className="mt-10 text-xs text-gray-400 font-light">{note}</p>
        )}
      </div>
    </section>
  );
}