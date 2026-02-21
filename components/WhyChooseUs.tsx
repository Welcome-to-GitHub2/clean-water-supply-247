'use client';
import { WHY_CHOOSE_US } from '@/lib/constants';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white"> {/* Added id */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}