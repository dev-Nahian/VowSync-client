import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "@/components/common/Container";

export default function CustomerDashboardOverview() {
  const reg = useSelector((state) => state.authRegistration);
  const wedding = useSelector((state) => state.weddingData);

  // Real-time Countdown calculation
  const targetDateStr = reg.weddingDate || "2026-10-24";
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDateStr) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDateStr]);

  // Metrics Calculations
  const totalAllocated = wedding.budgetItems.reduce((acc, curr) => acc + curr.allocated, 0);
  const totalSpent = wedding.budgetItems.reduce((acc, curr) => acc + curr.spent, 0);
  const budgetSpentPercent = Math.min(100, Math.round((totalSpent / wedding.totalBudget) * 100));

  const totalGuests = wedding.guests.reduce((acc, curr) => acc + curr.count, 0);
  const attendingGuests = wedding.guests
    .filter((g) => g.rsvp === "Attending")
    .reduce((acc, curr) => acc + curr.count, 0);
  const awaitingGuests = wedding.guests
    .filter((g) => g.rsvp === "Awaiting")
    .reduce((acc, curr) => acc + curr.count, 0);

  const completedTasks = wedding.checklist.filter((t) => t.completed).length;
  const totalTasks = wedding.checklist.length;
  const checklistPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const bookedVendorsCount = wedding.vendors.filter((v) => v.status === "Booked").length;

  return (
    <div className="space-y-8">
      {/* Welcome Banner & Live Countdown Clock */}
      <div className="bg-gradient-to-r from-[#1D1D1F] via-[#2D2D30] to-[#1D1D1F] text-white p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#CF9585]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-[#EBC9D4] tracking-wide uppercase">
                {reg.city || "Dhaka"}, {reg.country || "Bangladesh"}
              </span>
              <span className="text-xs text-gray-300">
                • {targetDateStr}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-playfair leading-tight">
              {reg.herFirstName || "Nadia"} & {reg.himFirstName || "Ismail"}'s Big Day 💍
            </h1>
            <p className="text-gray-300 text-sm font-manrope mt-1">
              Your wedding planning dashboard is synchronized and tracking {wedding.checklist.length} milestones.
            </p>
          </div>

          {/* Countdown timer cards */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 bg-white/10 p-3 sm:p-4 rounded-2xl backdrop-blur-md border border-white/10 text-center shrink-0">
            <div className="px-2 sm:px-3 py-1.5">
              <span className="block text-2xl sm:text-3xl font-bold text-[#EBC9D4] font-playfair">{timeLeft.days}</span>
              <span className="text-[10px] sm:text-xs text-gray-300 uppercase tracking-wider font-manrope">Days</span>
            </div>
            <div className="px-2 sm:px-3 py-1.5">
              <span className="block text-2xl sm:text-3xl font-bold text-white font-playfair">{timeLeft.hours}</span>
              <span className="text-[10px] sm:text-xs text-gray-300 uppercase tracking-wider font-manrope">Hours</span>
            </div>
            <div className="px-2 sm:px-3 py-1.5">
              <span className="block text-2xl sm:text-3xl font-bold text-white font-playfair">{timeLeft.minutes}</span>
              <span className="text-[10px] sm:text-xs text-gray-300 uppercase tracking-wider font-manrope">Mins</span>
            </div>
            <div className="px-2 sm:px-3 py-1.5">
              <span className="block text-2xl sm:text-3xl font-bold text-[#CF9585] font-playfair">{timeLeft.seconds}</span>
              <span className="text-[10px] sm:text-xs text-gray-300 uppercase tracking-wider font-manrope">Secs</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Stat Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Budget Card */}
        <div className="bg-white p-5 rounded-3xl border border-[#EFE5E7] shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Budget</span>
            <span className="p-2 rounded-xl bg-green-50 text-green-600 text-lg">💰</span>
          </div>
          <div className="text-2xl font-bold text-[#1D1D1F] font-manrope">
            ${totalSpent.toLocaleString()}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            of ${wedding.totalBudget.toLocaleString()} target limit
          </p>

          <div className="w-full h-2 bg-gray-100 rounded-full mt-3 overflow-hidden">
            <div
              style={{ width: `${budgetSpentPercent}%` }}
              className={`h-full rounded-full transition-all ${
                budgetSpentPercent > 90 ? "bg-amber-500" : "bg-green-500"
              }`}
            />
          </div>
          <div className="flex justify-between items-center text-[11px] text-gray-500 mt-1.5">
            <span>{budgetSpentPercent}% spent</span>
            <Link to="/customer-dashboard/budget" className="text-[#CF9585] font-bold hover:underline">Manage &rarr;</Link>
          </div>
        </div>

        {/* Guest List Card */}
        <div className="bg-white p-5 rounded-3xl border border-[#EFE5E7] shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Guest RSVPs</span>
            <span className="p-2 rounded-xl bg-purple-50 text-purple-600 text-lg">👥</span>
          </div>
          <div className="text-2xl font-bold text-[#1D1D1F] font-manrope">
            {attendingGuests} Confirmed
          </div>
          <p className="text-xs text-gray-500 mt-1">
            out of {totalGuests} invited ({awaitingGuests} pending response)
          </p>

          <div className="w-full h-2 bg-gray-100 rounded-full mt-3 overflow-hidden">
            <div
              style={{ width: `${totalGuests > 0 ? (attendingGuests / totalGuests) * 100 : 0}%` }}
              className="h-full bg-purple-500 rounded-full transition-all"
            />
          </div>
          <div className="flex justify-between items-center text-[11px] text-gray-500 mt-1.5">
            <span>{Math.round((attendingGuests / (totalGuests || 1)) * 100)}% accepted</span>
            <Link to="/customer-dashboard/guests" className="text-[#CF9585] font-bold hover:underline">View List &rarr;</Link>
          </div>
        </div>

        {/* Checklist Card */}
        <div className="bg-white p-5 rounded-3xl border border-[#EFE5E7] shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Checklist</span>
            <span className="p-2 rounded-xl bg-blue-50 text-blue-600 text-lg">📅</span>
          </div>
          <div className="text-2xl font-bold text-[#1D1D1F] font-manrope">
            {completedTasks} / {totalTasks} Tasks
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {totalTasks - completedTasks} remaining to complete
          </p>

          <div className="w-full h-2 bg-gray-100 rounded-full mt-3 overflow-hidden">
            <div
              style={{ width: `${checklistPercent}%` }}
              className="h-full bg-[#CF9585] rounded-full transition-all"
            />
          </div>
          <div className="flex justify-between items-center text-[11px] text-gray-500 mt-1.5">
            <span>{checklistPercent}% done</span>
            <Link to="/customer-dashboard/checklist" className="text-[#CF9585] font-bold hover:underline">Checklist &rarr;</Link>
          </div>
        </div>

        {/* Booked Vendors Card */}
        <div className="bg-white p-5 rounded-3xl border border-[#EFE5E7] shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Vendors</span>
            <span className="p-2 rounded-xl bg-rose-50 text-rose-600 text-lg">🏪</span>
          </div>
          <div className="text-2xl font-bold text-[#1D1D1F] font-manrope">
            {bookedVendorsCount} Booked
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {wedding.vendors.length} total vendors in discussion
          </p>

          <div className="w-full h-2 bg-gray-100 rounded-full mt-3 overflow-hidden">
            <div
              style={{ width: `${(bookedVendorsCount / Math.max(1, wedding.vendors.length)) * 100}%` }}
              className="h-full bg-rose-500 rounded-full transition-all"
            />
          </div>
          <div className="flex justify-between items-center text-[11px] text-gray-500 mt-1.5">
            <span>{wedding.vendors.length - bookedVendorsCount} pending</span>
            <Link to="/customer-dashboard/vendors" className="text-[#CF9585] font-bold hover:underline">Vendors &rarr;</Link>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Upcoming Tasks & Ceremonies Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Next Milestones (2 Columns) */}
        <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl border border-[#EFE5E7] shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#1D1D1F] font-playfair">
                Upcoming Timeline Tasks
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">Stay on track with your personalized wedding milestones</p>
            </div>
            <Link
              to="/customer-dashboard/checklist"
              className="text-xs font-bold text-[#CF9585] hover:underline"
            >
              View Full Checklist &rarr;
            </Link>
          </div>

          <div className="space-y-3">
            {wedding.checklist.slice(0, 5).map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FDF8F9] border border-[#F6ECEE] hover:border-[#EBC9D4] transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    task.completed ? "bg-green-500 text-white" : "border-2 border-gray-300 text-transparent"
                  }`}>
                    ✓
                  </span>
                  <div>
                    <p className={`text-sm font-semibold ${task.completed ? "line-through text-gray-400" : "text-[#1D1D1F]"}`}>
                      {task.title}
                    </p>
                    <span className="text-[11px] text-gray-400 font-manrope">{task.category}</span>
                  </div>
                </div>

                <span className="text-xs text-gray-500 font-medium shrink-0 ml-2">
                  Due: {task.dueDate}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Ceremonies & Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-[#EFE5E7] shadow-xs">
            <h3 className="text-lg font-bold text-[#1D1D1F] font-playfair mb-3">
              Planned Ceremonies 💐
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Tradition: <strong className="text-[#CF9585] capitalize">{reg.religiousAffiliation || "Islamic"}</strong>
            </p>

            <div className="flex flex-wrap gap-2">
              {(reg.ceremonies && reg.ceremonies.length > 0 ? reg.ceremonies : ["nikah", "walima", "mehendi", "rukhsati"]).map((c) => (
                <span
                  key={c}
                  className="px-3 py-1.5 rounded-xl bg-[#FFF0F3] text-[#CF9585] text-xs font-bold capitalize border border-[#FAD7E0]"
                >
                  ✨ {c.replace("-", " ")}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#DDEEE8] p-6 rounded-3xl border border-[#c4e3d9]">
            <h3 className="text-lg font-bold text-[#1D1D1F] font-playfair mb-2">
              Invite Your Partner 💌
            </h3>
            <p className="text-xs text-[#343E56] mb-4 font-manrope">
              Give {reg.himFirstName || "your partner"} direct access to manage budgets, review shortlisted vendors, and update the guest list together.
            </p>

            <button
              type="button"
              onClick={() => navigator.clipboard.writeText("https://wedelogy.com/invite/couple-token-9842")}
              className="w-full py-2.5 px-4 bg-[#1D1D1F] text-white text-xs font-bold rounded-xl hover:bg-black transition-all cursor-pointer"
            >
              📋 Copy Collaboration Invite Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
