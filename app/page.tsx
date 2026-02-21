import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import Coverage from "@/components/Coverage";
import WhyChooseUs from "@/components/WhyChooseUs";
import CompanyProfile from "@/components/CompanyProfile";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Industries />
      <Coverage />
      <WhyChooseUs />

      {/* SEO POWER SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">
          Emergency Bulk Water Delivery in Gauteng – 24/7 Water Supply Services
        </h1>

        <p className="mb-4 text-lg">
          Clean Water Supply 24/7 provides fast and reliable bulk water
          delivery across Pretoria, Johannesburg, Centurion and surrounding
          Gauteng areas. During the ongoing Gauteng water crisis and unexpected
          municipal water shortages, our professional water tanker fleet
          ensures homes, businesses and construction sites never run dry.
        </p>

        <p className="mb-4">
          We specialize in emergency water supply, swimming pool filling,
          construction site water delivery and large-scale commercial water
          solutions. Whether you are affected by a water outage or planning a
          major project, our 24/7 water tanker services are available day and
          night.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Areas We Serve
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pretoria bulk water delivery</li>
          <li>Johannesburg emergency water supply</li>
          <li>Centurion water tanker services</li>
          <li>Midrand construction site water supply</li>
          <li>All surrounding Gauteng areas</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Reliable Solution During Water Shortages
        </h2>
        <p>
          When communities discuss the Gauteng water crisis or experience
          unexpected water shortages, Clean Water Supply 24/7 stands ready as a
          trusted and professional solution. Our team prioritizes rapid
          response times, clean water compliance and dependable service for
          residential estates, developers, contractors and commercial clients.
        </p>
      </section>

      <CTA />
      <CompanyProfile />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
