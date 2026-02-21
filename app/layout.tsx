import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cleanwatersupply247.co.za"),
  title: {
    default: "Clean Water Supply | Bulk Water Delivery Gauteng",
    template: "%s | Clean Water Supply",
  },
  description:
    "Professional bulk clean water delivery across Gauteng. Tank filling, pool filling, and emergency water supply services. Contact Clean Water Supply today.",
  keywords: [
    "bulk water delivery Gauteng",
    "water tank filling Gauteng",
    "emergency water supply Gauteng",
    "swimming pool water delivery",
    "water delivery Johannesburg",
    "water delivery Pretoria",
    "construction site water supply",
    "commercial water delivery",
    "Clean Water Supply",
  ],
  authors: [{ name: "Clean Water Supply" }],
  creator: "Clean Water Supply",
  publisher: "Clean Water Supply",
  openGraph: {
    title: "Clean Water Supply | Bulk Water Delivery Gauteng",
    description:
      "Professional bulk clean water delivery across Gauteng. Tank filling, pool filling, and emergency water supply services.",
    url: "https://cleanwatersupply247.co.za",
    siteName: "Clean Water Supply",
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}