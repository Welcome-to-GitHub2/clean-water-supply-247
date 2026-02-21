import BlogLayout from "@/components/BlogLayout";

export const metadata = {
  title: "Emergency Bulk Water Supply Pretoria | 24/7 Tanker Delivery",
  description:
    "Need emergency bulk water in Pretoria? Fast 24/7 tanker delivery for homes, estates, construction sites and businesses.",
};

export default function Page() {
  return (
    <BlogLayout title="Emergency Bulk Water Supply in Pretoria – 24/7 Rapid Response">
      <p className="mb-6 text-lg leading-relaxed">
        Sudden water cuts in Pretoria can shut down homes, construction sites
        and businesses. Emergency tanker services provide immediate relief.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Who Needs Emergency Supply?</h2>
      <ul className="list-disc pl-6 mb-6 space-y-3">
        <li>Residential estates during municipal outages</li>
        <li>Construction projects needing consistent water</li>
        <li>Office parks and commercial facilities</li>
        <li>Industrial operations and factories</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why 24/7 Matters</h2>
      <p className="mb-6">
        Water emergencies don’t wait. Fast-response tankers ensure minimal
        downtime and operational continuity across Pretoria.
      </p>
    </BlogLayout>
  );
}
