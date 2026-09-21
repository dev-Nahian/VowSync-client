import React from "react";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import FeatureElement from "@/assets/Images/nrFeatureElementImage.png";

const servicesData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
    serviceTitle: "Gourmet Catering & Dining",
    serviceSubTitle:
      "Delectable multi-course banquets, live cooking stations, and mocktail lounges customized for your guest palate.",
    category: "Catering",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
    serviceTitle: "Floral & Stage Artistry",
    serviceSubTitle:
      "Exquisite floral arrangements, fairy-light canopies, and grand bridal stage setups designed for fairy-tale moments.",
    category: "Stage & Floral",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80",
    serviceTitle: "4K Cinematic Photography",
    serviceSubTitle:
      "Award-winning fine-art photography, aerial drone cinematography, and same-day teaser edits for lasting memories.",
    category: "Photography & Film",
  },
];

export default function HomeFeaturedService() {
  return (
    <section className="py-20 md:py-28 relative font-manrope">
      <Container>
        <div>
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
                Tailored Experiences
              </span>
              <h2 className="text-[#101828] font-salsa text-3xl sm:text-4xl mt-1">
                Featured Wedding Services
              </h2>
            </div>
            <Link
              to="/categories"
              className="text-[#CF9585] font-manrope text-lg sm:text-2xl font-semibold underline hover:opacity-80 transition-all cursor-pointer"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-3xl border border-[#E6C8A5] bg-[#FFF9F5] transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 rounded-2xl overflow-hidden bg-gray-100 shadow-xs relative">
                    <img
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      src={service.src}
                      alt={service.serviceTitle}
                    />
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white font-manrope">
                      {service.category}
                    </div>
                  </div>

                  <div className="mt-5 space-y-2.5">
                    <h3 className="text-[#071431] font-manrope text-xl font-bold leading-snug">
                      {service.serviceTitle}
                    </h3>
                    <p className="text-[#4F586D] font-manrope text-sm leading-relaxed">
                      {service.serviceSubTitle}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    to="/browse-vendors"
                    className="py-3.5 bg-[#EBC9D4] hover:bg-[#e0b2c0] w-full rounded-2xl text-base text-[#1D1D1F] font-salsa flex items-center justify-center gap-2.5 transition-all shadow-xs cursor-pointer"
                  >
                    <span>Explore Now</span>
                    <span className="text-xl">💍</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="absolute right-7 top-1/2 -translate-y-1/2 w-48 h-[480px] pointer-events-none hidden xl:block opacity-60">
        <img
          className="w-full h-full object-contain"
          src={FeatureElement}
          alt=""
        />
      </div>
    </section>
  );
}
