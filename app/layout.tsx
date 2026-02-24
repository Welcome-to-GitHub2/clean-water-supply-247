import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cleanwatersupply247.co.za"),
  title: {
    default: "Emergency Bulk Water Delivery in Gauteng | Pretoria & Johannesburg 24/7",
    template: "%s | Clean Water Supply 24/7",
  },
  description:
    "24/7 emergency bulk clean water delivery across Gauteng (Pretoria, Johannesburg, Centurion, Midrand, Sandton & more). Reliable tanker services for homes, JoJo tanks, swimming pools, and construction sites.",
  keywords: [
    "bulk water delivery Gauteng",
    "emergency water supply Johannesburg",
    "JoJo tank refill Pretoria",
    "water tanker service Centurion",
    "swimming pool water delivery",
    "construction water supply Midrand",
    "24/7 water delivery Gauteng",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Emergency Bulk Water Delivery in Gauteng | 24/7 Water Supply Services",
    description:
      "Fast, reliable, and SANS-compliant bulk water delivery across Gauteng. Available 24/7 for homes, pools, estates, and construction sites.",
    url: "https://www.cleanwatersupply247.co.za",
    siteName: "Clean Water Supply 24/7",
    images: [
      {
        url: "/og-image.jpg", // ← Add a real 1200x630 OG image in /public if you have one
        width: 1200,
        height: 630,
        alt: "Clean Water Supply 24/7 Tanker Truck",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Bulk Water Delivery in Gauteng | 24/7",
    description:
      "24/7 clean water tanker delivery for JoJo tanks, pools & construction in Gauteng.",
    images: ["/og-image.jpg"], // Same as OG
  },
  robots: {
    index: true,
    follow: true,
  },
  // Facebook domain verification (this outputs the required meta tag)
  verification: {
    other: {
      "facebook-domain-verification": "95bmveum0ritp3pu93zico5tn362m9",
    },
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
    name: "Clean Water Supply 24/7",
    url: "https://www.cleanwatersupply247.co.za",
    logo: "https://www.cleanwatersupply247.co.za/logo.png",
    image: "https://www.cleanwatersupply247.co.za/logo.png",
    telephone: "+27734634306",
    priceRange: "$$",
    description:
      "24/7 emergency bulk clean water delivery service across Gauteng including Pretoria, Johannesburg, Centurion, Midrand, Sandton, Randburg, Kempton Park and surrounding areas.",
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
      { "@type": "City", name: "Sandton" },
      { "@type": "City", name: "Randburg" },
      { "@type": "City", name: "Kempton Park" },
    ],
    openingHoursSpecification: {
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
        {/* Google Analytics */}
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

        {/* Optional: Add more head tags here if needed in future */}
      </head>

      <body className="bg-white text-gray-900 font-sans antialiased">
        {/* Structured Data (JSON-LD) */}
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