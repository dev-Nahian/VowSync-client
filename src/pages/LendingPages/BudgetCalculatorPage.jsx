import React, { useState } from "react";
import Container from "@/components/common/Container";
import CommonButton from "@/components/common/CommonButton";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTotalBudget } from "@/Redux/Slices/weddingDataSlice";
import toast from "react-hot-toast";

export default function BudgetCalculatorPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [totalBudget, setBudget] = useState(50000);
  const [guestCount, setGuestCount] = useState(180);

  const categories = [
    { name: "Venue, Banquets & Rentals", percent: 40, icon: "🏛️", desc: "Hall rental, stage setup, tables & chairs" },
    { name: "Catering & Beverages", percent: 25, icon: "🍽️", desc: "Main banquet, appetizers, mocktails & desserts" },
    { name: "Photography & Cinematography", percent: 12, icon: "📸", desc: "4K Cinema, drone footage & fine art albums" },
    { name: "Floral & Stage Decoration", percent: 10, icon: "💐", desc: "Stage backdrop, table centerpieces & bouquets" },
    { name: "Bridal Attire, Jewelry & Groom Wear", percent: 8, icon: "👗", desc: "Lehenga, sherwani, alterations & accessories" },
    { name: "Hair, Makeup & Beauty", percent: 3, icon: "💄", desc: "Bridal HD glam, hair styling & trials" },
    { name: "Music, DJ & Entertainment", percent: 2, icon: "🎵", desc: "Live music, DJ sound & lighting system" },
  ];

  const costPerGuest = guestCount > 0 ? Math.round(totalBudget / guestCount) : 0;
  const cateringPerGuest = guestCount > 0 ? Math.round((totalBudget * 0.25) / guestCount) : 0;

  const handleApplyToDashboard = () => {
    dispatch(setTotalBudget(totalBudget));
    toast.success(`🎯 Applied $${totalBudget.toLocaleString()} to your Wedding Dashboard!`);
    navigate("/customer-dashboard/budget");
  };

  return (
    <div className="bg-[#FFF9F9] min-h-screen py-12 md:py-20 font-manrope">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FCECEE] text-[#CF9585] text-xs font-bold uppercase tracking-wider">
            Free Wedding Planning Tool
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-[#1D1D1F]">
            Interactive Wedding Budget Calculator
          </h1>
          <p className="text-sm md:text-base text-[#5B6477]">
            Estimate expenditures across all major categories, calculate cost-per-guest ratios, and allocate your funds with clarity.
          </p>
        </div>

        {/* Top Control Bar */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#EFE5E7] shadow-sm mb-10 max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Budget Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Target Total Budget
                </label>
                <span className="text-2xl font-bold font-playfair text-[#CF9585]">
                  ${totalBudget.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="150000"
                step="2500"
                value={totalBudget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#CF9585]"
              />
              <div className="flex justify-between text-[11px] text-gray-400">
                <span>$10,000 (Intimate)</span>
                <span>$75,000 (Luxury)</span>
                <span>$150,000+ (Grand)</span>
              </div>
            </div>

            {/* Guest Count Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Estimated Headcount
                </label>
                <span className="text-2xl font-bold font-playfair text-[#1D1D1F]">
                  {guestCount} Guests
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="800"
                step="10"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1D1D1F]"
              />
              <div className="flex justify-between text-[11px] text-gray-400">
                <span>30 Guests</span>
                <span>300 Guests</span>
                <span>800+ Guests</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-100 text-center">
            <div className="bg-[#FDF8F9] p-3.5 rounded-2xl">
              <span className="text-[11px] text-gray-500 block">Cost Per Guest</span>
              <strong className="text-base text-[#1D1D1F]">${costPerGuest} / person</strong>
            </div>
            <div className="bg-[#FDF8F9] p-3.5 rounded-2xl">
              <span className="text-[11px] text-gray-500 block">Food / Plate Target</span>
              <strong className="text-base text-[#1D1D1F]">${cateringPerGuest} / plate</strong>
            </div>
            <div className="bg-[#FDF8F9] p-3.5 rounded-2xl">
              <span className="text-[11px] text-gray-500 block">Venue Cap (40%)</span>
              <strong className="text-base text-[#CF9585]">${Math.round(totalBudget * 0.4).toLocaleString()}</strong>
            </div>
            <div className="bg-[#FDF8F9] p-3.5 rounded-2xl">
              <span className="text-[11px] text-gray-500 block">Photo/Cinema (12%)</span>
              <strong className="text-base text-[#1D1D1F]">${Math.round(totalBudget * 0.12).toLocaleString()}</strong>
            </div>
          </div>
        </div>

        {/* Category Allocations Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold font-playfair text-[#1D1D1F]">
              Recommended Category Breakdown
            </h2>
            <button
              onClick={handleApplyToDashboard}
              className="px-4 py-2 bg-[#1D1D1F] text-white text-xs font-bold rounded-xl hover:bg-black transition-all shadow-sm cursor-pointer"
            >
              Sync to My Dashboard &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((cat, idx) => {
              const allocated = Math.round((totalBudget * cat.percent) / 100);
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-[#EFE5E7] shadow-xs flex items-start justify-between gap-4 hover:border-[#CF9585] transition-all"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF0F3] flex items-center justify-center text-xl shrink-0">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#1D1D1F]">{cat.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{cat.desc}</p>
                      <span className="inline-block mt-2 text-[11px] font-bold text-[#CF9585]">
                        {cat.percent}% allocation
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-lg font-bold font-playfair text-[#1D1D1F]">
                      ${allocated.toLocaleString()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 max-w-2xl mx-auto bg-gradient-to-r from-[#1D1D1F] to-[#2E2E33] text-white p-8 rounded-3xl text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold font-playfair">
            Want to track these expenses with your partner?
          </h3>
          <p className="text-xs text-gray-300">
            Create a free couple account to connect verified vendors and track actual receipts in real time.
          </p>
          <CommonButton link="/auth">
            Create Free Account 💍
          </CommonButton>
        </div>
      </Container>
    </div>
  );
}
