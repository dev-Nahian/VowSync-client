import React, { useState } from "react";
import Container from "@/components/common/Container";
import CommonButton from "@/components/common/CommonButton";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export default function BrowseVendors() {
  const vendorsFromRedux = useSelector((state) => state.vendors?.list || []);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("All");
  const [selectedVendorForModal, setSelectedVendorForModal] = useState(null);
  const [inquirySent, setInquirySent] = useState(false);

  const categories = [
    "All",
    "Venues & Banquets",
    "Photography & Cinema",
    "Catering & Cuisine",
    "Floral & Decor",
    "Makeup & Hair",
    "Bridal Wear & Attire",
    "DJ & Entertainment",
    "Wedding Planners",
    "Cakes & Desserts",
  ];

  const filteredVendors = vendorsFromRedux.filter((vendor) => {
    const matchesCategory =
      selectedCategory === "All" ||
      vendor.category?.toLowerCase() === selectedCategory.toLowerCase() ||
      vendor.category?.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesPrice =
      priceFilter === "All" || vendor.priceTier === priceFilter;
    const matchesSearch =
      vendor.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.city?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const handleSendInquiry = (e) => {
    e.preventDefault();
    setInquirySent(true);
    toast.success(
      `🎉 Inquiry successfully sent to ${selectedVendorForModal.name}! They will contact you shortly.`
    );
    setTimeout(() => {
      setSelectedVendorForModal(null);
      setInquirySent(false);
    }, 1200);
  };

  return (
    <div className="bg-[#FFF9F9] min-h-screen py-12 md:py-20 font-manrope">
      <Container>
        {/* Page Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FCECEE] text-[#CF9585] text-xs font-bold uppercase tracking-wider">
            Verified Wedding Directory
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-[#1D1D1F]">
            Browse Top-Rated Wedding Vendors
          </h1>
          <p className="text-sm md:text-base text-[#5B6477]">
            Connect directly with verified banquet halls, fine-art photographers, gourmet caterers, and floral designers.
          </p>
        </div>

        {/* Search & Filters Section */}
        <div className="bg-white p-6 rounded-3xl border border-[#EFE5E7] shadow-sm mb-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-2 relative">
              <input
                type="text"
                placeholder="Search vendor by name, specialty, or city (e.g. Photography, Ballroom, Gulshan)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-11 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#CF9585]"
              />
              <span className="absolute left-4 top-3.5 text-gray-400 text-base">
                🔍
              </span>
            </div>

            {/* Price Filter */}
            <div>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm font-semibold bg-white focus:outline-none focus:ring-2 focus:ring-[#CF9585]"
              >
                <option value="All">All Price Ranges</option>
                <option value="$">$ (Budget-Friendly)</option>
                <option value="$$">$$ (Moderate)</option>
                <option value="$$$">$$$ (Premium)</option>
                <option value="$$$$">$$$$ (Luxury)</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#1D1D1F] text-white shadow-xs"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVendors.map((vendor) => (
            <div
              key={vendor.id}
              className={`bg-white rounded-3xl border overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                vendor.isNewlyRegistered
                  ? "border-[#CF9585] ring-2 ring-[#FAD7E0] shadow-md"
                  : "border-[#EFE5E7] shadow-xs"
              }`}
            >
              <div>
                <div className="h-56 w-full relative overflow-hidden">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold flex items-center gap-1.5">
                    <span>{vendor.priceTier}</span>
                    <span>•</span>
                    <span>{vendor.category}</span>
                  </div>

                  {vendor.isNewlyRegistered ? (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#CF9585] to-[#EBC9D4] text-[#1D1D1F] px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1 animate-pulse">
                      <span>✨ New Verified Partner</span>
                    </div>
                  ) : (
                    <div className="absolute top-4 right-4 bg-white/95 px-2.5 py-1 rounded-full text-[#1D1D1F] text-xs font-bold shadow-md flex items-center gap-1">
                      <span className="text-amber-500">★</span> {vendor.rating}{" "}
                      ({vendor.reviewsCount})
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold font-playfair text-[#1D1D1F] leading-snug">
                      {vendor.name}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <span>📍</span> {vendor.address}
                  </p>

                  <p className="text-xs text-[#5B6477] line-clamp-2 leading-relaxed">
                    {vendor.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {vendor.features?.slice(0, 2).map((f, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#FAF5F6] text-[#CF9585] text-[11px] font-semibold"
                      >
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">
                    Starting Price
                  </span>
                  <span className="text-sm font-bold text-[#1D1D1F]">
                    {vendor.priceRange}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedVendorForModal(vendor)}
                  className="px-4 py-2 bg-[#1D1D1F] text-white text-xs font-bold rounded-xl hover:bg-black transition-all cursor-pointer shadow-sm"
                >
                  View Details & Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Vendor Details & Instant Inquire Modal */}
      {selectedVendorForModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-6 my-8">
            <div className="flex items-start justify-between pb-4 border-b">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#FCECEE] text-[#CF9585] text-xs font-bold uppercase tracking-wider">
                  {selectedVendorForModal.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-[#1D1D1F] mt-2">
                  {selectedVendorForModal.name}
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  📍 {selectedVendorForModal.address} • ★{" "}
                  {selectedVendorForModal.rating} (
                  {selectedVendorForModal.reviewsCount} Couple Reviews)
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedVendorForModal(null)}
                className="text-gray-400 hover:text-black p-1 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <p className="text-gray-600 leading-relaxed">
                {selectedVendorForModal.description}
              </p>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-2">
                  Key Features & Amenities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedVendorForModal.features?.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-medium text-gray-700 bg-gray-50 p-2.5 rounded-xl"
                    >
                      <span className="text-green-600">✓</span> {feat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-[#FFF0F3] p-5 rounded-2xl border border-[#FAD7E0] space-y-3">
                <h4 className="font-bold text-sm text-[#1D1D1F] font-playfair">
                  Send Direct Quote Request to {selectedVendorForModal.name} 💌
                </h4>

                <form onSubmit={handleSendInquiry} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Names (e.g. Nadia & Ismail)"
                      defaultValue="Nadia & Ismail"
                      className="px-3 py-2 bg-white rounded-xl border border-gray-300 text-xs"
                      required
                    />
                    <input
                      type="date"
                      defaultValue="2026-10-24"
                      className="px-3 py-2 bg-white rounded-xl border border-gray-300 text-xs"
                      required
                    />
                  </div>

                  <textarea
                    rows={2}
                    placeholder="Tell the vendor about your ceremony details, estimated guest count, and specific requests..."
                    defaultValue="Hi! We are planning our wedding reception for ~180 guests on Oct 24, 2026 and would love to check your availability and package details."
                    className="w-full px-3 py-2 bg-white rounded-xl border border-gray-300 text-xs"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#1D1D1F] text-white text-xs font-bold rounded-xl hover:bg-black transition-all cursor-pointer shadow-md"
                  >
                    Send Direct Message & Request Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
