import Link from "next/link";

export const metadata = {
  title:
    "Bulk Water Supply for Estates Gauteng (24/7 Emergency Tanker)",
  description:
    "Emergency and scheduled bulk water delivery for residential estates and complexes in Gauteng.",
};

export default function WaterSupplyForEstates() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Bulk Water Supply for Residential Estates in Gauteng
      </h1>

      <p className="mb-6">
        Residential estates and complexes require dependable emergency water
        solutions during outages.
      </p>

      <p className="mb-6">
        Clean Water Supply 24/7 supports estate managers and HOAs with rapid
        water tanker deployment across Gauteng.
      </p>

      <div className="bg-blue-50 border rounded-lg p-8 mt-12">
        <h3 className="text-2xl font-bold mb-3">
          Estate Water Emergency?
        </h3>
        <p className="mb-6">
          Our 24/7 tanker fleet ensures your residents never go without water.
        </p>

        <a
          href="https://wa.me/27734634306"
          target="_blank"
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold inline-block hover:bg-green-700 transition"
        >
          WhatsApp for Immediate Estate Support
        </a>
      </div>
    </main>
  );
}
