'use client';
import { BUSINESS_INFO } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-blue-500">💧</span>
                {BUSINESS_INFO.name}
              </h3>
              <p className="mb-4 text-blue-100">{BUSINESS_INFO.tagline}</p>
              <p className="text-sm text-slate-400">{BUSINESS_INFO.location}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="text-blue-500">→</span> Home</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="text-blue-500">→</span> About</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="text-blue-500">→</span> Services</a></li>
                <li><a href="#coverage" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="text-blue-500">→</span> Coverage</a></li>
                <li><a href="#company-profile" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="text-blue-500">→</span> Company Profile</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span className="text-blue-500">📞</span>
                    <span>Phone: {BUSINESS_INFO.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={BUSINESS_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span className="text-green-500">💬</span>
                    <span>WhatsApp: {BUSINESS_INFO.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span className="text-blue-500">✉️</span>
                    <span className="break-all">{BUSINESS_INFO.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p className="text-slate-400">© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
            <p className="mt-2 text-slate-500">Bulk Water Delivery Gauteng | Water Tank Filling | Emergency Water Supply</p>
          </div>
        </div>
      </div>
    </footer>
  );
}