'use client';

import { COMPANY_PROFILE } from '@/lib/constants';

export default function About() {
  // Defensive guards (prevents runtime crashes)
  const about = COMPANY_PROFILE?.about ?? '';
  const experience = COMPANY_PROFILE?.experience ?? '';
  const mission = COMPANY_PROFILE?.mission ?? '';
  const values = Array.isArray(COMPANY_PROFILE?.values)
    ? COMPANY_PROFILE.values
    : [];

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-blue-50 to-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">
              Leading Water Delivery Provider
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-slate-600">
            {about && (
              <p className="text-lg leading-relaxed text-center">
                {about}
              </p>
            )}

            {experience && (
              <p className="text-lg leading-relaxed text-center">
                {experience}
              </p>
            )}

            {/* Mission & Values Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg mt-8 border-t-4 border-blue-600">
              {mission && (
                <>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {mission}
                  </p>
                </>
              )}

              {values.length > 0 && (
                <>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Our Values
                  </h3>

                  <ul className="space-y-3">
                    {values.map((value, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                          ✓
                        </span>
                        <span className="text-slate-600">{value}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
