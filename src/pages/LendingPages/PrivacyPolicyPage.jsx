import React from "react";
import Container from "@/components/common/Container";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FFF9F9] min-h-screen py-12 md:py-20 font-manrope">
      <Container>
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-14 rounded-3xl border border-[#EFE5E7] shadow-xs space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
              Legal & Transparency
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-playfair text-[#1D1D1F] mt-1">
              Privacy Policy
            </h1>
            <p className="text-xs text-gray-400 mt-2">Last Updated: September 2026</p>
          </div>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-xl font-bold font-playfair text-[#1D1D1F]">1. Information We Collect</h2>
              <p>
                When you create a wedding account on Wedelogy, we collect personal information including names, contact email addresses, phone numbers, estimated wedding dates, venue locations, guest headcounts, and ceremony preferences.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold font-playfair text-[#1D1D1F]">2. How We Use Your Information</h2>
              <p>
                Your information is used strictly to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Generate your personalized wedding countdown timeline, budget calculations, and guest lists.</li>
                <li>Connect you with verified wedding vendors when you request quotes.</li>
                <li>Facilitate partner collaboration for shared wedding planning.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold font-playfair text-[#1D1D1F]">3. Vendor Quote Confidentiality</h2>
              <p>
                We do not sell, rent, or distribute your private contact details to third-party marketers. Vendors only receive inquiry details when you explicitly submit a direct quote request.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold font-playfair text-[#1D1D1F]">4. Data Security & Storage</h2>
              <p>
                All account data, guest seating details, and budget receipts are protected with enterprise-grade encryption.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
