import React, { useState } from "react";
import Container from "@/components/common/Container";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [ticketSent, setTicketSent] = useState(false);

  const categories = [
    {
      icon: "💍",
      title: "Getting Started & Account Setup",
      topics: [
        "How to create a shared couple account",
        "Inviting your partner to collaborate on checklists",
        "Changing your wedding date or venue location",
      ],
    },
    {
      icon: "💰",
      title: "Budget & Expense Tracking",
      topics: [
        "How to add custom budget expense items",
        "Exporting your wedding budget summary to PDF",
        "Managing deposit payments and final vendor dues",
      ],
    },
    {
      icon: "👥",
      title: "Guest List & Digital RSVPs",
      topics: [
        "Setting up custom dietary options (Halal, Vegan)",
        "Assigning guests to seating tables",
        "Sharing your custom digital invitation link",
      ],
    },
    {
      icon: "🏪",
      title: "Vendors & Direct Quotes",
      topics: [
        "How to send quote requests to photographers and venues",
        "Understanding vendor contract terms and deposit protections",
        "How to leave verified reviews for booked vendors",
      ],
    },
  ];

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    setTicketSent(true);
    toast.success("Support ticket submitted! A concierge will reply within 4 hours.");
  };

  return (
    <div className="bg-[#FFF9F9] min-h-screen py-12 md:py-20 font-manrope">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FCECEE] text-[#CF9585] text-xs font-bold uppercase tracking-wider">
            Customer Support
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-[#1D1D1F]">
            Wedelogy Help Center & Knowledge Base
          </h1>
          <p className="text-sm md:text-base text-[#5B6477]">
            Find answers to common questions about your wedding countdown, budget tools, vendor bookings, and partner collaboration.
          </p>

          <div className="relative max-w-lg mx-auto pt-4">
            <input
              type="text"
              placeholder="Search help articles (e.g. RSVP, budget, invite partner)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3.5 pl-12 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#CF9585] shadow-xs bg-white"
            />
            <span className="absolute left-4 top-7.5 text-gray-400 text-base">🔍</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE5E7] shadow-xs space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="text-xl font-bold font-playfair text-[#1D1D1F]">
                  {cat.title}
                </h3>
              </div>

              <ul className="space-y-2.5 pt-2">
                {cat.topics.map((topic, tIdx) => (
                  <li
                    key={tIdx}
                    onClick={() => toast(`Viewing guide: "${topic}"`)}
                    className="text-sm text-gray-700 hover:text-[#CF9585] cursor-pointer flex items-center justify-between group"
                  >
                    <span>• {topic}</span>
                    <span className="text-gray-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Submit Ticket Box */}
        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE5E7] shadow-md space-y-4">
          <h3 className="text-2xl font-bold font-playfair text-[#1D1D1F] text-center">
            Still Need Assistance?
          </h3>
          <p className="text-xs text-gray-500 text-center">
            Send a direct message to our support desk and we’ll help you promptly.
          </p>

          <form onSubmit={handleTicketSubmit} className="space-y-3 pt-2 text-sm">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300"
              required
            />
            <textarea
              rows={3}
              placeholder="Describe what you need help with..."
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#1D1D1F] text-white text-xs font-bold rounded-xl hover:bg-black transition-all cursor-pointer shadow-sm"
            >
              Submit Support Request
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}
