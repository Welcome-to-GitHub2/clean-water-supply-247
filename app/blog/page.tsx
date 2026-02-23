import Link from "next/link";

export const metadata = {
  title:
    "Gauteng Water Crisis Blog | Emergency Bulk Water Delivery Pretoria & Johannesburg (24/7)",
  description:
    "Expert guides on emergency bulk water delivery, construction site water supply, hospital backup water and swimming pool filling across Pretoria and Johannesburg. 24/7 water tanker services in Gauteng.",
};

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Gauteng Water Crisis & Emergency Water Supply Insights
      </h1>

      <p className="mb-10 text-lg">
        Professional guidance on bulk water delivery solutions across Pretoria,
        Johannesburg, Centurion and surrounding Gauteng areas. Learn how homes,
        estates, hospitals, schools and construction sites secure reliable
        emergency water supply during outages.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <Link
          href="/blog/gauteng-water-crisis-2026"
          className="border p-6 rounded-lg hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Surviving the Gauteng Water Crisis (2026 Guide)
          </h2>
          <p>
            Practical emergency water solutions for households and businesses.
          </p>
        </Link>

        <Link
          href="/blog/emergency-bulk-water-pretoria"
          className="border p-6 rounded-lg hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            24/7 Emergency Bulk Water Delivery in Pretoria
          </h2>
          <p>
            Rapid response water tanker services across Pretoria.
          </p>
        </Link>

        <Link
          href="/blog/construction-site-water-supply"
          className="border p-6 rounded-lg hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Construction Site Bulk Water Supply in Gauteng
          </h2>
          <p>
            Reliable scheduled and emergency contractor water delivery.
          </p>
        </Link>
      </div>
    </main>
  );
}
