import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/assets/Images/logo.png";
import toast from "react-hot-toast";

export default function VendorDashboard() {
  const navigate = useNavigate();

  // Load dynamically registered vendor profile if available
  const getStoredVendorProfile = () => {
    try {
      const stored = localStorage.getItem("wedelogy_vendor_profile");
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error(e);
    }
    return {
      name: "Luxe Memories Photography Studio",
      category: "Photography & Cinema",
      city: "Dhaka",
      address: "Gulshan-2, Dhaka, Bangladesh",
      phone: "+880 1812-987654",
      email: "david@luxememories.com",
      description:
        "Award-winning fine-art wedding photography and cinematic 4K storytelling for modern celebrations.",
    };
  };

  const [vendorProfile, setVendorProfile] = useState(getStoredVendorProfile);

  // Active navigation tab
  const [activeTab, setActiveTab] = useState("overview"); // overview | inquiries | calendar | packages | portfolio | reviews | settings
  const [isAcceptingBookings, setIsAcceptingBookings] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState("All");

  // Modals state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeInquiryForQuote, setActiveInquiryForQuote] = useState(null);
  const [customQuotePrice, setCustomQuotePrice] = useState("");
  const [customQuoteNote, setCustomQuoteNote] = useState("");

  const [briefModalOpen, setBriefModalOpen] = useState(false);
  const [activeInquiryForBrief, setActiveInquiryForBrief] = useState(null);

  const [newPackageModalOpen, setNewPackageModalOpen] = useState(false);
  const [newPackage, setNewPackage] = useState({
    title: "",
    price: "",
    description: "",
    deliverables: "",
    tag: "Standard",
  });

  const [uploadMediaModalOpen, setUploadMediaModalOpen] = useState(false);
  const [newMedia, setNewMedia] = useState({
    title: "",
    category: "Photography",
    imageUrl: "",
  });

  // Data states
  const [inquiries, setInquiries] = useState([
    {
      id: "inq_1",
      couple: "Nadia & Ismail",
      email: "nadia.ismail@gmail.com",
      phone: "+880 1711-234567",
      date: "October 24, 2026",
      location: "Grand Imperial Ballroom, Dhaka",
      service: "Full Wedding Day Cinema + Drone + Album",
      budget: "$6,500",
      status: "Confirmed",
      receivedAt: "Yesterday",
      guestCount: "450 Guests",
      notes:
        "Looking for cinematic teasers and drone footage of the outdoor garden entrance.",
    },
    {
      id: "inq_2",
      couple: "Ayesha & Farhan",
      email: "ayesha.f@hotmail.com",
      phone: "+880 1819-876543",
      date: "November 14, 2026",
      location: "Radisson Blu Water Garden, Dhaka",
      service: "2-Day Mehendi & Reception Photography",
      budget: "$5,200",
      status: "New Inquiry",
      receivedAt: "2 hours ago",
      guestCount: "350 Guests",
      notes:
        "Need 2 photographers covering stage candid moments and family portraits.",
    },
    {
      id: "inq_3",
      couple: "Zara & Dr. Arman",
      email: "zara.arman@outlook.com",
      phone: "+880 1912-345678",
      date: "December 05, 2026",
      location: "Le Méridien, Dhaka",
      service: "Destination Pre-Wedding & Main Reception",
      budget: "$8,000",
      status: "Quote Sent",
      receivedAt: "3 days ago",
      guestCount: "600 Guests",
      notes:
        "Pre-wedding shoot in Sylhet tea gardens followed by reception at Grand Ballroom.",
    },
    {
      id: "inq_4",
      couple: "Samira & Tanvir",
      email: "samira.t@gmail.com",
      phone: "+880 1610-987654",
      date: "January 15, 2027",
      location: "Pan Pacific Sonargaon, Dhaka",
      service: "Holud & Reception 4K Cinema",
      budget: "$4,800",
      status: "New Inquiry",
      receivedAt: "5 hours ago",
      guestCount: "500 Guests",
      notes:
        "Traditional lighting style preferred with same-day highlight reel.",
    },
    {
      id: "inq_5",
      couple: "Rania & Shahrier",
      email: "rania.s@yahoo.com",
      phone: "+880 1722-112233",
      date: "February 20, 2027",
      location: "InterContinental, Dhaka",
      service: "Exclusive VIP Bridal Coverage",
      budget: "$9,500",
      status: "Confirmed",
      receivedAt: "1 week ago",
      guestCount: "700 Guests",
      notes:
        "VIP multi-cam live stream for overseas guests and bespoke Italian leather photobooks.",
    },
  ]);

  const [packages, setPackages] = useState([
    {
      id: "pkg_1",
      title: "Royal Heritage 4K Cinema Package",
      price: "$6,500",
      category: "Full Production",
      badge: "Most Popular",
      description:
        "Comprehensive full-day multi-camera cinematic coverage with aerial drone captures.",
      deliverables: [
        "2 Senior Cinematographers & 1 Drone Pilot",
        "4K 5-Minute Cinematic Highlight Film",
        "60-Minute Documentary Full Event Edit",
        "Handcrafted 12x18 Luxury Leather Photo Album",
        "Raw Footage delivered on custom Wooden USB Drive",
      ],
      active: true,
    },
    {
      id: "pkg_2",
      title: "Signature Fine-Art Photography",
      price: "$3,800",
      category: "Photography",
      badge: "Best Value",
      description:
        "Candid, editorial, and traditional portraiture capturing raw wedding emotions.",
      deliverables: [
        "2 Senior Fine-Art Photographers (8 Hours)",
        "Unlimited High-Resolution Retouched Photos",
        "Private Password-Protected Online Gallery",
        "100 Premium 5x7 Fine-Art Archival Prints",
        "Pre-Wedding Couple Consultation & Moodboard",
      ],
      active: true,
    },
    {
      id: "pkg_3",
      title: "Pre-Wedding Romantic Session",
      price: "$1,800",
      category: "Outdoor Session",
      badge: "Add-On",
      description:
        "Scenic couple portrait shoot at exclusive locations with outfit styling.",
      deliverables: [
        "3-Hour Scenic Outdoor Shoot (Up to 2 Locations)",
        "40 High-End Magazine-Style Retouched Frames",
        "60-Second Instagram/Reel Teaser Video",
        "High-Resolution Digital Download with Print Rights",
      ],
      active: true,
    },
  ]);

  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      title: "Royal Reception at Grand Ballroom",
      category: "Cinema & Photo",
      imageUrl:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      views: 1240,
    },
    {
      id: 2,
      title: "Romantic Pre-Wedding in Sylhet Tea Hills",
      category: "Pre-Wedding",
      imageUrl:
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
      views: 980,
    },
    {
      id: 3,
      title: "Traditional Holud Night Lights & Stage",
      category: "Stage & Candid",
      imageUrl:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      views: 850,
    },
    {
      id: 4,
      title: "Bridal Portraiture & Jewelry Highlights",
      category: "Bridal Close-Up",
      imageUrl:
        "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&w=800&q=80",
      views: 1420,
    },
    {
      id: 5,
      title: "4K Drone Sunset Ceremony Entrance",
      category: "Aerial Drone",
      imageUrl:
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
      views: 1100,
    },
    {
      id: 6,
      title: "Candlelit First Dance & Floral Canopy",
      category: "Reception",
      imageUrl:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
      views: 1350,
    },
    {
      id: 7,
      title: "Grand Stage Lighting & Floral Mandap",
      category: "Stage & Decor",
      imageUrl:
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
      views: 920,
    },
    {
      id: 8,
      title: "Editorial Bridal Lehengas & Styling",
      category: "Bridal Fashion",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      views: 1150,
    },
  ]);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: "Sarah & Michael",
      date: "September 12, 2026",
      rating: 5,
      service: "Royal Heritage 4K Cinema",
      comment:
        "David and his cinematography team were exceptional! They captured every emotional moment of our Nikah and Walima with incredible grace. The 4K drone footage is out of this world.",
      reply:
        "Thank you Sarah & Michael! It was an absolute honor capturing your stunning wedding celebration!",
    },
    {
      id: 2,
      author: "Fatima & Omar",
      date: "August 28, 2026",
      rating: 5,
      service: "Signature Fine-Art Photography",
      comment:
        "The wedding teaser video was ready in just 4 days and brought tears of joy to our families. Their team was punctual, polite, and made all our guests feel comfortable.",
      reply: null,
    },
    {
      id: 3,
      author: "Anika & Dr. Rezwan",
      date: "August 10, 2026",
      rating: 5,
      service: "Full Wedding Day Cinema + Drone",
      comment:
        "Unbelievable attention to detail. The custom leather album arrived in a luxury wooden box and is our family's favorite keepsake. Worth every penny.",
      reply: null,
    },
  ]);

  // Status handler
  const handleStatusChange = (id, newStatus) => {
    setInquiries(
      inquiries.map((inq) =>
        inq.id === id ? { ...inq, status: newStatus } : inq
      )
    );
    toast.success(`Inquiry marked as "${newStatus}"`);
  };

  // Send quote handler
  const handleSendQuote = (e) => {
    e.preventDefault();
    if (!activeInquiryForQuote) return;
    setInquiries(
      inquiries.map((inq) =>
        inq.id === activeInquiryForQuote.id
          ? {
              ...inq,
              status: "Quote Sent",
              budget: customQuotePrice ? `$${customQuotePrice}` : inq.budget,
            }
          : inq
      )
    );
    toast.success(
      `Official quote sent to ${activeInquiryForQuote.couple} for ${
        customQuotePrice ? `$${customQuotePrice}` : activeInquiryForQuote.budget
      }!`
    );
    setQuoteModalOpen(false);
    setActiveInquiryForQuote(null);
    setCustomQuotePrice("");
    setCustomQuoteNote("");
  };

  // Add package handler
  const handleAddPackage = (e) => {
    e.preventDefault();
    if (!newPackage.title || !newPackage.price) {
      toast.error("Please provide a title and price for the package.");
      return;
    }
    const created = {
      id: `pkg_${Date.now()}`,
      title: newPackage.title,
      price: newPackage.price.startsWith("$")
        ? newPackage.price
        : `$${newPackage.price}`,
      category: "Custom Package",
      badge: newPackage.tag || "Standard",
      description:
        newPackage.description || "Custom tailored wedding package.",
      deliverables: newPackage.deliverables
        ? newPackage.deliverables
            .split("\n")
            .filter((line) => line.trim().length > 0)
        : ["Full Day Coverage", "Edited Master Album"],
      active: true,
    };
    setPackages([created, ...packages]);
    toast.success(
      `Package "${created.title}" published to your public profile!`
    );
    setNewPackageModalOpen(false);
    setNewPackage({
      title: "",
      price: "",
      description: "",
      deliverables: "",
      tag: "Standard",
    });
  };

  // Upload media handler
  const handleUploadMedia = (e) => {
    e.preventDefault();
    if (!newMedia.title) {
      toast.error("Please enter a title for the media.");
      return;
    }
    const item = {
      id: Date.now(),
      title: newMedia.title,
      category: newMedia.category,
      imageUrl:
        newMedia.imageUrl ||
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      views: 1,
    };
    setPortfolioItems([item, ...portfolioItems]);
    toast.success("New showcase photo added to your public portfolio!");
    setUploadMediaModalOpen(false);
    setNewMedia({
      title: "",
      category: "Photography",
      imageUrl: "",
    });
  };

  // Reply review handler
  const handleReplyReview = (id, replyText) => {
    if (!replyText.trim()) return;
    setReviews(
      reviews.map((r) => (r.id === id ? { ...r, reply: replyText } : r))
    );
    toast.success("Public reply posted to couple review!");
  };

  // Filtered inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.couple.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.service.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      selectedStatusFilter === "All" || inq.status === selectedStatusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleLogout = () => {
    toast.success("Logged out from vendor portal");
    navigate("/");
  };

  const navMenuItems = [
    { id: "overview", label: "Overview & Analytics", icon: "📊" },
    {
      id: "inquiries",
      label: "Client Inquiries",
      icon: "💬",
      badge: inquiries.filter((i) => i.status === "New Inquiry").length,
    },
    { id: "calendar", label: "Booked Weddings", icon: "📅" },
    { id: "packages", label: "Packages & Pricing", icon: "💼" },
    { id: "portfolio", label: "Portfolio Showcase", icon: "🖼️" },
    { id: "reviews", label: "Reviews & Ratings", icon: "⭐" },
    { id: "settings", label: "Business Settings", icon: "⚙️" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F4] font-manrope flex flex-col text-[#1D1D1F] antialiased">
      {/* Top Navbar: Full Width */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EFE5E7] shadow-xs">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Portal Identity */}
            <div className="flex items-center gap-4">
              <Link to="/" className="w-36 md:w-44 shrink-0">
                <img src={Logo} alt="VowSync" className="h-10 object-contain" />
              </Link>
              <div className="hidden sm:flex items-center gap-2 bg-[#FFF0F3] px-3.5 py-1.5 rounded-full border border-[#FAD7E0]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-[#1D1D1F]">
                  Vendor Pro Workspace
                </span>
              </div>
            </div>

            {/* Quick Actions & Status */}
            <div className="flex items-center gap-3 sm:gap-6">
              {/* Accepting bookings toggle */}
              <div className="hidden md:flex items-center gap-2.5 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-xs font-semibold shadow-2xs">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isAcceptingBookings ? "bg-emerald-500" : "bg-red-500"
                  }`}
                ></span>
                <span className="text-gray-700">
                  {isAcceptingBookings
                    ? "Accepting 2026/2027 Bookings"
                    : "Calendar Paused"}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setIsAcceptingBookings(!isAcceptingBookings);
                    toast(
                      !isAcceptingBookings
                        ? "🟢 Calendar opened for new inquiries!"
                        : "⏸️ Calendar paused."
                    );
                  }}
                  className="text-xs text-[#CF9585] underline font-bold ml-1 cursor-pointer hover:opacity-80"
                >
                  {isAcceptingBookings ? "Pause" : "Resume"}
                </button>
              </div>

              <Link
                to="/browse-vendors"
                className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-[#CF9585] bg-[#FFF0F3] hover:bg-[#FAD7E0] px-4 py-2 rounded-xl transition-all shadow-2xs"
              >
                <span>🌐</span> Public Directory &rarr;
              </Link>

              {/* Vendor Profile Pill */}
              <div className="flex items-center gap-3 pl-3 sm:pl-4 border-l border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1D1D1F] to-[#43393E] text-white font-bold flex items-center justify-center text-sm shadow-md ring-2 ring-[#EBC9D4]">
                  📸
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-xs font-bold text-[#1D1D1F]">
                    {vendorProfile.name || "Luxe Memories Studio"}
                  </p>
                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Verified Partner
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all cursor-pointer"
                  title="Log out"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Full-Width Dashboard Container */}
      <div className="flex-1 w-full px-4 sm:px-6 lg:px-10 xl:px-12 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar: Sticky & Sleek */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="sticky top-28 bg-white rounded-3xl p-5 border border-[#EFE5E7] shadow-sm space-y-2">
            <div className="px-3 py-3 mb-2 border-b border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                  Studio Portal
                </span>
                <p className="text-xs font-bold text-[#1D1D1F] mt-0.5">
                  {vendorProfile.category || "Photography & Cinema"}
                </p>
              </div>
              <span className="text-xl">✨</span>
            </div>

            {navMenuItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-[#1D1D1F] to-[#2E272B] text-white shadow-md shadow-black/10 scale-[1.02]"
                    : "text-gray-600 hover:bg-[#FFF0F3] hover:text-[#1D1D1F]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.badge > 0 && (
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      activeTab === item.id
                        ? "bg-[#CF9585] text-white"
                        : "bg-[#CF9585] text-white"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            {/* Partner Guarantee & Concierge Card */}
            <div className="pt-4 mt-4 border-t border-gray-100 px-1">
              <div className="bg-gradient-to-br from-[#FFF5F7] to-[#FFF0F3] p-4 rounded-2xl border border-[#FAD7E0] space-y-2">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 bg-white rounded-xl text-xs shadow-2xs">
                    🛡️
                  </span>
                  <p className="text-xs font-bold text-[#1D1D1F]">
                    Priority Partner Support
                  </p>
                </div>
                <p className="text-[11px] text-[#6A7283] leading-relaxed">
                  Need custom invoice terms, contract approval, or promotion boosts?
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#CF9585] hover:underline pt-1"
                >
                  Contact Concierge &rarr;
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Body: Full-Width Flexible Layout */}
        <main className="flex-1 min-w-0 space-y-8">
          {/* ======================================================== */}
          {/* TAB 1: OVERVIEW & ANALYTICS */}
          {/* ======================================================== */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Ultra-Luxury Studio Banner */}
              <div
                className="relative text-white p-7 sm:p-10 rounded-3xl shadow-xl overflow-hidden bg-cover bg-center border border-white/10"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(29, 29, 31, 0.95) 0%, rgba(45, 33, 40, 0.90) 50%, rgba(29, 29, 31, 0.97) 100%), url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80')`,
                }}
              >
                <div className="relative z-10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
                  <div className="space-y-2.5 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3.5 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-[#EBC9D4] border border-white/10">
                        ✨ {vendorProfile.category || "Photography & 4K Cinema"}
                      </span>
                      <span className="px-3 py-1 bg-emerald-500/25 backdrop-blur-md text-emerald-300 text-xs font-bold rounded-full border border-emerald-500/40 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        ★ 5.0 Verified Super Vendor
                      </span>
                      <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/30">
                        Top Partner in {vendorProfile.city || "Dhaka"}
                      </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair tracking-tight leading-tight">
                      {vendorProfile.name || "Luxe Memories Photography Studio"}
                    </h1>

                    <p className="text-xs sm:text-sm text-gray-300 flex flex-wrap items-center gap-3 font-manrope">
                      <span className="flex items-center gap-1">
                        📍 {vendorProfile.city || "Dhaka"}, Bangladesh
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        ⭐ 98 Verified Couple Reviews
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        ⚡ 18 Min Avg. Response Time
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
                    <button
                      type="button"
                      onClick={() => setNewPackageModalOpen(true)}
                      className="px-5 py-3 bg-white hover:bg-gray-100 text-[#1D1D1F] text-xs font-bold rounded-2xl transition-all cursor-pointer shadow-md flex items-center gap-2"
                    >
                      <span>💼</span> + Create Package
                    </button>
                    <button
                      type="button"
                      onClick={() => setUploadMediaModalOpen(true)}
                      className="px-5 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold rounded-2xl transition-all cursor-pointer shadow-md flex items-center gap-2"
                    >
                      <span>🖼️</span> + Upload Media
                    </button>
                  </div>
                </div>

                {/* Ambient glow in corner */}
                <div className="absolute right-0 top-0 w-80 h-80 bg-[#CF9585]/15 rounded-full blur-3xl pointer-events-none" />
              </div>

              {/* 4 Wide Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {/* Total Leads */}
                <div className="bg-white p-6 rounded-3xl border border-[#EFE5E7] shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Total Inquiries
                      </span>
                      <span className="p-2.5 rounded-2xl bg-purple-50 text-purple-600 text-lg shadow-2xs">
                        💬
                      </span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] mt-3">
                      28 Leads
                    </div>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      ↑ 4 new this week
                    </span>
                    <span className="text-gray-400 font-medium">14% growth</span>
                  </div>
                </div>

                {/* Confirmed Bookings */}
                <div className="bg-white p-6 rounded-3xl border border-[#EFE5E7] shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                        Confirmed Bookings
                      </span>
                      <span className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 text-lg shadow-2xs">
                        💍
                      </span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mt-3">
                      12 Weddings
                    </div>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-gray-600 font-semibold">
                      Season 2026/2027
                    </span>
                    <span className="text-emerald-600 font-bold">
                      85% Capacity
                    </span>
                  </div>
                </div>

                {/* Projected Revenue */}
                <div className="bg-white p-6 rounded-3xl border border-[#EFE5E7] shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
                        Contract Value
                      </span>
                      <span className="p-2.5 rounded-2xl bg-rose-50 text-[#CF9585] text-lg shadow-2xs">
                        💰
                      </span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-[#CF9585] mt-3">
                      $68,500
                    </div>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-gray-600 font-semibold">
                      $58,225 collected
                    </span>
                    <span className="text-emerald-600 font-bold">85% Paid</span>
                  </div>
                </div>

                {/* Profile Views */}
                <div className="bg-white p-6 rounded-3xl border border-[#EFE5E7] shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        Profile Views
                      </span>
                      <span className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 text-lg shadow-2xs">
                        👀
                      </span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600 mt-3">
                      3,420
                    </div>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-blue-600 font-bold">Top 5% category</span>
                    <span className="text-gray-400">+380 this month</span>
                  </div>
                </div>
              </div>

              {/* Revenue Pipeline & Quality Score Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Pipeline Progression */}
                <div className="xl:col-span-2 bg-white p-7 sm:p-8 rounded-3xl border border-[#EFE5E7] shadow-xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold font-playfair text-[#1D1D1F]">
                        Monthly Wedding Schedule & Revenue (2026 - 2027)
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Confirmed event production values breakdown
                      </p>
                    </div>
                    <span className="px-3.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full w-max">
                      ● Active Production Queue
                    </span>
                  </div>

                  <div className="space-y-5 pt-2">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-gray-700 font-bold">
                          October 2026 (Peak Season)
                        </span>
                        <span className="font-bold text-[#1D1D1F]">
                          $18,500 • 3 Weddings
                        </span>
                      </div>
                      <div className="w-full h-3.5 bg-gray-100 rounded-full overflow-hidden p-0.5">
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-gray-700 font-bold">
                          November 2026 (Winter Weddings)
                        </span>
                        <span className="font-bold text-[#1D1D1F]">
                          $22,000 • 4 Weddings
                        </span>
                      </div>
                      <div className="w-full h-3.5 bg-gray-100 rounded-full overflow-hidden p-0.5">
                        <div
                          className="h-full bg-[#CF9585] rounded-full transition-all duration-500"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-gray-700 font-bold">
                          December 2026
                        </span>
                        <span className="font-bold text-[#1D1D1F]">
                          $16,000 • 3 Weddings
                        </span>
                      </div>
                      <div className="w-full h-3.5 bg-gray-100 rounded-full overflow-hidden p-0.5">
                        <div
                          className="h-full bg-blue-500 rounded-full transition-all duration-500"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-gray-700 font-bold">
                          January - February 2027
                        </span>
                        <span className="font-bold text-[#1D1D1F]">
                          $12,000 • 2 Weddings
                        </span>
                      </div>
                      <div className="w-full h-3.5 bg-gray-100 rounded-full overflow-hidden p-0.5">
                        <div
                          className="h-full bg-amber-500 rounded-full transition-all duration-500"
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partner Quality Score */}
                <div className="bg-white p-7 sm:p-8 rounded-3xl border border-[#EFE5E7] shadow-xs space-y-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-playfair text-[#1D1D1F]">
                      Partner Performance
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      VowSync Verified Quality Standard
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs p-3 bg-gray-50 rounded-2xl">
                      <span className="text-gray-600 font-medium">
                        Average Response Time
                      </span>
                      <span className="font-bold text-emerald-600">
                        ⚡ 18 Minutes
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs p-3 bg-gray-50 rounded-2xl">
                      <span className="text-gray-600 font-medium">
                        Quote Acceptance Rate
                      </span>
                      <span className="font-bold text-[#1D1D1F]">78.5%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs p-3 bg-gray-50 rounded-2xl">
                      <span className="text-gray-600 font-medium">
                        5-Star Review Ratio
                      </span>
                      <span className="font-bold text-amber-500">★ 98.2%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs p-3 bg-gray-50 rounded-2xl">
                      <span className="text-gray-600 font-medium">
                        On-Time Master Delivery
                      </span>
                      <span className="font-bold text-emerald-600">
                        100% (No delays)
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-[#FFF9F5] to-[#FFF0F3] border border-[#E6C8A5] rounded-2xl">
                    <p className="text-xs font-bold text-[#1D1D1F]">
                      🏆 Tier 1 Partner Search Placement
                    </p>
                    <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                      Your profile receives top-spot placement in bride/groom search queries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Full-Width Recent Inquiries Table */}
              <div className="bg-white rounded-3xl border border-[#EFE5E7] shadow-xs overflow-hidden">
                <div className="p-6 sm:p-7 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold font-playfair text-[#1D1D1F]">
                      Incoming Client Booking Requests
                    </h2>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Respond quickly to secure new dates with engaged couples
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab("inquiries")}
                    className="text-xs font-bold text-[#CF9585] hover:underline cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>View All Inquiries ({inquiries.length})</span>
                    <span>&rarr;</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-700">
                    <thead className="bg-[#FAF5F6] text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-100">
                      <tr>
                        <th className="px-7 py-4">Couple Name</th>
                        <th className="px-7 py-4">Wedding Date</th>
                        <th className="px-7 py-4">Venue & City</th>
                        <th className="px-7 py-4">Package Requested</th>
                        <th className="px-7 py-4">Budget</th>
                        <th className="px-7 py-4">Status</th>
                        <th className="px-7 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-manrope">
                      {inquiries.slice(0, 4).map((inq) => (
                        <tr
                          key={inq.id}
                          className="hover:bg-[#FFFBFB] transition-all"
                        >
                          <td className="px-7 py-4">
                            <div className="font-bold text-[#1D1D1F]">
                              {inq.couple}
                            </div>
                            <span className="text-xs text-gray-400">
                              Received {inq.receivedAt}
                            </span>
                          </td>
                          <td className="px-7 py-4 font-semibold text-[#1D1D1F]">
                            {inq.date}
                          </td>
                          <td className="px-7 py-4 text-xs text-gray-600 max-w-xs truncate">
                            {inq.location}
                          </td>
                          <td className="px-7 py-4 text-xs font-medium text-gray-800">
                            {inq.service}
                          </td>
                          <td className="px-7 py-4 font-bold text-[#1D1D1F]">
                            {inq.budget}
                          </td>
                          <td className="px-7 py-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold inline-block ${
                                inq.status === "Confirmed"
                                  ? "bg-green-100 text-green-700"
                                  : inq.status === "Quote Sent"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-amber-100 text-amber-700"
                              }`}
                            >
                              {inq.status}
                            </span>
                          </td>
                          <td className="px-7 py-4 text-right space-x-2">
                            <button
                              type="button"
                              onClick={() => {
                                setActiveInquiryForBrief(inq);
                                setBriefModalOpen(true);
                              }}
                              className="px-3.5 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-xl transition-all cursor-pointer"
                            >
                              Brief
                            </button>
                            {inq.status !== "Confirmed" && (
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveInquiryForQuote(inq);
                                  setCustomQuotePrice(
                                    inq.budget.replace(/[^0-9]/g, "")
                                  );
                                  setQuoteModalOpen(true);
                                }}
                                className="px-3.5 py-1.5 bg-[#EBC9D4] hover:bg-[#e0b2c0] text-[#1D1D1F] text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs"
                              >
                                Send Quote 💍
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 2: CLIENT INQUIRIES & LEADS (FULL WIDTH) */}
          {/* ======================================================== */}
          {activeTab === "inquiries" && (
            <div className="space-y-6">
              {/* Header & Filter Controls */}
              <div className="bg-white p-7 rounded-3xl border border-[#EFE5E7] shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold font-playfair text-[#1D1D1F]">
                    Client Leads & Booking Inquiries
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Filter, search, and manage incoming quote requests
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                  {/* Search Bar */}
                  <div className="relative flex-1 sm:w-72">
                    <input
                      type="text"
                      placeholder="Search couple, venue or service..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-manrope outline-none focus:border-[#CF9585]"
                    />
                    <span className="absolute left-3 top-3 text-gray-400 text-xs">
                      🔍
                    </span>
                  </div>

                  {/* Status filter buttons */}
                  <div className="flex gap-1.5 p-1 bg-gray-100 rounded-xl">
                    {["All", "New Inquiry", "Quote Sent", "Confirmed"].map(
                      (status) => (
                        <button
                          key={status}
                          type="button"
                          onClick={() => setSelectedStatusFilter(status)}
                          className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                            selectedStatusFilter === status
                              ? "bg-white text-[#1D1D1F] shadow-xs"
                              : "text-gray-500 hover:text-[#1D1D1F]"
                          }`}
                        >
                          {status}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Inquiries Table */}
              <div className="bg-white rounded-3xl border border-[#EFE5E7] shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-700">
                    <thead className="bg-[#FAF5F6] text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-100">
                      <tr>
                        <th className="px-7 py-4">Couple Name</th>
                        <th className="px-7 py-4">Target Date</th>
                        <th className="px-7 py-4">Location / Venue</th>
                        <th className="px-7 py-4">Requested Service</th>
                        <th className="px-7 py-4">Budget</th>
                        <th className="px-7 py-4">Status</th>
                        <th className="px-7 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-manrope">
                      {filteredInquiries.length === 0 ? (
                        <tr>
                          <td
                            colSpan="7"
                            className="px-7 py-16 text-center text-gray-500 text-sm"
                          >
                            No inquiries match your filter. Try adjusting search criteria.
                          </td>
                        </tr>
                      ) : (
                        filteredInquiries.map((inq) => (
                          <tr
                            key={inq.id}
                            className="hover:bg-[#FFFBFB] transition-all"
                          >
                            <td className="px-7 py-4">
                              <div className="font-bold text-[#1D1D1F]">
                                {inq.couple}
                              </div>
                              <span className="text-xs text-gray-400">
                                {inq.phone}
                              </span>
                            </td>
                            <td className="px-7 py-4 font-semibold text-[#1D1D1F]">
                              {inq.date}
                            </td>
                            <td className="px-7 py-4 text-xs text-gray-600 max-w-xs">
                              {inq.location}
                            </td>
                            <td className="px-7 py-4 text-xs font-medium text-gray-800">
                              {inq.service}
                            </td>
                            <td className="px-7 py-4 font-bold text-[#1D1D1F]">
                              {inq.budget}
                            </td>
                            <td className="px-7 py-4">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-bold ${
                                  inq.status === "Confirmed"
                                    ? "bg-green-100 text-green-700"
                                    : inq.status === "Quote Sent"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-amber-100 text-amber-700"
                                }`}
                              >
                                {inq.status}
                              </span>
                            </td>
                            <td className="px-7 py-4 text-right space-x-2">
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveInquiryForBrief(inq);
                                  setBriefModalOpen(true);
                                }}
                                className="px-3.5 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-xl transition-all cursor-pointer"
                              >
                                Dossier
                              </button>

                              {inq.status !== "Confirmed" && (
                                <button
                                  type="button"
                                  onClick={() => {
                                    setActiveInquiryForQuote(inq);
                                    setCustomQuotePrice(
                                      inq.budget.replace(/[^0-9]/g, "")
                                    );
                                    setQuoteModalOpen(true);
                                  }}
                                  className="px-3.5 py-1.5 bg-[#1D1D1F] hover:bg-black text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs"
                                >
                                  Send Quote
                                </button>
                              )}

                              {inq.status !== "Confirmed" && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleStatusChange(inq.id, "Confirmed")
                                  }
                                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                                >
                                  Confirm
                                </button>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 3: BOOKED WEDDINGS CALENDAR (FULL WIDTH GRID) */}
          {/* ======================================================== */}
          {activeTab === "calendar" && (
            <div className="space-y-6">
              <div className="bg-white p-7 rounded-3xl border border-[#EFE5E7] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold font-playfair text-[#1D1D1F]">
                    Confirmed Wedding Calendar (2026/2027)
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    12 confirmed celebrations with crew assignments & deliverables schedule
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    toast.success("Synced with Google & Apple Calendar!")
                  }
                  className="px-5 py-2.5 bg-[#FFF0F3] text-[#CF9585] border border-[#FAD7E0] text-xs font-bold rounded-xl hover:bg-[#ffe1e8] transition-all cursor-pointer shadow-2xs"
                >
                  📅 Sync with External Calendars
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {inquiries
                  .filter((i) => i.status === "Confirmed")
                  .map((wedding) => (
                    <div
                      key={wedding.id}
                      className="bg-white p-7 rounded-3xl border border-[#EFE5E7] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">
                            ✓ Confirmed Booking
                          </span>
                          <div className="text-right">
                            <span className="text-xs font-bold text-gray-400 block">
                              Event Date
                            </span>
                            <p className="text-sm font-bold text-[#CF9585]">
                              {wedding.date}
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold font-manrope text-[#1D1D1F]">
                            {wedding.couple}
                          </h3>
                          <p className="text-xs text-gray-500 mt-0.5">
                            📍 {wedding.location}
                          </p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-2xl space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Service:</span>
                            <span className="font-semibold text-gray-800 text-right">
                              {wedding.service}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Contract Value:</span>
                            <span className="font-bold text-[#1D1D1F]">
                              {wedding.budget}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Guest Count:</span>
                            <span className="font-semibold text-gray-800">
                              {wedding.guestCount}
                            </span>
                          </div>
                        </div>

                        {/* Deliverables Checklist */}
                        <div className="space-y-2 pt-2 border-t border-gray-100">
                          <span className="text-xs font-bold text-gray-600">
                            Milestone Deliverables:
                          </span>
                          <div className="space-y-1.5 text-xs text-gray-600">
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-500 font-bold">✓</span>
                              <span>Pre-event shot list finalized</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-500 font-bold">✓</span>
                              <span>Crew & Drone Pilot reserved</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-amber-500 font-bold">⏳</span>
                              <span>Day-of shooting & raw 4K cloud backup</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setActiveInquiryForBrief(wedding);
                          setBriefModalOpen(true);
                        }}
                        className="w-full py-3 bg-[#FAF5F6] hover:bg-[#f3e6e8] text-[#1D1D1F] text-xs font-bold rounded-xl transition-all cursor-pointer shadow-2xs mt-3"
                      >
                        View Call Sheet & Contact
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 4: PACKAGES & PRICING (WIDE 3-4 COLUMNS) */}
          {/* ======================================================== */}
          {activeTab === "packages" && (
            <div className="space-y-6">
              <div className="bg-white p-7 rounded-3xl border border-[#EFE5E7] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold font-playfair text-[#1D1D1F]">
                    Service Packages & Published Pricing
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Couples can browse and directly book these packages from your public profile
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setNewPackageModalOpen(true)}
                  className="px-5 py-2.5 bg-[#1D1D1F] hover:bg-black text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md flex items-center gap-1.5"
                >
                  <span>💼</span> + Add New Package
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="bg-white p-7 rounded-3xl border border-[#EFE5E7] shadow-xs flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="px-3 py-1 bg-[#FFF0F3] text-[#CF9585] text-xs font-bold rounded-full">
                          {pkg.badge}
                        </span>
                        <span className="text-xs font-semibold text-emerald-600">
                          ● Published Live
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-manrope text-[#1D1D1F] leading-snug">
                        {pkg.title}
                      </h3>
                      <div className="text-3xl font-bold text-[#CF9585] my-3">
                        {pkg.price}
                      </div>
                      <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                        {pkg.description}
                      </p>

                      <div className="space-y-2.5 pt-4 border-t border-gray-100">
                        <span className="text-xs font-bold text-gray-700">
                          Deliverables Included:
                        </span>
                        <ul className="space-y-2 text-xs text-gray-600">
                          {pkg.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#CF9585] font-bold text-sm">
                                ✓
                              </span>
                              <span className="leading-tight">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-gray-100 flex gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          toast.success(`Package "${pkg.title}" updated!`)
                        }
                        className="w-full py-2.5 bg-gray-50 hover:bg-gray-100 text-xs font-bold text-gray-800 rounded-xl transition-all cursor-pointer"
                      >
                        Edit Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 5: PORTFOLIO SHOWCASE (WIDE 4 COLUMNS) */}
          {/* ======================================================== */}
          {activeTab === "portfolio" && (
            <div className="space-y-6">
              <div className="bg-white p-7 rounded-3xl border border-[#EFE5E7] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold font-playfair text-[#1D1D1F]">
                    Portfolio & Visual Showcase ({portfolioItems.length} Photos)
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    High-resolution photos and cinema stills displayed on your verified public profile
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setUploadMediaModalOpen(true)}
                  className="px-5 py-2.5 bg-[#EBC9D4] hover:bg-[#e0b2c0] text-[#1D1D1F] text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md flex items-center gap-1.5"
                >
                  <span>📸</span> + Upload Media
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {portfolioItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl border border-[#EFE5E7] shadow-xs overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="h-60 relative overflow-hidden bg-gray-100">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white shadow-xs">
                        {item.category}
                      </div>
                    </div>
                    <div className="p-4 flex justify-between items-center bg-white">
                      <div>
                        <h4 className="font-bold text-xs text-[#1D1D1F] truncate max-w-[170px]">
                          {item.title}
                        </h4>
                        <span className="text-[11px] text-gray-400">
                          👀 {item.views} views
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          toast.success("Media item removed from portfolio")
                        }
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 6: REVIEWS & REPUTATION */}
          {/* ======================================================== */}
          {activeTab === "reviews" && (
            <div className="space-y-6">
              <div className="bg-white p-7 sm:p-8 rounded-3xl border border-[#EFE5E7] shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h2 className="text-2xl font-bold font-playfair text-[#1D1D1F]">
                    Client Reviews & Verified Reputation
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    98 verified couple reviews • 100% positive recommendation rate
                  </p>
                </div>
                <div className="flex items-center gap-2 text-3xl text-amber-500 bg-[#FFF9F5] px-5 py-3 rounded-2xl border border-[#E6C8A5]">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="text-xl font-bold text-[#1D1D1F] ml-2">
                    4.9 / 5.0
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="bg-white p-7 rounded-3xl border border-[#EFE5E7] shadow-xs space-y-4 hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-base text-[#1D1D1F]">
                          {rev.author}
                        </h3>
                        <p className="text-xs text-gray-400">
                          Booked: {rev.service} • {rev.date}
                        </p>
                      </div>
                      <div className="flex text-amber-500 text-sm">
                        {"★".repeat(rev.rating)}
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 italic bg-gray-50 p-4 rounded-2xl border border-gray-100 leading-relaxed">
                      "{rev.comment}"
                    </p>

                    {rev.reply ? (
                      <div className="bg-[#FFF9F5] p-4 rounded-2xl border border-[#E6C8A5] ml-4 text-xs">
                        <span className="font-bold text-[#1D1D1F]">
                          Luxe Memories Studio (Your Public Reply):
                        </span>
                        <p className="text-gray-600 mt-1">{rev.reply}</p>
                      </div>
                    ) : (
                      <div className="pt-2">
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            const val = e.target.elements.replyText.value;
                            handleReplyReview(rev.id, val);
                            e.target.reset();
                          }}
                          className="flex gap-2"
                        >
                          <input
                            name="replyText"
                            type="text"
                            placeholder="Write a public thank you reply..."
                            className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#CF9585]"
                          />
                          <button
                            type="submit"
                            className="px-5 py-2.5 bg-[#1D1D1F] text-white text-xs font-bold rounded-xl hover:bg-black transition-all cursor-pointer shadow-xs"
                          >
                            Reply
                          </button>
                        </form>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 7: BUSINESS SETTINGS */}
          {/* ======================================================== */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div className="bg-white p-7 sm:p-9 rounded-3xl border border-[#EFE5E7] shadow-xs space-y-6">
                <div>
                  <h2 className="text-2xl font-bold font-playfair text-[#1D1D1F]">
                    Business Profile & Payout Settings
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Update business address, contact details, and bank account for automated couple advances
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-manrope">
                  <div className="space-y-1.5">
                    <label className="font-bold text-gray-700">Studio / Business Name</label>
                    <input
                      defaultValue="Luxe Memories Photography Studio"
                      className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#CF9585]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-gray-700">Primary Category</label>
                    <select className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#CF9585]">
                      <option>Photography & Cinema Studio</option>
                      <option>Reception Venue & Banquets</option>
                      <option>Floral & Stage Decor</option>
                      <option>Catering & Dining</option>
                      <option>Bridal Wear & Couture</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-gray-700">Business Phone / WhatsApp</label>
                    <input
                      defaultValue="+880 1812-987654"
                      className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#CF9585]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-gray-700">Studio Location / City</label>
                    <input
                      defaultValue="Gulshan-2, Dhaka, Bangladesh"
                      className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#CF9585]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-gray-700">Bank Account / Routing Number</label>
                    <input
                      defaultValue="Standard Chartered Bank • Account ending in 8892"
                      className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#CF9585]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-gray-700">bKash Merchant / Direct Wallet</label>
                    <input
                      defaultValue="01711-223344 (Merchant)"
                      className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#CF9585]"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      toast.success("Business settings saved successfully!")
                    }
                    className="px-7 py-3.5 bg-[#1D1D1F] hover:bg-black text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ======================================================== */}
      {/* MODAL 1: SEND CUSTOM QUOTE */}
      {/* ======================================================== */}
      {quoteModalOpen && activeInquiryForQuote && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex justify-between items-start pb-3 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
                  Quote Proposal
                </span>
                <h3 className="text-xl font-bold font-playfair text-[#1D1D1F] mt-0.5">
                  Send Quote to {activeInquiryForQuote.couple}
                </h3>
                <p className="text-xs text-gray-500">
                  Target Date: {activeInquiryForQuote.date} ({activeInquiryForQuote.location})
                </p>
              </div>
              <button
                type="button"
                onClick={() => setQuoteModalOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-700 text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={handleSendQuote}
              className="space-y-4 text-xs font-manrope"
            >
              <div className="space-y-1.5">
                <label className="font-bold text-gray-700">
                  Requested Package / Service
                </label>
                <input
                  disabled
                  value={activeInquiryForQuote.service}
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded-xl text-gray-700"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-gray-700">
                  Custom Quoted Total Price ($ USD)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 6200"
                  value={customQuotePrice}
                  onChange={(e) => setCustomQuotePrice(e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl font-bold text-sm outline-none focus:border-[#CF9585]"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-gray-700">
                  Personalized Note & Deliverables Included
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g. We are thrilled to cover your wedding! This quote includes 2 senior cinematographers, drone pilot, raw 4K footage on wooden drive, and an edited teaser in 7 days."
                  value={customQuoteNote}
                  onChange={(e) => setCustomQuoteNote(e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#CF9585]"
                />
              </div>

              <div className="p-3.5 bg-[#FFF0F3] rounded-2xl text-[11px] text-[#CF9585]">
                💡 The couple will receive an instant notification in their Customer Dashboard and via email with itemized pricing.
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setQuoteModalOpen(false)}
                  className="w-1/2 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-3 bg-[#1D1D1F] hover:bg-black text-white font-bold rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  Send Official Quote 💌
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 2: INQUIRY CLIENT BRIEF & NOTES */}
      {/* ======================================================== */}
      {briefModalOpen && activeInquiryForBrief && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex justify-between items-start pb-3 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
                  Client Dossier
                </span>
                <h3 className="text-xl font-bold font-playfair text-[#1D1D1F] mt-0.5">
                  {activeInquiryForBrief.couple}
                </h3>
                <span className="text-xs text-gray-400">
                  Received {activeInquiryForBrief.receivedAt}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setBriefModalOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-700 text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3.5 text-xs font-manrope">
              <div className="grid grid-cols-2 gap-3 p-3.5 bg-gray-50 rounded-2xl">
                <div>
                  <span className="text-gray-400 block">Target Date</span>
                  <span className="font-bold text-[#1D1D1F]">
                    {activeInquiryForBrief.date}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block">Estimated Budget</span>
                  <span className="font-bold text-[#CF9585]">
                    {activeInquiryForBrief.budget}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block">Guest Count</span>
                  <span className="font-bold text-[#1D1D1F]">
                    {activeInquiryForBrief.guestCount}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block">Status</span>
                  <span className="font-bold text-emerald-600">
                    {activeInquiryForBrief.status}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-gray-700">Venue / Location:</span>
                <p className="text-gray-800 bg-gray-50 p-3 rounded-xl">
                  {activeInquiryForBrief.location}
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-gray-700">
                  Couple's Custom Requirements:
                </span>
                <p className="text-gray-800 bg-[#FFF9F5] border border-[#E6C8A5] p-3.5 rounded-xl italic">
                  "{activeInquiryForBrief.notes}"
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-gray-700">Contact Details:</span>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
                  <span>📞 {activeInquiryForBrief.phone}</span>
                  <span>✉️ {activeInquiryForBrief.email}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setBriefModalOpen(false)}
                className="w-full py-3 bg-[#1D1D1F] text-white font-bold rounded-xl transition-all cursor-pointer shadow-xs"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 3: ADD NEW SERVICE PACKAGE */}
      {/* ======================================================== */}
      {newPackageModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex justify-between items-start pb-3 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
                  Package Builder
                </span>
                <h3 className="text-xl font-bold font-playfair text-[#1D1D1F] mt-0.5">
                  Create New Service Package
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setNewPackageModalOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-700 text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={handleAddPackage}
              className="space-y-4 text-xs font-manrope"
            >
              <div className="space-y-1.5">
                <label className="font-bold text-gray-700">Package Title</label>
                <input
                  placeholder="e.g. Platinum 4K Drone & Cinema Package"
                  value={newPackage.title}
                  onChange={(e) =>
                    setNewPackage({ ...newPackage, title: e.target.value })
                  }
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#CF9585]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="font-bold text-gray-700">Package Price ($)</label>
                  <input
                    placeholder="e.g. 5500"
                    value={newPackage.price}
                    onChange={(e) =>
                      setNewPackage({ ...newPackage, price: e.target.value })
                    }
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#CF9585]"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold text-gray-700">Highlight Badge</label>
                  <input
                    placeholder="e.g. Best Value / Premium"
                    value={newPackage.tag}
                    onChange={(e) =>
                      setNewPackage({ ...newPackage, tag: e.target.value })
                    }
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#CF9585]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-gray-700">Short Summary</label>
                <input
                  placeholder="e.g. Complete cinematic coverage for modern ballroom weddings."
                  value={newPackage.description}
                  onChange={(e) =>
                    setNewPackage({
                      ...newPackage,
                      description: e.target.value,
                    })
                  }
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#CF9585]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-gray-700">
                  Deliverables (1 item per line)
                </label>
                <textarea
                  rows="3"
                  placeholder="2 Senior Cinematographers&#10;4K Teaser Reel&#10;100-page Leather Photobook"
                  value={newPackage.deliverables}
                  onChange={(e) =>
                    setNewPackage({
                      ...newPackage,
                      deliverables: e.target.value,
                    })
                  }
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#CF9585]"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setNewPackageModalOpen(false)}
                  className="w-1/2 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-3 bg-[#1D1D1F] hover:bg-black text-white font-bold rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  Publish Package 💼
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 4: UPLOAD PORTFOLIO MEDIA */}
      {/* ======================================================== */}
      {uploadMediaModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex justify-between items-start pb-3 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
                  Media Showcase
                </span>
                <h3 className="text-xl font-bold font-playfair text-[#1D1D1F] mt-0.5">
                  Upload Portfolio Photo
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setUploadMediaModalOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-700 text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={handleUploadMedia}
              className="space-y-4 text-xs font-manrope"
            >
              <div className="space-y-1.5">
                <label className="font-bold text-gray-700">Photo / Reel Title</label>
                <input
                  placeholder="e.g. Sunset Ceremony Entrance at Radisson"
                  value={newMedia.title}
                  onChange={(e) =>
                    setNewMedia({ ...newMedia, title: e.target.value })
                  }
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#CF9585]"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-gray-700">Category Tag</label>
                <select
                  value={newMedia.category}
                  onChange={(e) =>
                    setNewMedia({ ...newMedia, category: e.target.value })
                  }
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#CF9585]"
                >
                  <option>Photography</option>
                  <option>Cinema & Film</option>
                  <option>Pre-Wedding</option>
                  <option>Aerial Drone</option>
                  <option>Stage & Decor</option>
                  <option>Bridal Fashion</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-gray-700">
                  Image Web URL (or leave blank for high-res stock sample)
                </label>
                <input
                  placeholder="https://images.unsplash.com/..."
                  value={newMedia.imageUrl}
                  onChange={(e) =>
                    setNewMedia({ ...newMedia, imageUrl: e.target.value })
                  }
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#CF9585]"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setUploadMediaModalOpen(false)}
                  className="w-1/2 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-3 bg-[#EBC9D4] hover:bg-[#e0b2c0] text-[#1D1D1F] font-bold rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  Add to Showcase 🖼️
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
