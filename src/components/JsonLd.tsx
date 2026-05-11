import { BUSINESS } from "@/constants";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${BUSINESS.seo.url}/#business`,
    name: BUSINESS.name,
    description: BUSINESS.seo.description,
    url: BUSINESS.seo.url,
    telephone: BUSINESS.phone.raw,
    image: `${BUSINESS.seo.url}/og-image.jpg`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      postalCode: BUSINESS.address.postalCode,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.5954,
      longitude: -3.7207,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "21:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
    hasMap: BUSINESS.social.google,
    sameAs: [BUSINESS.social.instagram, BUSINESS.social.google],
    servesCuisine: undefined,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Pilates Máquinas", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fisioterapia Manual", value: true },
      { "@type": "LocationFeatureSpecification", name: "Grupos reducidos (máx. 4 personas)", value: true },
      { "@type": "LocationFeatureSpecification", name: "Rehabilitación de Lesiones", value: true },
    ],
    areaServed: {
      "@type": "City",
      name: "Tres Cantos",
    },
  };

  // Remove undefined fields
  const cleanSchema = JSON.parse(JSON.stringify(schema, (_, v) => (v === undefined ? undefined : v)));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema) }}
    />
  );
}
