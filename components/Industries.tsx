import { INDUSTRIES } from '@/lib/constants';

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-gray-50"> {/* Added id */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Trusted Across Multiple Sectors
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-sm"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}