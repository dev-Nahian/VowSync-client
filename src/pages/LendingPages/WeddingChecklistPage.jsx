import React, { useState } from "react";
import Container from "@/components/common/Container";
import CommonButton from "@/components/common/CommonButton";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function WeddingChecklistPage() {
  const [checkedTasks, setCheckedTasks] = useState({});

  const timelineMilestones = [
    {
      period: "10-12 Months Before the Big Day",
      tagline: "Setting the Foundation & Securing Major Vendors",
      tasks: [
        "Announce engagement to close family & friends",
        "Determine overall wedding budget range and contributors",
        "Draft rough guest list headcount (Bride side vs Groom side)",
        "Tour and book ceremony & reception banquet venues",
        "Hire wedding photographer and drone cinematography team",
        "Select and book primary wedding planner / decorator",
      ],
    },
    {
      period: "6-9 Months Before",
      tagline: "Attire, Themes & Culinary Selections",
      tasks: [
        "Choose wedding color theme, decor palette & stage style",
        "Begin shopping for bridal lehenga, saree, or gown",
        "Book catering tasting and customize menu options (Halal/Vegan/Diabetic)",
        "Hire DJ, live acoustic strings & stage lighting professionals",
        "Book bridal hair & makeup artist for all ceremony dates",
        "Send Save-the-Date digital notices to distant guests",
      ],
    },
    {
      period: "3-5 Months Before",
      tagline: "Invitations & Groom Logistics",
      tasks: [
        "Order custom groom sherwani or tuxedo and groom party attire",
        "Finalize digital wedding invitations suite and RSVP deadline",
        "Book wedding night hotel suite and honeymoon flights",
        "Order floral arrangements, bouquets, and table centerpieces",
        "Schedule hair and makeup trial run with chosen artist",
      ],
    },
    {
      period: "1-2 Months Before",
      tagline: "Final Countdown & Seating Details",
      tasks: [
        "Send out official invitations with digital RSVP link",
        "Finalize seating chart and table assignments",
        "Confirm final guest headcount and dietary requests with caterer",
        "Create day-of run sheet schedule with timestamps",
        "Finalize wedding music playlist and do-not-play list",
      ],
    },
    {
      period: "Week of Wedding",
      tagline: "Relax, Pamper & Celebrate!",
      tasks: [
        "Get bridal henna / mehendi applied",
        "Pack emergency bridal touch-up kit (pins, mints, tissues)",
        "Distribute final run sheets to bridal party and venue managers",
        "Have a restful sleep before the big day!",
      ],
    },
  ];

  const toggleTask = (key) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handlePrint = () => {
    window.print();
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
            The Master 12-Month Wedding Checklist
          </h1>
          <p className="text-sm md:text-base text-[#5B6477]">
            A step-by-step master timeline curated by top luxury wedding coordinators. Check items off as you go or sync to your dashboard.
          </p>

          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={handlePrint}
              type="button"
              className="px-5 py-2.5 bg-white border border-gray-200 text-xs font-bold rounded-xl text-gray-800 hover:bg-gray-50 transition-all shadow-xs cursor-pointer"
            >
              🖨️ Print / Save PDF Checklist
            </button>
            <Link
              to="/auth"
              className="px-5 py-2.5 bg-[#1D1D1F] text-white text-xs font-bold rounded-xl hover:bg-black transition-all shadow-sm"
            >
              Sync with My Dashboard &rarr;
            </Link>
          </div>
        </div>

        {/* Checklist Timeline Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {timelineMilestones.map((phase, pIdx) => (
            <div
              key={pIdx}
              className="bg-white rounded-3xl p-6 md:p-8 border border-[#EFE5E7] shadow-xs space-y-4"
            >
              <div className="pb-3 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
                  Phase {pIdx + 1}
                </span>
                <h2 className="text-xl md:text-2xl font-bold font-playfair text-[#1D1D1F] mt-0.5">
                  {phase.period}
                </h2>
                <p className="text-xs text-gray-500">{phase.tagline}</p>
              </div>

              <div className="space-y-3">
                {phase.tasks.map((task, tIdx) => {
                  const key = `${pIdx}_${tIdx}`;
                  const isChecked = !!checkedTasks[key];
                  return (
                    <label
                      key={tIdx}
                      className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#FAF5F6] transition-all cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleTask(key)}
                        className="w-5 h-5 rounded-lg border-gray-300 text-[#CF9585] focus:ring-[#CF9585] cursor-pointer shrink-0"
                      />
                      <span
                        className={`text-sm md:text-base transition-all ${
                          isChecked ? "line-through text-gray-400 font-normal" : "text-[#1D1D1F] font-semibold"
                        }`}
                      >
                        {task}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
