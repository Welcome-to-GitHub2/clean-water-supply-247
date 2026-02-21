import { COVERAGE_AREAS } from '@/lib/constants';

export default function Coverage() {
  return (
    <section id="coverage" className="py-20 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">
          We Deliver Across Gauteng
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {COVERAGE_AREAS.map((city, index) => (
            <div key={index} className="p-5 bg-white rounded-xl shadow-sm">
              {city}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}