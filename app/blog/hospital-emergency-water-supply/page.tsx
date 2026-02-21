export const metadata = {
  title: "Hospital Emergency Water Supply Gauteng (24/7 Water Tanker Services)",
  description:
    "Emergency bulk water delivery for hospitals and clinics across Gauteng. Rapid response 24/7 water tanker services.",
};

export default function HospitalEmergencyWaterSupply() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Emergency Water Supply for Hospitals and Clinics in Gauteng
      </h1>

      <p className="mb-6">
        Healthcare facilities cannot afford water interruptions. Hospitals,
        clinics and medical centers require uninterrupted water supply for
        sanitation, patient care and operational safety.
      </p>

      <p className="mb-6">
        Clean Water Supply 24/7 provides rapid-response emergency bulk water
        delivery across Gauteng.
      </p>

      <div className="bg-red-50 border rounded-lg p-8 mt-12">
        <h3 className="text-2xl font-bold mb-3">
          Critical Facility Water Emergency?
        </h3>

        <p className="mb-6">
          Our 24/7 tanker fleet is prepared for urgent hospital and clinic
          dispatch across Gauteng.
        </p>

        <a
          href="https://wa.me/27734634306"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold inline-block hover:bg-green-700 transition"
        >
          WhatsApp Emergency Dispatch
        </a>
      </div>
    </main>
  );
}
