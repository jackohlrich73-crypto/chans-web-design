const phone = "+14022157994";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Chan's Web Design",
  telephone: phone,
  url: "https://chanswebdesign.com",
  description:
    "Affordable, mobile-friendly website design for contractors and local service businesses.",
  areaServed: [
    {
      "@type": "City",
      name: "Lincoln"
    },
    {
      "@type": "City",
      name: "Omaha"
    },
    {
      "@type": "State",
      name: "Nebraska"
    },
    {
      "@type": "Place",
      name: "Surrounding areas"
    }
  ],
  priceRange: "$$",
  founder: {
    "@type": "Person",
    name: "Jack Ohlrich"
  },
  sameAs: []
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Contractor website design",
  provider: {
    "@type": "LocalBusiness",
    name: "Chan's Web Design",
    telephone: phone
  },
  serviceType: [
    "Contractor website design",
    "Local business web design",
    "Small business websites"
  ],
  areaServed: "Lincoln, Omaha, Nebraska, and surrounding areas",
  description:
    "Clean, practical websites for welders, plumbers, electricians, roofers, landscapers, concrete companies, HVAC companies, painters, handymen, and small local businesses.",
  offers: {
    "@type": "Offer",
    price: "200",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    description:
      "Limited portfolio rate for starter contractor websites while portfolio spots are available."
  }
};
