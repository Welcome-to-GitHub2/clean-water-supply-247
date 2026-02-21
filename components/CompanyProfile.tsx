'use client';
import { BUSINESS_INFO, COMPANY_PROFILE, SERVICES } from '@/lib/constants';

export default function CompanyProfile() {
  return (
    <section id="company-profile" className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              Company Information
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-4">
              Company Profile
            </h2>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg space-y-8 border-t-4 border-blue-600">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Company Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-slate-600">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-1">Business Name</p>
                  <p>{BUSINESS_INFO.name}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-1">Location</p>
                  <p>{BUSINESS_INFO.location}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-1">Phone</p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-blue-700 hover:underline">{BUSINESS_INFO.phone}</a>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-1">WhatsApp</p>
                  <a href={BUSINESS_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">{BUSINESS_INFO.phone}</a>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg md:col-span-2">
                  <p className="font-semibold text-slate-900 mb-1">Email</p>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-blue-700 hover:underline break-all">{BUSINESS_INFO.email}</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">What We Do</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Clean Water Supply specializes in bulk water delivery services throughout Gauteng. We provide clean, safe water for:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {SERVICES.map((item, index) => ( // Updated to use SERVICES
                  <li key={index} className="flex items-start text-slate-600 bg-blue-50 p-3 rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Commitment</h3>
              <p className="text-slate-600 leading-relaxed">
                We are committed to providing reliable, affordable, and clean water delivery services to communities and businesses across Gauteng. All our water meets SANS quality standards, and we pride ourselves on punctual delivery and excellent customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}