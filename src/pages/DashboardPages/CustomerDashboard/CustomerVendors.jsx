import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBookedVendor, updateVendorStatus } from "@/Redux/Slices/weddingDataSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function CustomerVendors() {
  const dispatch = useDispatch();
  const wedding = useSelector((state) => state.weddingData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "Venue / Banquet",
    rating: 5.0,
    reviewsCount: 24,
    city: "Dhaka",
    quote: "$5,000",
    status: "Booked",
    contactPerson: "",
    phone: "",
    email: "",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
  });

  const categories = [
    "Venue / Banquet",
    "Photography & Cinema",
    "Floral & Decor",
    "Catering",
    "Bridal Makeup & Hair",
    "Bridal Wear & Attire",
    "DJ & Entertainment",
    "Wedding Planning",
    "Cake & Desserts",
  ];

  const handleStatusChange = (id, newStatus) => {
    dispatch(updateVendorStatus({ id, status: newStatus }));
    toast.success(`Vendor status updated to ${newStatus}`);
  };

  const handleAddVendor = (e) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error("Please enter vendor name");
      return;
    }
    dispatch(addBookedVendor(formData));
    toast.success("Vendor added to your booking manager!");
    setIsModalOpen(false);
    setFormData({
      name: "",
      category: "Venue / Banquet",
      rating: 5.0,
      reviewsCount: 24,
      city: "Dhaka",
      quote: "$5,000",
      status: "Booked",
      contactPerson: "",
      phone: "",
      email: "",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
    });
  };

  return (
    <div className="space-y-8 font-manrope">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-playfair text-[#1D1D1F]">
            My Booked & Shortlisted Vendors 🏪
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your vendor contracts, quotes, point of contacts, and booked professionals.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/browse-vendors"
            className="px-4 py-2.5 bg-[#FFF0F3] text-[#CF9585] text-xs font-bold rounded-xl hover:bg-[#ebd5d9] transition-all"
          >
            🔍 Browse Vendor Directory
          </Link>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 bg-[#1D1D1F] text-white text-xs font-bold rounded-xl hover:bg-black transition-all shadow-sm"
          >
            + Add Vendor Card
          </button>
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {wedding.vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="bg-white rounded-3xl border border-[#EFE5E7] shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-all"
          >
            <div>
              <div className="h-44 w-full relative overflow-hidden bg-gray-100">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover"
                />
                <span
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow-md ${
                    vendor.status === "Booked"
                      ? "bg-green-500 text-white"
                      : vendor.status === "Contract Pending"
                      ? "bg-amber-500 text-white"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {vendor.status}
                </span>

                <span className="absolute bottom-3 left-4 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-lg text-white text-xs font-semibold">
                  ★ {vendor.rating} ({vendor.reviewsCount} reviews)
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
                      {vendor.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#1D1D1F] mt-0.5">
                      {vendor.name}
                    </h3>
                  </div>

                  <span className="text-base font-bold text-[#1D1D1F] bg-[#FAF5F6] px-3 py-1 rounded-xl shrink-0">
                    {vendor.quote}
                  </span>
                </div>

                <div className="text-xs text-gray-600 space-y-1 bg-[#FDF8F9] p-3.5 rounded-2xl border border-gray-100">
                  <p>
                    <strong>Contact Person:</strong> {vendor.contactPerson || "Manager on Duty"}
                  </p>
                  <p>
                    <strong>Phone / WhatsApp:</strong> {vendor.phone || "+1 555-000-0000"}
                  </p>
                  <p>
                    <strong>Email:</strong> {vendor.email || "info@vendor.com"}
                  </p>
                  <p>
                    <strong>Location:</strong> {vendor.city || "Dhaka"}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-gray-100 mt-2 flex items-center justify-between gap-4">
              <span className="text-xs font-semibold text-gray-500">Update Booking Status:</span>
              <select
                value={vendor.status}
                onChange={(e) => handleStatusChange(vendor.id, e.target.value)}
                className="px-3 py-1.5 text-xs font-bold rounded-xl border border-gray-200 bg-white"
              >
                <option value="Booked">Booked & Confirmed</option>
                <option value="Contract Pending">Contract Pending</option>
                <option value="Inquired">Inquired / Quoting</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* Add Vendor Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b">
              <h3 className="text-xl font-bold font-playfair text-[#1D1D1F]">
                Add Vendor to Booking Hub
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-black p-1 text-lg"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddVendor} className="space-y-3.5 text-sm">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Vendor / Studio Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Royal Blooms Floral Studio"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-gray-700">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-gray-700">Quoted Price ($)</label>
                  <input
                    type="text"
                    placeholder="e.g. $4,500"
                    value={formData.quote}
                    onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-gray-700">Contact Person</label>
                  <input
                    type="text"
                    placeholder="e.g. Sarah Khan"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-gray-700">Booking Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white"
                  >
                    <option value="Booked">Booked</option>
                    <option value="Contract Pending">Contract Pending</option>
                    <option value="Inquired">Inquired</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-gray-700">Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 555-000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="vendor@mail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-1/2 py-2.5 rounded-xl border border-gray-300 font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2.5 rounded-xl bg-[#1D1D1F] text-white font-bold hover:bg-black"
                >
                  Add Vendor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
