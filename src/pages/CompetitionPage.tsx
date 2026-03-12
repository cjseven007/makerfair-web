import { useState } from "react";
import InfoNote from "../components/InfoNote";
import { COMPETITION } from "../data/competition";
import { openExternal } from "../utils/url";

// --- Prize Podium Visual Component ---
function PrizePodium({ first, second, third }: { first: string; second: string; third: string }) {
  return (
    <div className="flex items-end justify-center gap-2 sm:gap-3 mt-10 mb-8 h-56 sm:h-64 px-2">
      {/* 2nd Place / 1st Runner Up */}
      <div className="w-[30%] sm:w-36 bg-[#B0BAC5] h-[65%] rounded-t-2xl flex flex-col items-center justify-start pt-5 shadow-inner relative transition-transform hover:-translate-y-1">
        <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-600 uppercase tracking-widest text-center px-1">
          1st Runner Up
        </span>
        <span className="text-xl sm:text-3xl font-extrabold text-white mt-1 drop-shadow-sm">{second}</span>
        <span className="text-[10px] font-bold text-slate-500 mt-2 uppercase">2nd</span>
      </div>

      {/* 1st Place / Champion */}
      <div className="w-[35%] sm:w-44 bg-[#DFB13E] h-[95%] rounded-t-2xl flex flex-col items-center justify-start pt-7 shadow-xl z-10 relative transition-transform hover:-translate-y-2">
        <div className="absolute -top-12 text-5xl drop-shadow-lg">👑</div>
        <span className="text-[11px] sm:text-xs font-extrabold text-yellow-950 uppercase tracking-widest text-center px-1">
          Champion
        </span>
        <span className="text-2xl sm:text-4xl font-extrabold text-white mt-2 drop-shadow-md">{first}</span>
        <span className="text-[10px] font-bold text-yellow-900 mt-3 uppercase">1st</span>
      </div>

      {/* 3rd Place / 2nd Runner Up */}
      <div className="w-[30%] sm:w-36 bg-[#C07F5A] h-[50%] rounded-t-2xl flex flex-col items-center justify-start pt-4 shadow-inner relative transition-transform hover:-translate-y-1">
        <span className="text-[10px] sm:text-[11px] font-extrabold text-[#5c311c] uppercase tracking-widest text-center px-1 leading-tight">
          2nd Runner Up
        </span>
        <span className="text-lg sm:text-2xl font-extrabold text-white mt-1 drop-shadow-sm">{third}</span>
        <span className="text-[10px] font-bold text-[#7a462c] mt-2 uppercase">3rd</span>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50 focus:outline-none"
      >
        <span className="font-bold text-[#001F3F] text-lg">{q}</span>
        <span className="text-2xl text-gray-400 font-light">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-6 pb-6  font-light leading-relaxed">{a}</div>}
    </div>
  );
}

export default function CompetitionPage() {
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-20 space-y-20">
        
        {/* Intro Section */}
        <section className="rounded-[2rem] border border-gray-100 bg-slate-50 p-8 sm:p-12 text-center">
          <h1 className="text-[#001F3F] font-extrabold text-4xl sm:text-5xl tracking-tight">
            {COMPETITION.title}
          </h1>
          <p className="mt-4  text-lg sm:text-xl font-light max-w-3xl mx-auto leading-relaxed">
            {COMPETITION.intro}
          </p>
          <div className="mt-10 w-full rounded-2xl overflow-hidden shadow-lg relative">
            <img
              src="/assets/RoboTrackGPposter.png"
              alt="RoboTrack GP Banner"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Categories Section */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[#001F3F] font-extrabold text-3xl sm:text-4xl tracking-tight">
              Competition Categories
            </h2>
            <p className="mt-4 text-lg text-gray-500 font-light">
              Choose your category based on experience and hardware capability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {COMPETITION.categories.map((c) => {
              // Extract prize line for the podium, keep the rest for the list
              const prizeLine = c.descriptionLines.find((line) => line.startsWith("Prizes:"));
              const specLines = c.descriptionLines.filter((line) => !line.startsWith("Prizes:"));
              
              let prizes = { first: "TBA", second: "TBA", third: "TBA" };
              if (prizeLine) {
                const match1 = prizeLine.match(/1st (RM\d+|\$\d+)/i);
                const match2 = prizeLine.match(/2nd (RM\d+|\$\d+)/i);
                const match3 = prizeLine.match(/3rd (RM\d+|\$\d+)/i);
                if (match1) prizes.first = match1[1];
                if (match2) prizes.second = match2[1];
                if (match3) prizes.third = match3[1];
              }

              return (
                <div
                  key={c.title}
                  className={`rounded-3xl border border-gray-100 bg-white shadow-lg p-8 sm:p-10 flex flex-col relative overflow-hidden`}
                >
                  {/* Subtle top border accent */}
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${c.title === "Expert Category" ? "from-slate-400 to-slate-300" : "from-[#001F3F] to-[#003366]"}`} />
                  
                  <div className="text-center">
                    <div className={`font-extrabold text-3xl ${c.title === "Expert Category" ? "text-slate-700" : "text-[#001F3F]"}`}>
                      {c.title}
                    </div>
                    <div className="mt-2 font-bold text-[#D4AF37] tracking-wide uppercase text-sm">
                      {c.subtitle}
                    </div>
                  </div>

                  {/* Podium Visualization */}
                  <PrizePodium {...prizes} />
                  
                  {/* Specifications List */}
                  <div className="bg-slate-50 rounded-2xl p-6 grow border border-slate-100 mb-8">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Robot Specifications & Rules</div>
                    <ul className="text-gray-700 space-y-3 list-disc pl-5 font-light">
                      {specLines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => openExternal(COMPETITION.participantsBookletUrl)}
                    className="w-full rounded-full bg-[#001F3F] text-white font-bold px-6 py-4 hover:bg-[#003366] transition shadow-md"
                  >
                    View Participants Booklet
                  </button>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <InfoNote text={COMPETITION.note} />
          </div>
        </section>

        {/* Registration Section */}
        <section className="rounded-[2.5rem] border border-amber-100 bg-amber-50/30 p-8 sm:p-12 flex flex-col md:flex-row gap-10 items-center justify-between">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-[#001F3F] font-extrabold text-3xl sm:text-4xl tracking-tight">
              Ready to Compete?
            </h2>
            <p className=" font-light text-lg">
              Secure your spot in the RoboTrack GP by registering via our official form. Review the fees and inclusions below.
            </p>
            <button
              onClick={() => openExternal(COMPETITION.registrationFormUrl)}
              className="mt-4 inline-block rounded-full bg-[#D4AF37] text-white font-extrabold tracking-wide px-8 py-4 hover:bg-[#c4a133] transition shadow-lg"
            >
              Open Registration Form
            </button>
          </div>

          <div className="w-full md:w-1/2 bg-white rounded-3xl p-8 shadow-md border border-gray-100">
            <div className="text-[#001F3F] font-extrabold text-xl mb-4">Registration Fees</div>
            <ul className=" list-disc pl-5 space-y-2 font-medium">
              {COMPETITION.fees.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500 font-light italic">
              * {COMPETITION.includes}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[#001F3F] font-extrabold text-3xl sm:text-4xl tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {COMPETITION.faq.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}