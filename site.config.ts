/**
 * Single source of truth for all business / NAP (Name, Address, Phone) data.
 * Update values here and they propagate everywhere — header, footer, JSON-LD,
 * meta tags, contact page, etc.
 */
export const site = {
  name: "J&Hong Construction",
  legalName: "J&Hong Construction Inc.",
  tagline: "Roofing, Siding & Exterior Specialists. Serving Maryland Since 1998.",
  description:
    "Family-run roofing, siding, gutters, skylights and window contractor based in Gambrills, MD. Maryland Home Improvement License #109999. 5-star rated. Free estimates.",
  url: "https://jandhongconstruction.com",
  founded: 1998,
  phone: {
    display: "(410) 714-4664",
    tel: "+14107144664",
  },
  email: "estimates@jandhongconstruction.com",
  address: {
    street: "1513 Branchwood Terrace",
    city: "Gambrills",
    state: "MD",
    zip: "21054",
    country: "US",
  },
  // Approx. coords for Gambrills, MD
  geo: {
    latitude: 39.0418,
    longitude: -76.6919,
  },
  license: {
    authority: "Maryland Home Improvement Commission",
    number: "109999",
  },
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { day: "Saturday", time: "8:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  serviceArea: [
    "Gambrills",
    "Crofton",
    "Annapolis",
    "Severna Park",
    "Bowie",
    "Odenton",
    "Millersville",
    "Davidsonville",
    "Anne Arundel County",
  ],
  rating: {
    score: 5.0,
    count: 27, // displayed; replace with live count when available
    platform: "Google",
    url: "https://www.google.com/search?q=J%26Hong+Construction+Gambrills+MD",
  },
  social: {
    google: "https://www.google.com/search?q=J%26Hong+Construction+Gambrills+MD",
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
  /**
   * Web3Forms access key — replace with the real one issued at
   * https://web3forms.com (free, no account required).
   * Stored here (not in .env) because Web3Forms keys are designed to be
   * public + protected by domain-allowlisting on their dashboard.
   */
  web3formsKey: "REPLACE_WITH_WEB3FORMS_ACCESS_KEY",
} as const;

export type Site = typeof site;
