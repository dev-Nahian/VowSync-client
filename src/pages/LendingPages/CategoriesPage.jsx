import React from "react";
import Container from "@/components/common/Container";
import { Link } from "react-router-dom";
import CommonButton from "@/components/common/CommonButton";

export default function CategoriesPage() {
  const categories = [
    {
      title: "Venues & Banquets",
      count: "380+ Verified Venues",
      icon: "🏛️",
      description: "Grand ballrooms, luxury resort lawns, beachfront pavilions, and intimate heritage rooftops.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Photography & Cinema",
      count: "520+ Top Photographers",
      icon: "📸",
      description: "Fine-art storytelling, drone cinematography, candid wedding moments, and traditional portraits.",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Catering & Banquets",
      count: "290+ Gourmet Caterers",
      icon: "🍽️",
      description: "Authentic royal biryani, global multi-cuisine buffets, live chaat counters, and custom desserts.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Floral & Stage Decoration",
      count: "410+ Decor Designers",
      icon: "💐",
      description: "Bespoke stage styling, fresh floral arches, mood lighting, and fairytale Mandap/Holud decors.",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Bridal Makeup & Hair",
      count: "340+ Expert Stylists",
      icon: "💄",
      description: "HD airbrush bridal glam, traditional signature looks, hair draping, and pre-wedding skincare.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Bridal Wear & Groom Attire",
      count: "210+ Couture Designers",
      icon: "👗",
      description: "Handcrafted bridal lehengas, silk sarees, designer sherwanis, and bespoke bridal accessories.",
      image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "DJ & Live Entertainment",
      count: "180+ Bands & Artists",
      icon: "🎵",
      description: "Live acoustic ceremony strings, energetic wedding DJs, dhol players, and customized light shows.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Wedding Planners & Coordinators",
      count: "160+ Certified Planners",
      icon: "📋",
      description: "Full-service wedding planning, day-of coordination, budget oversight, and guest concierge.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Wedding Cakes & Confectionery",
      count: "140+ Artisanal Bakers",
      icon: "🎂",
      description: "Multi-tiered designer wedding cakes, dessert tables, gourmet macaron favors, and artisan pastries.",
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="bg-[#FFF9F9] min-h-screen py-12 md:py-20 font-manrope">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FCECEE] text-[#CF9585] text-xs font-bold uppercase tracking-wider">
            Curated Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-[#1D1D1F]">
            Explore Wedding Categories
          </h1>
          <p className="text-sm md:text-base text-[#5B6477]">
            Find every expert and artisan you need for your wedding celebration, thoroughly verified and categorized for you.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to="/browse-vendors"
              className="group bg-white rounded-3xl border border-[#EFE5E7] shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                <div className="h-48 w-full relative overflow-hidden bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[#1D1D1F] text-xs font-bold shadow-xs">
                    {cat.count}
                  </div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-md">
                    {cat.icon}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold font-playfair text-[#1D1D1F] group-hover:text-[#CF9585] transition-all">
                    {cat.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#5B6477] leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 mt-2 flex items-center justify-between text-xs font-bold text-[#CF9585]">
                <span>Browse Category Vendors</span>
                <span className="group-hover:translate-x-1 transition-all">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action Card */}
        <div className="mt-16 bg-[#1D1D1F] text-white p-8 md:p-12 rounded-3xl text-center space-y-6 max-w-4xl mx-auto shadow-xl">
          <h2 className="text-2xl md:text-4xl font-bold font-playfair">
            Are You a Wedding Professional?
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto">
            List your studio, showcase your portfolio, and receive direct inquiries from couples planning their weddings right now.
          </p>
          <CommonButton link="/auth/vendor/register">
            Join as a Vendor Partner 🏪
          </CommonButton>
        </div>
      </Container>
    </div>
  );
}
