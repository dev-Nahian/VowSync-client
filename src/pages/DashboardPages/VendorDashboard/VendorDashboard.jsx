import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/assets/Images/logo.png";
import toast from "react-hot-toast";

export default function VendorDashboard() {
  const navigate = useNavigate();

  const [inquiries, setInquiries] = useState([
    {
      id: "inq_1",
      couple: "Nadia & Ismail",
      date: "October 24, 2026",
      location: "Grand Imperial Ballroom, Dhaka",
      service: "Full Wedding Day Cinema + Drone + Album",
      budget: "$6,500",
      status: "Confirmed",
      receivedAt: "Yesterday",
    },
    {
      id: "inq_2",
      couple: "Ayesha & Farhan",
      date: "November 14, 2026",
      location: "Radisson Blu Water Garden, Dhaka",
      service: "2-Day Mehendi & Reception Photography",
      budget: "$5,200",
      status: "New Inquiry",
      receivedAt: "2 hours ago",
    },
    {
      id: "inq_3",
      couple: "Zara & Dr. Arman",
      date: "December 05, 2026",
      location: "Le Méridien, Dhaka",
      service: "Destination Pre-Wedding & Main Reception",
      budget: "$8,000",
      status: "Quote Sent",
      receivedAt: "3 days ago",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setInquiries(
      inquiries.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
    );
    toast.success(`Inquiry marked as ${newStatus}`);
  };

  const handleLogout = () => {
    toast.success("Logged out from vendor portal");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#FDF9F8] font-manrope">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#EFE5E7] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <Link to="/" className="w-36 md:w-44 shrink-0">
                <img src={Logo} alt="Wedelogy" className="h-10 object-contain" />
              </Link>
              <span className="px-3 py-1 bg-[#1D1D1F] text-white rounded-full text-xs font-bold font-manrope">
                Vendor Partner Portal
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/browse-vendors"
                className="text-xs font-bold text-[#CF9585] hover:underline hidden sm:inline"
              >
                View Public Directory &rarr;
              </Link>

              <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#1D1D1F] text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  📸
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-xs font-bold text-[#1D1D1F]">Luxe Memories Photography</p>
                  <span className="text-[11px] text-green-600 font-semibold">● Verified Partner</span>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="p-2 text-gray-400 hover:text-red-500 rounded-lg transition-all"
                  title="Log out"
                >
                  🚪
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Vendor Banner & Quick Stats */}
        <div className="bg-gradient-to-r from-[#1D1D1F] via-[#2A2A2E] to-[#1D1D1F] text-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-[#EBC9D4]">
              Photography & Cinema Studio
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold font-playfair mt-2">
              Luxe Memories Photography Studio
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Dhaka, Bangladesh • ★ 4.9 Rating (98 Verified Reviews) • Member since 2024
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => toast.success("Pricing packages updated!")}
              className="px-4 py-2.5 bg-white text-[#1D1D1F] text-xs font-bold rounded-xl hover:bg-gray-100 transition-all cursor-pointer"
            >
              💼 Manage Packages
            </button>
            <button
              type="button"
              onClick={() => toast.success("Portfolio media synced!")}
              className="px-4 py-2.5 bg-white/10 border border-white/20 text-white text-xs font-bold rounded-xl hover:bg-white/20 transition-all cursor-pointer"
            >
              🖼️ Upload Photos
            </button>
          </div>
        </div>

        {/* 4 Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-3xl border border-[#EFE5E7] shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Inquiries</span>
            <div className="text-2xl font-bold text-[#1D1D1F] mt-1">28 Leads</div>
            <p className="text-xs text-green-600 font-semibold mt-1">↑ 4 new this week</p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-[#EFE5E7] shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-green-600">Confirmed Bookings</span>
            <div className="text-2xl font-bold text-green-600 mt-1">12 Weddings</div>
            <p className="text-xs text-gray-500 mt-1">Season 2026/2027</p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-[#EFE5E7] shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">Total Contract Value</span>
            <div className="text-2xl font-bold text-[#CF9585] mt-1">$68,500</div>
            <p className="text-xs text-gray-500 mt-1">85% collected</p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-[#EFE5E7] shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Profile Views</span>
            <div className="text-2xl font-bold text-blue-600 mt-1">3,420</div>
            <p className="text-xs text-gray-500 mt-1">Top 5% in category</p>
          </div>
        </div>

        {/* Inquiries Table */}
        <div className="bg-white rounded-3xl border border-[#EFE5E7] shadow-xs overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold font-playfair text-[#1D1D1F]">
                Active Client Inquiries & Booking Requests
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">Manage incoming quote requests and respond to couples</p>
            </div>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-xl">
              {inquiries.length} Active Leads
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <thead className="bg-[#FAF5F6] text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">Couple Name</th>
                  <th className="px-6 py-4">Target Date</th>
                  <th className="px-6 py-4">Location / Venue</th>
                  <th className="px-6 py-4">Requested Package</th>
                  <th className="px-6 py-4">Budget</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-manrope">
                {inquiries.map((inq) => (
                  <tr key={inq.id} className="hover:bg-gray-50/70 transition-all">
                    <td className="px-6 py-4">
                      <div className="font-bold text-[#1D1D1F]">{inq.couple}</div>
                      <span className="text-xs text-gray-400">Received {inq.receivedAt}</span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-[#1D1D1F]">{inq.date}</td>
                    <td className="px-6 py-4 text-xs text-gray-600 max-w-xs">{inq.location}</td>
                    <td className="px-6 py-4 text-xs font-medium text-gray-800">{inq.service}</td>
                    <td className="px-6 py-4 font-bold text-[#1D1D1F]">{inq.budget}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        inq.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : inq.status === "Quote Sent"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-amber-100 text-amber-700"
                      }`}>
                        {inq.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      {inq.status !== "Confirmed" && (
                        <button
                          type="button"
                          onClick={() => handleStatusChange(inq.id, "Confirmed")}
                          className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-lg hover:bg-green-700 transition-all cursor-pointer"
                        >
                          Accept
                        </button>
                      )}
                      {inq.status === "New Inquiry" && (
                        <button
                          type="button"
                          onClick={() => handleStatusChange(inq.id, "Quote Sent")}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg hover:bg-gray-200 transition-all cursor-pointer"
                        >
                          Send Quote
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2 Column: Service Packages & Recent Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Packages */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE5E7] shadow-xs">
            <h3 className="text-lg font-bold font-playfair text-[#1D1D1F] mb-4 pb-2 border-b">
              Active Service Packages
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FDF8F9] border border-[#F6ECEE] flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-sm text-[#1D1D1F]">Royal Heritage Cinema Package</h4>
                  <p className="text-xs text-gray-500">2 Cinematographers, Drone Cinema, 4K Feature Film, Luxury Leather Album</p>
                </div>
                <span className="font-bold text-base text-[#CF9585] shrink-0 ml-4">$6,500</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FDF8F9] border border-[#F6ECEE] flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-sm text-[#1D1D1F]">Standard Reception Photography</h4>
                  <p className="text-xs text-gray-500">1 Senior Photographer, Unlimited Edited High-Res Photos, Online Gallery</p>
                </div>
                <span className="font-bold text-base text-[#CF9585] shrink-0 ml-4">$3,200</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FDF8F9] border border-[#F6ECEE] flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-sm text-[#1D1D1F]">Pre-Wedding Romantic Session</h4>
                  <p className="text-xs text-gray-500">3-Hour Scenic Outdoor Shoot, 50 Retouched Frames, Teaser Reel</p>
                </div>
                <span className="font-bold text-base text-[#CF9585] shrink-0 ml-4">$1,500</span>
              </div>
            </div>
          </div>

          {/* Client Reviews */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE5E7] shadow-xs">
            <h3 className="text-lg font-bold font-playfair text-[#1D1D1F] mb-4 pb-2 border-b">
              Recent Couple Reviews (★ 4.9 / 5.0)
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-[#1D1D1F]">Sarah & Michael</span>
                  <span className="text-amber-500 text-xs">★★★★★</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  "David and his cinematography team were exceptional! They captured every emotional moment of our Nikah and Walima with incredible grace."
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-[#1D1D1F]">Fatima & Omar</span>
                  <span className="text-amber-500 text-xs">★★★★★</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  "The wedding teaser video was ready in just 4 days and brought tears of joy to our families. Highly recommended vendor!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
