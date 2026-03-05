export type NavSection =
  | "home"
  | "about"
  | "support"
  | "contact"
  | "competition"
  | "category"
  | "registration"
  | "faq";

export type DropdownItem = {
  label: string;
  action: { type: "scroll" | "route"; target: NavSection; route?: string };
};

export type NavItem =
  | { kind: "link"; label: string; action: DropdownItem["action"] }
  | {
      kind: "dropdown";
      label: string;
      width?: number;
      titleAction: DropdownItem["action"];
      items: DropdownItem[];
    };

export const NAV_ITEMS: NavItem[] = [
  { kind: "link", label: "ABOUT PMF", action: { type: "scroll", target: "about" } },
  {
    kind: "dropdown",
    label: "SUPPORT US",
    width: 220,
    titleAction: { type: "scroll", target: "support" },
    items: [
      { label: "MAKE A CONTRIBUTION", action: { type: "scroll", target: "support" } },
      { label: "BECOME OUR SPONSOR", action: { type: "scroll", target: "support" } },
    ],
  },
  {
    kind: "dropdown",
    label: "COMPETITION",
    width: 220,
    titleAction: { type: "route", target: "competition", route: "/competition" },
    items: [
      { label: "CATEGORIES", action: { type: "route", target: "category", route: "/competition#category" } },
      { label: "JOIN ROBOTRACK GP", action: { type: "route", target: "registration", route: "/competition#registration" } },
      { label: "FAQs", action: { type: "route", target: "faq", route: "/competition#faq" } },
    ],
  },
  { kind: "link", label: "CONTACT", action: { type: "scroll", target: "contact" } },
];

export const SEARCH_HINT =
  "Search: about, support, contact, category, registration, faq, competition";