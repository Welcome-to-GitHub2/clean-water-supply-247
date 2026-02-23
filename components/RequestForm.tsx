"use client";

import { useState } from "react";

export default function RequestForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setLoading(true);
    setStatus("Sending request...");

    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setStatus("Request sent successfully.");

      const whatsappMessage = encodeURIComponent(`
🚨 NEW WATER DELIVERY REQUEST

Name: ${data.name}
Phone: ${data.phone}
Location: ${data.location}
Capacity: ${data.capacity} Litres
Delivery Date: ${data.deliveryDate}
Service: ${data.serviceType}
Message: ${data.message || "N/A"}
      `);

      window.open(
        `https://wa.me/27734634306?text=${whatsappMessage}`,
        "_blank"
      );

      form.reset();
    } else {
      setStatus("Something went wrong. Please call or WhatsApp us.");
    }
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white shadow-2xl rounded-2xl p-10 border">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">
              🚨 Request Emergency Water Delivery
            </h2>
            <p className="text-gray-600 mt-3">
              Available 24/7 across Gauteng.
              <br />
              For urgent delivery call or WhatsApp:
              <a
                href="https://wa.me/27734634306"
                className="text-blue-600 font-semibold ml-2"
              >
                +27 73 463 4306
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="border p-3 rounded-lg"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              name="location"
              placeholder="Delivery Location / Suburb"
              required
              className="border p-3 rounded-lg md:col-span-2"
            />

            <input
              type="number"
              name="capacity"
              placeholder="Water Capacity Needed (Litres)"
              required
              className="border p-3 rounded-lg"
            />

            <div>
              <label className="block text-sm font-medium mb-1">
                Delivery Date
              </label>
              <input
                type="date"
                name="deliveryDate"
                required
                className="border p-3 rounded-lg w-full"
              />
            </div>

            <select
              name="serviceType"
              required
              className="border p-3 rounded-lg md:col-span-2"
            >
              <option value="">Select Service Type</option>
              <option>Emergency Water Delivery</option>
              <option>Swimming Pool Filling</option>
              <option>Construction Site Supply</option>
              <option>Residential Water Supply</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Additional details (optional)"
              rows={4}
              className="border p-3 rounded-lg md:col-span-2"
            />

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-semibold transition"
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>

            {status && (
              <p className="md:col-span-2 text-center text-sm">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}