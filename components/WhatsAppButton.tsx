'use client';

import { BUSINESS_INFO } from '@/lib/constants';

export default function WhatsAppButton() {
  return (
    <a
      href={BUSINESS_INFO.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
    >
      💬 WhatsApp
    </a>
  );
}
