import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cleanwatersupply247.co.za"),
  title: {
    default:
      "Emergency Bulk Water Delivery in Gauteng | Pretoria & Johannesburg 24/7",
    template: "%s | Clean Water Supply 24/7",
  },
  description:
    "Clean Water Supply 24/7 provides emergency bulk water delivery across Gauteng including Pretoria, Johannesburg, Centurion and Midrand. 24/7 water tanker services for homes, swimming pools and construction sites.",
  
    icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  
    openGraph: {
    title:
      "Emergency Bulk Water Delivery in Gauteng | 24/7 Water Supply Services",
    description:
      "Fast and reliable bulk water delivery across Pretoria, Johannesburg and surrounding Gauteng areas. Available 24/7.",
    url: "https://cleanwatersupply247.co.za",
    siteName: "Clean Water Supply 24/7",
    locale: "en_ZA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://cleanwatersupply247.co.za/#localbusiness",
    name: "Clean Water Supply 24/7",
    url: "https://cleanwatersupply247.co.za",
    logo: "https://cleanwatersupply247.co.za/logo.png",
    image: "https://cleanwatersupply247.co.za/logo.png",
    telephone: "+27734634306",
    priceRange: "$$",
    description:
      "24/7 emergency bulk water delivery service across Gauteng including Pretoria, Johannesburg, Centurion and Midrand.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pretoria",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.7479,
      longitude: 28.2293,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Gauteng" },
      { "@type": "City", name: "Pretoria" },
      { "@type": "City", name: "Johannesburg" },
      { "@type": "City", name: "Centurion" },
      { "@type": "City", name: "Midrand" },
      { "@type": "City", name: "Centurion" },
      { "@type": "City", name: "Sandton" },
      { "@type": "City", name: "Randburg"},
      { "@type": "City", name: "Kempton Park"},
      { "@type": "City", name: "ANYWHERE around GAUTENG!!"},
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.facebook.com/cleanwatersupply247",
      "https://wa.me/27734634306",
      "https://maps.app.goo.gl/EXBAh12PsbgisBbM7",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27734634306",
      contactType: "customer service",
      areaServed: "ZA",
      availableLanguage: "English",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "37",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* 🔵 GOOGLE ANALYTICS (Replace with your real ID) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4WEYCZHW26"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4WEYCZHW26');
          `}
        </Script>
      </head>

      <body className="bg-white text-gray-900 font-sans antialiased">
        {/* 🔎 Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}
      </body>
    </html>
  );
}