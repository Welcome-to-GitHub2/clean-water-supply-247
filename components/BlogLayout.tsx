import Link from "next/link";
import { ReactNode } from "react";
import { BUSINESS_INFO } from "@/lib/constants";

interface BlogLayoutProps {
  title: string;
  children: ReactNode;
}

export default function BlogLayout({ title, children }: BlogLayoutProps) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">{title}</h1>

      {/* Content */}
      {children}

      {/* Internal Authority Navigation */}
      <div className="mt-16">
        <h4 className="text-center text-lg font-semibold mb-6 text-gray-800">
          Explore More Water Solutions
        </h4>

        <div className="flex justify-center flex-wrap gap-4">
          <Link href="/blog/gauteng-water-crisis-explained-2026" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition">
            1
          </Link>

          <Link href="/blog/emergency-bulk-water-pretoria" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition">
            2
          </Link>

          <Link href="/blog/construction-site-water-supply" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition">
            3
          </Link>

          <Link href="/blog/hospital-emergency-water-supply" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition">
            4
          </Link>

          <Link href="/blog/water-supply-for-estates" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition">
            5
          </Link>
        </div>
      </div>

      {/* Final Conversion Block */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 p-10 rounded-2xl border border-blue-200 shadow-xl">
        <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
          24/7 Emergency Bulk Water Delivery – Immediate Response
        </h3>

        <p className="mb-6 text-center text-gray-700">
          We deliver clean, compliant bulk water across Gauteng. No delays. No stress. Just fast, reliable service when you need it most.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-lg flex items-center justify-center gap-3"
          >
            WhatsApp for Immediate Help
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg flex items-center justify-center gap-3"
          >
            Call {BUSINESS_INFO.phone} Now
          </a>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          <Link href="/" className="text-blue-700 underline hover:text-blue-900">
            Back to All Services
          </Link>
        </p>
      </div>
    </main>
  );
}
