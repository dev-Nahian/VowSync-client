import React from "react";
import { Link } from "react-router-dom";

const AllPages = () => {
  const AllPagesLinks = [
    // ==== MAIN LAYOUT PAGES ====
    { category: "🏠 Public & Landing Pages" },
    { name: "🏠 Home Landing Page", link: "/" },
    { name: "📖 About Us Story", link: "/about-us" },
    { name: "🔍 Browse Vendors Directory", link: "/browse-vendors" },
    { name: "🏛️ Categories Showcase", link: "/categories" },
    { name: "📰 Wedding Blogs & Guides", link: "/blogs" },
    { name: "💌 Contact Us & Support", link: "/contact" },
    { separator: true },

    // ==== AUTH PAGES ====
    { category: "🔐 Authentication & Multi-Step Registration" },
    { name: "🔐 Dual Login (Couple & Vendor)", link: "/auth/login" },
    { name: "👤 Step 0: Auth Intro (Bride/Groom Choice)", link: "/auth" },
    { name: "📝 Step 1: Tell Us About You Both", link: "/auth/about-info" },
    { name: "👋 Step 2: Welcome & Celebration", link: "/auth/welcome" },
    { name: "💍 Step 3: Wedding Day Choice", link: "/auth/weeding-day" },
    { name: "📍 Step 4: Wedding Place & City", link: "/auth/weeding-place" },
    { name: "👥 Step 5: Wedding Guest Count", link: "/auth/weeding-guests" },
    { name: "📅 Step 6: Planning Phase Stage", link: "/auth/weeding-planning" },
    { name: "📋 Step 7: Ceremonies & Dietary Details", link: "/auth/weeding-planning-in-details" },
    { name: "✨ Step 8: Review & Confirm Details", link: "/auth/review-details" },
    { separator: true },

    // ==== VENDOR PAGES ====
    { category: "🏪 Vendor Portal & Registration" },
    { name: "📝 Vendor Registration & Onboarding", link: "/auth/vendor/register" },
    { name: "📊 Vendor Partner Dashboard Hub", link: "/vendor-dashboard" },
    { separator: true },

    // ==== CUSTOMER DASHBOARD PAGES ====
    { category: "📊 Customer Wedding Management Dashboard" },
    { name: "📊 Dashboard: Live Overview & Countdown", link: "/customer-dashboard" },
    { name: "💰 Dashboard: Budget Planner & Expenses", link: "/customer-dashboard/budget" },
    { name: "👥 Dashboard: Guest List & RSVP Manager", link: "/customer-dashboard/guests" },
    { name: "📅 Dashboard: 12-Month Checklist & Timeline", link: "/customer-dashboard/checklist" },
    { name: "🏪 Dashboard: My Booked Vendors & Quotes", link: "/customer-dashboard/vendors" },
    { name: "💌 Dashboard: Digital Invitation Preview", link: "/customer-dashboard/invitations" },
    { name: "⚙️ Dashboard: Wedding Settings & Profile", link: "/customer-dashboard/settings" },
  ];

  return (
    <div className="py-16 md:py-24 px-6 md:px-20 max-w-5xl mx-auto font-manrope">
      <div className="mb-10 pb-6 border-b border-gray-200">
        <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
          Wedelogy Sitemap
        </span>
        <h1 className="text-3xl md:text-5xl text-black font-bold font-playfair mt-1">
          All Application Pages & Routes
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Directory of all completed frontend routes, dynamic dashboards, and auth steps.
        </p>
      </div>

      <div className="space-y-6">
        {AllPagesLinks.map((item, index) => {
          if (item.category) {
            return (
              <h2
                key={index}
                className="text-lg font-bold font-playfair text-[#1D1D1F] pt-4"
              >
                {item.category}
              </h2>
            );
          }
          if (item.separator) {
            return (
              <div
                key={index}
                className="border-b border-gray-200 my-4 w-full"
              />
            );
          }
          return (
            <div key={index} className="pl-2">
              <Link
                to={item.link}
                className="text-gray-700 hover:text-[#CF9585] font-semibold text-sm md:text-base transition-colors flex items-center gap-2 group"
              >
                <span className="group-hover:translate-x-1 transition-transform">
                  {item.name}
                </span>
                <span className="text-xs text-gray-400 font-mono">({item.link})</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPages;
