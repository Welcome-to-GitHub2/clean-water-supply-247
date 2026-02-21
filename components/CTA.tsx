'use client';
import { BUSINESS_INFO } from '@/lib/constants';

export default function CTA() {
  return (
    <section id="contact" className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20"> {/* Added id for navbar */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Water Delivered Today?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us now for fast, reliable water delivery across Gauteng.
            Available 24/7 for emergency services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              WhatsApp: {BUSINESS_INFO.phone}
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Call Us Now
            </a>
          </div>
          <div className="mt-8">
            <p className="text-blue-100">
              Email:{" "}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="text-white underline"
              >
                {BUSINESS_INFO.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}