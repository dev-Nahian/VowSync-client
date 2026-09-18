import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "@/assets/Images/logo.png";
import Container from "@/components/common/Container";
import toast from "react-hot-toast";

export default function CustomerDashboardLayout() {
  const navigate = useNavigate();
  const reg = useSelector((state) => state.authRegistration);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isBride = reg.role === "Bride";
  const coupleTitle = `${reg.herFirstName || "Nadia"} & ${reg.himFirstName || "Ismail"}`;

  // Compute countdown in days
  const targetDate = new Date(reg.weddingDate || "2026-10-24");
  const today = new Date();
  const diffTime = targetDate - today;
  const daysLeft = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  const navItems = [
    { name: "Overview", path: "/customer-dashboard", icon: "📊", exact: true },
    { name: "Budget Planner", path: "/customer-dashboard/budget", icon: "💰" },
    { name: "Guest List & RSVP", path: "/customer-dashboard/guests", icon: "👥" },
    { name: "Checklist & Timeline", path: "/customer-dashboard/checklist", icon: "📅" },
    { name: "My Booked Vendors", path: "/customer-dashboard/vendors", icon: "🏪" },
    { name: "Digital Invitations", path: "/customer-dashboard/invitations", icon: "💌" },
    { name: "Wedding Settings", path: "/customer-dashboard/settings", icon: "⚙️" },
  ];

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#FDF9F8] flex flex-col font-manrope">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#EFE5E7] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <Link to="/" className="w-36 md:w-44 shrink-0">
                <img src={Logo} alt="Wedelogy" className="h-10 object-contain" />
              </Link>
            </div>

            {/* Middle Couple Info & Live Countdown */}
            <div className="hidden md:flex items-center gap-4 bg-[#FFF0F3] px-4 py-2 rounded-full border border-[#FAD7E0]">
              <div className="flex items-center gap-2">
                <span className="text-xl">💍</span>
                <span className="text-sm font-bold text-[#1D1D1F] font-playfair">{coupleTitle}</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#CF9585]">
                <span>⏳</span>
                <span><strong>{daysLeft} Days</strong> Until Wedding</span>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Link
                to="/browse-vendors"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold bg-[#FCECEE] text-[#CF9585] rounded-xl hover:bg-[#ebd5d9] transition-all"
              >
                <span>🔍</span> Find Vendors
              </Link>

              <div className="flex items-center gap-3 pl-2 border-l border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#CF9585] text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  {reg.herFirstName ? reg.herFirstName[0] : "N"}
                </div>

                <div className="hidden lg:block text-left">
                  <p className="text-xs font-bold text-[#1D1D1F] leading-tight">
                    {reg.herFirstName || "Nadia"} ({reg.role || "Bride"})
                  </p>
                  <p className="text-[11px] text-gray-500 truncate max-w-[120px]">{reg.email || "couple@wedding.com"}</p>
                </div>

                <button
                  type="button"
                  onClick={handleLogout}
                  title="Log out"
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar for Desktop */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-28 bg-white rounded-3xl p-4 border border-[#EFE5E7] shadow-xs space-y-1.5">
            <div className="px-4 py-3 mb-2 border-b border-gray-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                Planning Dashboard
              </span>
              <p className="text-xs text-gray-600 mt-0.5">
                {reg.city || "Dhaka"}, {reg.country || "Bangladesh"}
              </p>
            </div>

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.exact}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#1D1D1F] text-white shadow-sm"
                      : "text-gray-600 hover:bg-[#FFF0F3] hover:text-[#1D1D1F]"
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}

            <div className="pt-4 mt-4 border-t border-gray-100 px-2">
              <div className="bg-[#DDEEE8] p-3.5 rounded-2xl">
                <p className="text-xs font-bold text-[#1D1D1F] mb-1">Partner Collaboration</p>
                <p className="text-[11px] text-[#343E56]">
                  {reg.himFirstName || "Ismail"} has edit access to all checklists.
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50 flex">
            <div className="w-72 bg-white h-full p-6 shadow-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b">
                  <span className="font-bold text-lg font-playfair">Dashboard Menu</span>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-500">
                    ✕
                  </button>
                </div>

                <div className="space-y-1.5">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.exact}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                          isActive
                            ? "bg-[#1D1D1F] text-white"
                            : "text-gray-600 hover:bg-[#FFF0F3]"
                        }`
                      }
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <button
                  onClick={handleLogout}
                  className="w-full py-3 text-center text-sm font-bold text-red-600 bg-red-50 rounded-xl"
                >
                  Log Out
                </button>
              </div>
            </div>
            <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
