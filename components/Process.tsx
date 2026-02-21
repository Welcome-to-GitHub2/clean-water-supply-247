'use client';
import { OPERATIONS } from '@/lib/constants';

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white"> {/* Added id for potential linking */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8"> {/* Changed to 4 cols */}
          {OPERATIONS.map((op) => (
            <div key={op.step} className="bg-blue-50 p-6 rounded-xl shadow">
              <div className="text-3xl font-bold mb-2">{op.step}</div>
              <h3 className="text-xl font-semibold mb-2">{op.title}</h3>
              <p className="text-gray-600">{op.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}