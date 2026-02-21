import Link from "next/link";

export const metadata = {
  title:
    "Construction Site Water Supply Gauteng (Bulk Water Tanker 24/7)",
  description:
    "Reliable construction site bulk water delivery in Gauteng. Scheduled and emergency tanker services for contractors and developers.",
};

export default function ConstructionSiteWaterSupply() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Construction Site Bulk Water Supply in Gauteng
      </h1>

      <p className="mb-6">
        Construction projects depend on consistent water access for concrete
        mixing, dust suppression and operational continuity.
      </p>

      <p className="mb-6">
        Clean Water Supply 24/7 supports contractors and developers across
        Pretoria, Johannesburg, Centurion and surrounding Gauteng regions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Why Contractors Choose Our Water Tanker Services
      </h2>

      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Reliable scheduled deliveries</li>
        <li>Emergency rapid-response dispatch</li>
        <li>Professional tanker fleet</li>
        <li>Compliant, clean bulk water supply</li>
      </ul>

      <div className="bg-blue-50 border rounded-lg p-8 mt-12">
        <h3 className="text-2xl font-bold mb-3">
          Secure Reliable Construction Water Today
        </h3>
        <p className="mb-6">
          Avoid costly project delays. Partner with a dependable bulk water
          supplier in Gauteng.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/27734634306"
            target="_blank"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-700 transition"
          >
            WhatsApp for Contractor Rates
          </a>

          <a
            href="/#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition"
          >
            Request Scheduled Deliveries
          </a>
        </div>
      </div>

      <div className="border-t pt-8 mt-12 space-y-3">
        <Link href="/blog/emergency-bulk-water-pretoria" className="text-blue-600 underline block">
          Emergency Bulk Water Pretoria
        </Link>
      </div>
    </main>
  );
}
