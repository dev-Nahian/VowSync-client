import React from "react";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import RecentlyViewVextor from "@/assets/Images/vectors/recently-view-vector.png";
import RecentViewImageOne from "@/assets/Images/recent-view-one.png";
import StarIconSVG from "../SVG/StarIconSVG";
import LocationIconSVG from "../SVG/LocationIconSVG";
import ButtonIconDarkSVG from "../SVG/ButtonIconDarkSVG";

const vendorData = [
  {
    id: 1,
    name: "Bella Vista Grand Ballroom",
    price: "$$$",
    rating: 4.9,
    reviews: 142,
    location: "Gulshan, Dhaka",
    category: "Reception Venue",
    description:
      "Award-winning luxury ballroom with grand crystal chandeliers, open-air garden terrace, and 800-guest capacity.",
    tags: ["Bridal Suite", "Valet Parking", "Catering Kitchen"],
    image: RecentViewImageOne,
  },
  {
    id: 2,
    name: "Flora & Bloom Event Styling",
    price: "$$",
    rating: 4.8,
    reviews: 98,
    location: "Banani, Dhaka",
    category: "Floral & Stage Decor",
    description:
      "Signature bespoke floral canopies, fairy-light aisles, and thematic photo-op installations.",
    tags: ["Custom Mandaps", "Imported Flowers", "3D Rendering"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Luxe Couture Bridal Studio",
    price: "$$$",
    rating: 5.0,
    reviews: 215,
    location: "Dhanmondi, Dhaka",
    category: "Bridal Fashion & MUA",
    description:
      "Handcrafted bridal lehengas, bespoke sherwanis, and HD bridal makeup trials with senior celebrity artists.",
    tags: ["Custom Tailoring", "Jewelry Pairings", "Bridal Trials"],
    image: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&w=600&q=80",
  },
];

export default function HomeFeaturedWedding() {
  return (
    <section className="py-20 md:py-28 bg-[#FFF9F5] relative font-manrope">
      <Container>
        <div className="w-full flex items-center justify-between gap-10 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
              Top-Rated Partners
            </span>
            <h3 className="text-[#1D1D1F] text-3xl md:text-4xl font-salsa mt-1">
              Featured Wedding Vendors
            </h3>
          </div>

          <Link
            to="/browse-vendors"
            className="text-[#CF9585] text-lg md:text-2xl font-salsa underline hover:opacity-80 transition-all cursor-pointer"
          >
            View all
          </Link>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendorData.map((item) => (
            <div
              className="bg-white border border-[#E6C8A5] rounded-3xl shadow-md overflow-hidden p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              key={item.id}
            >
              <div>
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white font-manrope">
                    {item.category}
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-gray-900 text-xl font-bold font-manrope leading-snug">
                      {item.name}
                    </h3>
                    <span className="text-[#CF9585] font-bold text-base font-manrope">
                      {item.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <span className="text-amber-500 text-sm">★</span>
                      <span className="text-[#1D1D1F] font-bold text-xs font-manrope">
                        {item.rating}
                      </span>
                      <span>({item.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="size-4">
                        <LocationIconSVG />
                      </div>
                      <span className="text-[#6A7283] font-manrope">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#4F586D] text-xs leading-relaxed font-manrope">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 my-4">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md bg-[#FAF5F6] text-[#CF9585] text-[11px] font-semibold font-manrope"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <Link
                  to="/browse-vendors"
                  className="w-1/2 text-sm font-bold font-manrope bg-white border border-[#EBC9D4] text-gray-800 py-3 rounded-xl hover:bg-gray-50 transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  View Details
                </Link>

                <Link
                  to="/browse-vendors"
                  className="w-1/2 text-sm font-bold font-manrope bg-[#EBC9D4] hover:bg-[#e0b2c0] text-[#1D1D1F] py-3 rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  Book Now 💍
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <img
        src={RecentlyViewVextor}
        alt=""
        className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none hidden lg:block"
      />
    </section>
  );
}
