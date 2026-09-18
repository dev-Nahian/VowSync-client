import React, { useState } from "react";
import Container from "@/components/common/Container";
import CommonButton from "@/components/common/CommonButton";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Couple Planning Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("💌 Your message has been sent to our concierge team! We will reply within 24 hours.");
    setFormData({ name: "", email: "", subject: "Couple Planning Inquiry", message: "" });
  };

  const faqs = [
    {
      q: "How does Wedelogy connect couples with vendors?",
      a: "Couples can browse verified vendor portfolios, review real pricing packages, and directly send messaging inquiries or quote requests with no middleman markup.",
    },
    {
      q: "Is creating a couple account free?",
      a: "Yes! Creating your wedding countdown, budget calculator, and personalized guest list manager is 100% free.",
    },
    {
      q: "How can vendors join the network?",
      a: "Click 'Become a Vendor' to register your business profile, service categories, and portfolio. Our team verifies your credentials within 24 hours.",
    },
    {
      q: "Can I collaborate on planning with my partner?",
      a: "Absolutely! After signing up, you receive a collaboration link that gives your partner real-time edit access to all checklists, budgets, and guest seating charts.",
    },
  ];

  return (
    <div className="bg-[#FFF9F9] min-h-screen py-12 md:py-20 font-manrope">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FCECEE] text-[#CF9585] text-xs font-bold uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-[#1D1D1F]">
            We’d Love to Hear from You
          </h1>
          <p className="text-sm md:text-base text-[#5B6477]">
            Have a question about your wedding countdown, vendor bookings, or partnership? Our team of wedding concierges is here to help.
          </p>
        </div>

        {/* 2 Column: Contact Form & Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#EFE5E7] shadow-sm">
            <h2 className="text-2xl font-bold font-playfair text-[#1D1D1F] mb-2">
              Send Us a Message 💌
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Fill out the form below and a representative will get back to you promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Nadia Rahman"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CF9585]"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="nadia@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CF9585]"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                  Inquiry Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#CF9585]"
                >
                  <option value="Couple Planning Inquiry">Couple Planning & Dashboard Help</option>
                  <option value="Vendor Partnership Inquiry">Vendor Partnership & Listing</option>
                  <option value="Technical Support">Technical Support & Feedback</option>
                  <option value="Press & Media">Press, Sponsorship & Media</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                  How can we help? *
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your inquiry, wedding date, or vendor request..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CF9585]"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1D1D1F] text-white text-sm font-bold rounded-2xl hover:bg-black transition-all cursor-pointer shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-[#EFE5E7] shadow-xs space-y-4">
              <h3 className="text-lg font-bold font-playfair text-[#1D1D1F] pb-2 border-b">
                Direct Channels
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <strong className="block text-[#1D1D1F]">Headquarters</strong>
                    <p className="text-xs text-gray-500">123 Wedding Boulevard, Gulshan 2, Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <strong className="block text-[#1D1D1F]">Concierge Hotline</strong>
                    <p className="text-xs text-gray-500">+1 (555) 123-LOVE / +880 1700-000000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">✉️</span>
                  <div>
                    <strong className="block text-[#1D1D1F]">Email Support</strong>
                    <p className="text-xs text-gray-500">hello@wedelogy.com / support@wedelogy.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="bg-[#FFF0F3] p-6 rounded-3xl border border-[#FAD7E0] space-y-4">
              <h3 className="text-lg font-bold font-playfair text-[#1D1D1F]">
                Frequently Asked Questions
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="space-y-1">
                    <p className="font-bold text-xs text-[#1D1D1F]">
                      Q: {faq.q}
                    </p>
                    <p className="text-[11px] text-gray-600">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
