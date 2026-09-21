import { createSlice } from "@reduxjs/toolkit";

const getCategoryDefaultImage = (cat) => {
  const c = (cat || "").toLowerCase();
  if (c.includes("photo") || c.includes("cinema")) {
    return "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80";
  }
  if (c.includes("venue") || c.includes("resort") || c.includes("banquet")) {
    return "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80";
  }
  if (c.includes("floral") || c.includes("decor") || c.includes("stage")) {
    return "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80";
  }
  if (c.includes("cater") || c.includes("food") || c.includes("cuisine")) {
    return "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80";
  }
  if (c.includes("makeup") || c.includes("hair") || c.includes("beauty")) {
    return "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80";
  }
  if (c.includes("wear") || c.includes("attire") || c.includes("couture") || c.includes("dress")) {
    return "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80";
  }
  if (c.includes("music") || c.includes("dj") || c.includes("entertainment")) {
    return "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80";
  }
  if (c.includes("plan") || c.includes("coordination")) {
    return "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80";
  }
  return "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80";
};

const initialDefaultVendors = [
  {
    id: "v_1",
    name: "Grand Imperial Hall & Gardens",
    category: "Venues & Banquets",
    priceTier: "$$$",
    priceRange: "Starting from $15,000",
    rating: 4.9,
    reviewsCount: 142,
    city: "Dhaka",
    address: "Gulshan Avenue, Dhaka",
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

const loadInitialVendors = () => {
  try {
    const saved = localStorage.getItem("vowsync_registered_vendors");
    if (saved) {
      const customVendors = JSON.parse(saved);
      if (Array.isArray(customVendors) && customVendors.length > 0) {
        return [...customVendors, ...initialDefaultVendors];
      }
    }
  } catch (e) {
    console.error("Failed to load registered vendors from localStorage", e);
  }
  return initialDefaultVendors;
};

const vendorsSlice = createSlice({
  name: "vendors",
  initialState: {
    list: loadInitialVendors(),
  },
  reducers: {
    addRegisteredVendor: (state, action) => {
      const newVendor = action.payload;
      // Check if already exists by id or business name
      const exists = state.list.some(
        (v) => v.id === newVendor.id || v.name === newVendor.name
      );
      if (!exists) {
        state.list.unshift(newVendor);
      }
      try {
        const customVendors = state.list.filter((v) => v.isNewlyRegistered);
        localStorage.setItem(
          "vowsync_registered_vendors",
          JSON.stringify(customVendors)
        );
      } catch (e) {
        console.error("Failed to save registered vendor to localStorage", e);
      }
    },
  },
});

export const { addRegisteredVendor } = vendorsSlice.actions;
export { getCategoryDefaultImage };
export default vendorsSlice.reducer;
