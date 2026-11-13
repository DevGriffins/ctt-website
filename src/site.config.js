// One place for the settings that change between staging and launch.
export const site = {
  name: "Celotti Tech Talent",
  legalName: "Celotti Tech Talent (Singapore) Pte. Ltd.",

  // Production domain. Used for canonical URLs, Open Graph tags, sitemap.xml and robots.txt.
  url: "https://www.celottitechtalent.com",

  // Keep false on staging so search engines do not index the review build. Set to true for launch.
  allowIndexing: false,

  // true: canonical URLs end with "/" (matches plain static hosting, where /about is served from /about/index.html).
  trailingSlash: true,

  email: "advisory@celottitechtalent.com",
  address: {
    streetAddress: "JustCo, The Metropolis, 9 North Buona Vista Drive, #02-01",
    addressLocality: "Singapore",
    postalCode: "138588",
    addressCountry: "SG",
  },

  // Monthly fee shown across Talent as a Service.
  monthlyFee: "USD 4,000",

  // Third brand colour (Electric Blue, proposed accent in the 2026 brand guidelines).
  accent: {
    default: "blue", // "blue" or "off"
    showToggle: true, // review switch in the corner of every page; set to false once the client decides
  },
};
