import React from "react";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import RecentlyViewVextor from "@/assets/Images/vectors/recently-view-vector.png";
import LocationIconSVG from "../SVG/LocationIconSVG";
import { useSelector } from "react-redux";

export default function HomeRecentlyView() {
  const vendorsList = useSelector((state) => state.vendors?.list || []);
  const displayVendors = vendorsList.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-[#FFF9F5] relative">
      <Container>
        <div className="w-full flex items-center justify-between gap-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
              Curated Partners
            </span>
            <h3 className="text-[#1D1D1F] text-3xl md:text-4xl font-salsa mt-1">
              Featured Verified Vendors
            </h3>
          </div>

          <Link
            to="/browse-vendors"
            className="text-[#CF9585] text-lg md:text-2xl font-salsa underline hover:opacity-80 transition-all cursor-pointer"
          >
            View all
          </Link>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayVendors.map((item, index) => (
            <div
              className={`bg-white rounded-3xl shadow-md overflow-hidden p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                item.isNewlyRegistered
                  ? "border-2 border-[#CF9585] ring-2 ring-[#FAD7E0]"
                  : "border border-[#E6C8A5]"
              }`}
              key={item.id || index}
            >
              <div>
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white font-manrope">
                    {item.category}
                  </div>
                  {item.isNewlyRegistered && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-[#CF9585] to-[#EBC9D4] text-[#1D1D1F] px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1 animate-pulse">
                      <span>✨ Newly Joined</span>
                    </div>
                  )}
                </div>

                <div className="mt-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-gray-900 text-xl font-bold font-manrope leading-snug">
                      {item.name}
                    </h3>
                    <span className="text-[#CF9585] font-bold text-base font-manrope">
                      {item.priceTier || item.price || "$$$"}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <span className="text-amber-500 text-sm">★</span>
                      <span className="text-[#1D1D1F] font-bold text-xs font-manrope">
                        {item.rating || 5.0}
                      </span>
                      <span>({item.reviewsCount || item.reviews || 1} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="size-4">
                        <LocationIconSVG />
                      </div>
                      <span className="text-[#6A7283] font-manrope">
                        {item.city || item.location || "Dhaka"}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#4F586D] text-xs leading-relaxed font-manrope line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 my-4">
                    {item.features
                      ? item.features.slice(0, 2).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 rounded-md bg-[#FAF5F6] text-[#CF9585] text-[11px] font-semibold font-manrope"
                          >
                            ✓ {tag}
                          </span>
                        ))
                      : item.tags?.slice(0, 2).map((tag, i) => (
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
