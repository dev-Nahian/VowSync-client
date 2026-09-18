import React, { useState } from "react";
import Container from "@/components/common/Container";
import CommonButton from "@/components/common/CommonButton";
import toast from "react-hot-toast";

export default function BrowseVendors() {
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

  const vendorList = [
    {
      id: "v_1",
      name: "Grand Imperial Hall & Gardens",
      category: "Venues & Banquets",
      priceTier: "$$$",
      priceRange: "Starting from $15,000",
      rating: 4.9,
      reviewsCount: 142,
      city: "Dhaka",
      address: "Plot 14, Gulshan Avenue, Dhaka",
      capacity: "Up to 800 Guests",
      features: ["Bridal Suite Included", "Valet Parking", "In-house Catering Available", "Outdoor Lawn Option"],
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      description: "A breathtaking luxury ballroom with crystal chandeliers, grand staircases, and lush outdoor landscaped gardens.",
    },
    {
      id: "v_2",
      name: "Eternal Moments Photography & Cinema",
      category: "Photography & Cinema",
      priceTier: "$$$",
      priceRange: "Starting from $3,500",
      rating: 5.0,
      reviewsCount: 98,
      city: "Dhaka",
      address: "Banani 11, Dhaka",
      capacity: "Multiple Crews",
      features: ["4K Drone Cinematography", "Same-Day Teaser Reel", "Luxury Leather Albums", "2 Senior Cinematographers"],
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
      description: "Masters of fine-art wedding storytelling, capturing raw emotions, joyful tears, and cinematic legacy moments.",
    },
    {
      id: "v_3",
      name: "Blossom & Dream Floral Design",
      category: "Floral & Decor",
      priceTier: "$$",
      priceRange: "Starting from $4,000",
      rating: 4.8,
      reviewsCount: 76,
      city: "Dhaka",
      address: "Dhanmondi 27, Dhaka",
      capacity: "Custom Stages",
      features: ["Imported Fresh Flowers", "Custom Stage & Mandap", "Fairy Light Canopies", "Mehendi Themed Stages"],
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
      description: "Award-winning stage and floral styling company transforming venues into fairytale wonderlands.",
    },
    {
      id: "v_4",
      name: "Savor Delights Gourmet Catering",
      category: "Catering & Cuisine",
      priceTier: "$$$",
      priceRange: "Starting from $45 / Plate",
      rating: 4.9,
      reviewsCount: 110,
      city: "Dhaka",
      address: "Uttara Sector 7, Dhaka",
      capacity: "100 to 2,000 Guests",
      features: ["Halal Certified Kitchen", "Kacchi Biryani Specialty", "Live Food Stations", "Dietary Customization"],
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
      description: "Renowned culinary masters bringing rich heritage banquets and exquisite fusion delicacies to your celebration.",
    },
    {
      id: "v_5",
      name: "Glamour Glow Bridal Artistry",
      category: "Makeup & Hair",
      priceTier: "$$",
      priceRange: "Starting from $800",
      rating: 4.9,
      reviewsCount: 88,
      city: "Dhaka",
      address: "Gulshan 1, Dhaka",
      capacity: "Bride & Bridal Party",
      features: ["HD Airbrush Makeup", "Traditional & Western Looks", "Pre-bridal Skin Prep", "On-location Service"],
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      description: "Celebrity bridal makeup artists dedicated to highlighting your radiant natural beauty on your big day.",
    },
    {
      id: "v_6",
      name: "Royal Heritage Haute Couture",
      category: "Bridal Wear & Attire",
      priceTier: "$$$$",
      priceRange: "Starting from $2,200",
      rating: 4.9,
      reviewsCount: 64,
      city: "Dhaka",
      address: "Banani Road 10, Dhaka",
      capacity: "Custom Bespoke",
      features: ["Handcrafted Zardozi & Silk", "Custom Groom Sherwanis", "Private Bridal Suite Fitting", "Rush Delivery Available"],
      image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80",
      description: "Exquisite handcrafted bridal lehengas, sarees, and groom sherwanis woven with royal traditions and modern grace.",
    },
    {
      id: "v_7",
      name: "Symphony Strings & Live Beats",
      category: "DJ & Entertainment",
      priceTier: "$$",
      priceRange: "Starting from $1,800",
      rating: 4.8,
      reviewsCount: 52,
      city: "Dhaka",
      address: "Mohakhali DOHS, Dhaka",
      capacity: "All Venues",
      features: ["Live String Quartet", "Professional Wedding DJ", "Intelligent Light Shows", "Sound Engineering"],
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      description: "Electrifying live music, emotional acoustic ceremony strings, and energetic dance floor beats.",
    },
    {
      id: "v_8",
      name: "Prestige Luxe Event Planners",
      category: "Wedding Planners",
      priceTier: "$$$$",
      priceRange: "Starting from $5,000",
      rating: 5.0,
      reviewsCount: 115,
      city: "Dhaka",
      address: "Gulshan 2, Dhaka",
      capacity: "Full-Service Coordination",
      features: ["Day-of Coordination", "Full 12-Month Management", "Vendor Contract Negotiations", "VIP Hospitality Concierge"],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      description: "Flawless end-to-end wedding production and luxury management ensuring you savor every moment stress-free.",
    },
  ];

  const filteredVendors = vendorList.filter((vendor) => {
    const matchesCategory = selectedCategory === "All" || vendor.category === selectedCategory;
    const matchesPrice = priceFilter === "All" || vendor.priceTier === priceFilter;
    const matchesSearch =
      vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const handleSendInquiry = (e) => {
    e.preventDefault();
    setInquirySent(true);
    toast.success(`🎉 Inquiry successfully sent to ${selectedVendorForModal.name}! They will contact you shortly.`);
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
            Connect directly with award-winning venues, photographers, caterers, and decorators. Read verified reviews and request custom quotes in seconds.
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
              <span className="absolute left-4 top-3.5 text-gray-400 text-base">🔍</span>
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
              className="bg-white rounded-3xl border border-[#EFE5E7] shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="h-56 w-full relative overflow-hidden">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold">
                    {vendor.priceTier} • {vendor.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 px-2.5 py-1 rounded-full text-[#1D1D1F] text-xs font-bold shadow-md flex items-center gap-1">
                    <span className="text-amber-500">★</span> {vendor.rating} ({vendor.reviewsCount})
                  </div>
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
                    {vendor.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-[#FAF5F6] text-[#CF9585] text-[11px] font-semibold">
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">Starting Price</span>
                  <span className="text-sm font-bold text-[#1D1D1F]">{vendor.priceRange}</span>
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
                  📍 {selectedVendorForModal.address} • ★ {selectedVendorForModal.rating} ({selectedVendorForModal.reviewsCount} Couple Reviews)
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
                  {selectedVendorForModal.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-700 bg-gray-50 p-2.5 rounded-xl">
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
