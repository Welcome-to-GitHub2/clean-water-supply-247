// components/ClientPage.tsx
'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Industries from '@/components/Industries'
import Coverage from '@/components/Coverage'
import WhyChooseUs from '@/components/WhyChooseUs'
import CTA from '@/components/CTA'
import CompanyProfile from '@/components/CompanyProfile'
import Footer from '@/components/Footer'
// import WhatsAppButton from '@/components/WhatsAppButton'  ← add later if needed

export default function ClientPageContent() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Industries />
      <Coverage />
      <WhyChooseUs />
      <CTA />
      <CompanyProfile />
      <Footer />
      {/* <WhatsAppButton />  ← floating button is fine here too */}
    </>
  )
}