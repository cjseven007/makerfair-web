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
    <footer className="bg-[#001F3F] text-white pt-16 pb-8 border-t-[6px] border-[#D4AF37]">
      <div className="px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img
              src={logo}
              alt="PETROBOTS"
              className="h-20 object-contain bg-white/5 p-2 rounded-xl"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="text-xl font-extrabold text-white mt-2">{title}</div>
            <p className="text-sm text-white/60 text-center md:text-left leading-relaxed">
              Empowering students and makers through hands-on robotics, programming, and innovation.
            </p>
          </div>

          {/* Column 2: Details */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">
              Location
            </h3>
            <p className="text-sm text-white/80 text-center md:text-left leading-relaxed max-w-[250px]">
              {address}
            </p>
            <div className="pt-4">
              <h3 className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-3 text-center md:text-left">
                Connect With Us
              </h3>
              <div className="flex items-center gap-4">
                {socials.map((s) => (
                  <button
                    key={s.url}
                    onClick={() => openExternal(s.url)}
                    className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:scale-110 transition-all duration-300"
                    title={s.url}
                  >
                    <img src={s.icon} alt="" className="h-5 w-5 object-contain brightness-0 invert" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Notice */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">
              About Organizer
            </h3>
            <p className="text-sm text-white/80 text-center md:text-left leading-relaxed">
              {note}
            </p>
            <a 
              href="mailto:geoffrey_24006190@utp.edu.my" 
              className="mt-4 inline-block rounded-full bg-white/10 border border-white/20 px-6 py-2 text-sm font-semibold hover:bg-white hover:text-[#001F3F] transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-medium">
          <div>© {new Date().getFullYear()} UTP PETROBOTS. All rights reserved.</div>
          <div>Designed for PETROBOTS Maker Fair 2026</div>
        </div>
      </div>
    </footer>
  );
}