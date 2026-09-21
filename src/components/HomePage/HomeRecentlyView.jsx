import React from "react";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import RecentlyViewVextor from "@/assets/Images/vectors/recently-view-vector.png";
import RecentViewImageOne from "@/assets/Images/recent-view-one.png";
import StarIconSVG from "../SVG/StarIconSVG";
import LocationIconSVG from "../SVG/LocationIconSVG";
import ButtonIconDarkSVG from "../SVG/ButtonIconDarkSVG";

const cateringData = [
  {
    id: 1,
    name: "Bella Vista Grand Ballroom",
    price: "$$$",
    rating: 4.9,
    reviews: 127,
    location: "Gulshan, Dhaka",
    category: "Venue / Ballroom",
    description:
      "Award-winning luxury reception ballroom with crystal chandeliers and stunning garden view.",
    tags: ["Bridal Suite", "Valet Parking", "Capacity: 700"],
    image: RecentViewImageOne,
  },
  {
    id: 2,
    name: "Rustic Elegance Catering Studio",
    price: "$$",
    rating: 4.8,
    reviews: 89,
    location: "Banani, Dhaka",
    category: "Gourmet Catering",
    description:
      "Timeless flavors with elegant plating. Renowned for signature Kacchi and live mocktail bars.",
    tags: ["Halal Certified", "Live Stations", "Organic"],
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Evergreen Cinema & Photography",
    price: "$$$",
    rating: 5.0,
    reviews: 203,
    location: "Dhanmondi, Dhaka",
    category: "Cinema & Photo",
    description: "Fine-art storytelling and 4K aerial cinema crafted by international award-winning visualists.",
    tags: ["4K Cinema", "Drone", "Same-Day Teaser"],
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80",
  },
];

export default function HomeRecentlyView() {
  return (
    <section className="py-16 md:py-24 bg-[#FFF9F5] relative">
      <Container>
        <div className="w-full flex items-center justify-between gap-10">
          <h3 className="text-[#1D1D1F] text-3xl md:text-4xl font-salsa">
            Featured Verified Vendors
          </h3>

          <Link
            to="/browse-vendors"
            className="text-[#CF9585] text-lg md:text-2xl font-salsa underline hover:opacity-80 transition-all"
          >
            View all
          </Link>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {cateringData.map((item, index) => (
            <div
              className="bg-white border border-[#E6C8A5] rounded-3xl shadow-md overflow-hidden p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              key={index}
            >
              <div>
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white font-manrope">
                    {item.category}
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-gray-900 text-xl font-bold font-manrope">
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
                  className="w-1/2 text-sm font-bold font-manrope bg-white border border-[#EBC9D4] text-gray-800 py-2.5 rounded-xl hover:bg-gray-50 transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  View Details
                </Link>

                <Link
                  to="/browse-vendors"
                  className="w-1/2 text-sm font-bold font-manrope bg-[#1D1D1F] text-white py-2.5 rounded-xl hover:bg-black transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  Inquire Quote
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
