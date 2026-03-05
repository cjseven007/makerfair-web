import{ useState } from "react";
import InfoNote from "../components/InfoNote";
import { COMPETITION } from "../data/competition";
import { openExternal } from "../utils/url";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-4 py-4 flex items-center justify-between"
      >
        <span className="font-semibold text-[#001F3F]">{q}</span>
        <span className="text-xl text-gray-500">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-4 pb-4 text-sm text-gray-700">{a}</div>}
    </div>
  );
}

export default function CompetitionPage() {
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 space-y-12">
        {/* Intro */}
        <section className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
          <h1 className="text-[#001F3F] font-extrabold text-3xl">
            {COMPETITION.title}
          </h1>
          <p className="mt-3 text-gray-700 leading-relaxed">{COMPETITION.intro}</p>

          <div className="mt-6 h-52 w-full rounded-xl border border-[#001F3F]/20 bg-[#001F3F]/10 flex items-center justify-center text-[#001F3F] font-semibold">
            RoboTrack GP Banner
          </div>
        </section>

        {/* Categories */}
        <section>
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <h2 className="text-[#001F3F] font-extrabold text-3xl">
                Competition Categories
              </h2>
              <p className="mt-2 text-gray-600">
                Choose your category based on experience and hardware capability.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {COMPETITION.categories.map((c) => (
              <div
                key={c.title}
                className={`rounded-2xl border-2 ${c.borderClass} bg-white shadow-sm p-6`}
              >
                <div className={`font-extrabold text-xl ${c.titleClass}`}>
                  {c.title}
                </div>
                <div className="mt-1 font-semibold text-gray-800">{c.subtitle}</div>

                <ul className="mt-4 text-sm text-gray-700 space-y-2 list-disc pl-5">
                  {c.descriptionLines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>

                <div className="mt-5">
                  <button
                    onClick={() => openExternal(COMPETITION.participantsBookletUrl)}
                    className="w-full sm:w-auto rounded-lg bg-[#001F3F] text-white font-semibold px-4 py-3 hover:opacity-95"
                  >
                    View Participants Booklet
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <InfoNote text={COMPETITION.note} />
          </div>
        </section>

        {/* Registration */}
        <section className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
          <h2 className="text-[#001F3F] font-extrabold text-2xl">
            Register for RoboTrack GP
          </h2>
          <p className="mt-2 text-gray-700">
            Ready to compete? Register using the official form.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openExternal(COMPETITION.registrationFormUrl)}
              className="rounded-lg bg-[#001F3F] text-white font-semibold px-5 py-3 hover:opacity-95"
            >
              Open Registration Form
            </button>
          </div>

          <div className="mt-6 rounded-xl bg-gray-50 p-4">
            <div className="text-[#001F3F] font-extrabold">Registration Fees</div>
            <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
              {COMPETITION.fees.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="mt-2 text-xs text-gray-600">{COMPETITION.includes}</div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-[#001F3F] font-extrabold text-3xl">FAQ</h2>
          <div className="mt-6 space-y-3">
            {COMPETITION.faq.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}