export const COMPETITION = {
  title: "PETROBOTS RoboTrack GP 2026",
  intro:
    "Welcome to the ultimate robotics competition! Showcase your innovation, engineering skills, and creativity on the global stage.",
  participantsBookletUrl:"/Documents/PMF26 COMPETITION BOOKLET.pdf",
  ExpertCategoryMapUrl:"./assets/Map/Expert (Half) map.pdf",
  GrandmasterCategoryMapUrl:"./assets/Map/Grandmaster map.pdf",
  registrationFormUrl: "https://forms.office.com/r/YrcvZ61nTff",
  categories: [
    {
      title: "Expert Category",
      subtitle: "Elementary School / Secondary School",
      borderClass: "border-slate-500",
      titleClass: "text-slate-600",
      mapUrl: "./assets/Map/Expert (Half) map.pdf",
      descriptionLines: [
        "LEGO or Arduino (8-bit Atmel) platforms",
        "Maximum 2 motors for locomotion",
        "Maximum 2 IR sensors only",
        "Max voltage: 9.6V (2S LiPo or 6x AA)",
        "Robot footprint: 25cm x 25cm",
        "Entry Fee (per team): RM200 (Local) / $100 (International)",
        "Prizes: 1st RM2000 | 2nd RM1500 | 3rd RM1000",
      ],
    },
    {
      title: "Grandmaster Category",
      subtitle: "University / Open Level (Professionals Welcome)",
      borderClass: "border-[#001F3F]",
      titleClass: "text-[#001F3F]",
      mapUrl: "./assets/Map/Grandmaster map.pdf",
      descriptionLines: [
        "Any microcontroller (ESP32, STM32, Raspberry Pi, etc.)",
        "No limit on motors or sensors",
        "Encoders & advanced sensors allowed",
        "Max voltage: 12.6V (3S LiPo)",
        "Robot footprint: 25cm x 25cm",
        "Entry Fee: RM300 (Local) / $150 (International)",
        "Prizes: 1st RM3000 | 2nd RM2000 | 3rd RM1500",
      ],
    },
  ],
  note:
    "Rules and regulations are subject to change at the discretion of the PETROBOTS Maker Fair 2026 Organizing Committee. All participants agree to abide by updates communicated via official channels. The Committee reserves the right to make final decisions on all matters related to the competition, and their rulings are binding.",
  fees: [
    "Expert: RM200 (Local) / $100 (International)",
    "Grandmaster: RM300 (Local) / $150 (International)",
  ],
  includes: "Includes: Participation certificate, door gift, 3 meals/day, Award Night access",
  faq: [
    {
      q: "When is the competition?",
      a: "PETROBOTS Maker Fair 2026 will be held on 3rd-4th October 2026 at Universiti Teknologi PETRONAS (UTP).",
    },
    {
      q: "What are the team size limits?",
      a: "Teams must have 1-3 participants. One adult mentor is allowed for supervision but cannot program or handle the robot during runs.",
    },
    {
      q: "Is there a registration fee?",
      a: "Yes: Expert RM200/$100, Grandmaster RM300/$150. Fees include certificates, meals, door gifts, and Award Night access.",
    },
    {
      q: "Can I use any microcontroller?",
      a: "Expert: Only LEGO or 8-bit Arduino (Uno/Nano/Mega). Grandmaster: Any controller (ESP32, STM32, Raspberry Pi, etc.).",
    },
    {
      q: "What about sensors?",
      a: "Expert: Max 2 IR sensors only. Grandmaster: No limits — IR arrays, cameras, encoders all allowed.",
    },
    {
      q: "Is technical inspection required?",
      a: "Yes! All robots must pass mandatory inspection 30 minutes before the tournament. Failed robots get 15 minutes to fix or face disqualification.",
    },
  ],
};