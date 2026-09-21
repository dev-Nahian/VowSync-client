import React from "react";
import Container from "@/components/common/Container";

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#FFF9F9] min-h-screen py-12 md:py-20 font-manrope">
      <Container>
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-14 rounded-3xl border border-[#EFE5E7] shadow-xs space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
              Terms & Conditions
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-playfair text-[#1D1D1F] mt-1">
              Terms of Service
            </h1>
            <p className="text-xs text-gray-400 mt-2">Last Updated: September 2026</p>
          </div>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-xl font-bold font-playfair text-[#1D1D1F]">1. Acceptance of Terms</h2>
              <p>
                By creating an account or accessing the Wedelogy wedding management platform, you agree to comply with these terms, our Community Guidelines, and applicable laws.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold font-playfair text-[#1D1D1F]">2. Vendor Listings & Booking Contracts</h2>
              <p>
                Wedelogy provides a trusted marketplace connecting couples and independent wedding vendors. Contracts, pricing agreements, deposit refunds, and specific performance terms remain directly between the couple and the contracted vendor.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold font-playfair text-[#1D1D1F]">3. User Responsibilities</h2>
              <p>
                Couples and vendors agree to provide accurate information, adhere to verified reviews integrity, and respect intellectual property rights.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold font-playfair text-[#1D1D1F]">4. Termination & Contact</h2>
              <p>
                You may close your account at any time via Settings. For questions regarding these terms, please contact legal@wedelogy.com.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
