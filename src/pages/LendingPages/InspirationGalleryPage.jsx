import React, { useState } from "react";
import Container from "@/components/common/Container";
import gallery1 from "@/assets/Images/nrIG1.png";
import gallery2 from "@/assets/Images/nrIG2.png";
import gallery3 from "@/assets/Images/nrIG3.png";
import gallery4 from "@/assets/Images/nrIG4.png";
import gallery5 from "@/assets/Images/nrIG5.png";
import gallery6 from "@/assets/Images/nrIG6.png";
import gallery7 from "@/assets/Images/nrIG7.png";
import gallery8 from "@/assets/Images/nrIG8.png";
import gallery9 from "@/assets/Images/nrIG9.png";
import gallery10 from "@/assets/Images/nrIG10.png";
import gallery11 from "@/assets/Images/nrIG11.png";
import gallery12 from "@/assets/Images/nrIG12.png";
import gallery13 from "@/assets/Images/nrIG13.png";
import gallery14 from "@/assets/Images/nrIG14.png";
import gallery15 from "@/assets/Images/nrIG15.png";
import gallery16 from "@/assets/Images/nrIG16.png";

export default function InspirationGalleryPage() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  const tags = [
    "All",
    "Stage & Mandap",
    "Floral Decor",
    "Bridal Couture",
    "Photography Moments",
    "Cakes & Favors",
  ];

  const galleryItems = [
    { id: 1, src: gallery1, title: "Royal Crimson Stage", tag: "Stage & Mandap", vendor: "Blossom & Dream Styling" },
    { id: 2, src: gallery2, title: "Candlelit Garden Aisle", tag: "Floral Decor", vendor: "Royal Blooms Studio" },
    { id: 3, src: gallery3, title: "Candid Sunset Glow", tag: "Photography Moments", vendor: "Eternal Moments Photography" },
    { id: 4, src: gallery4, title: "Zardozi Handcrafted Lehenga", tag: "Bridal Couture", vendor: "Royal Heritage Haute Couture" },
    { id: 5, src: gallery5, title: "Grand Crystal Chandelier Hall", tag: "Stage & Mandap", vendor: "Grand Imperial Ballroom" },
    { id: 6, src: gallery6, title: "Pastel Marigold Holud", tag: "Floral Decor", vendor: "Blossom & Dream Styling" },
    { id: 7, src: gallery7, title: "Emotional Vows Capture", tag: "Photography Moments", vendor: "Luxe Memories" },
    { id: 8, src: gallery8, title: "4-Tiered Gold Leaf Cake", tag: "Cakes & Favors", vendor: "Sweet Elegance Bakery" },
    { id: 9, src: gallery9, title: "Traditional Nikah Table", tag: "Stage & Mandap", vendor: "Grand Imperial Ballroom" },
    { id: 10, src: gallery10, title: "Fairy Light Canopy Dance Floor", tag: "Floral Decor", vendor: "Symphony Strings" },
    { id: 11, src: gallery11, title: "Groom Royal Sherwani", tag: "Bridal Couture", vendor: "Royal Heritage" },
    { id: 12, src: gallery12, title: "Drone Cinema Reception Exit", tag: "Photography Moments", vendor: "Eternal Moments Photography" },
    { id: 13, src: gallery13, title: "Artisan Macaron Dessert Tower", tag: "Cakes & Favors", vendor: "Sweet Elegance Bakery" },
    { id: 14, src: gallery14, title: "Bohemian Terracotta Mandap", tag: "Stage & Mandap", vendor: "Blossom & Dream Styling" },
    { id: 15, src: gallery15, title: "Signature Bridal Jewelry", tag: "Bridal Couture", vendor: "Royal Silk & Gems" },
    { id: 16, src: gallery16, title: "Sparkler Grand Exit", tag: "Photography Moments", vendor: "Luxe Memories" },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (selectedTag === "All") return true;
    return item.tag === selectedTag;
  });

  return (
    <div className="bg-[#FFF9F9] min-h-screen py-12 md:py-20 font-manrope">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FCECEE] text-[#CF9585] text-xs font-bold uppercase tracking-wider">
            Visual Lookbook
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-[#1D1D1F]">
            Wedding Inspiration Gallery
          </h1>
          <p className="text-sm md:text-base text-[#5B6477]">
            Discover real wedding decor, bridal fashion, ceremony setups, and fine-art photography from our certified vendor partners.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-none flex-wrap mb-10">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedTag === tag
                  ? "bg-[#1D1D1F] text-white shadow-xs"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-gray-400"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Gallery Masonry/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="h-64 w-full overflow-hidden relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#EBC9D4] font-bold">
                    {item.tag}
                  </span>
                  <h4 className="font-bold text-sm font-playfair">{item.title}</h4>
                  <p className="text-[11px] text-gray-300">By {item.vendor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl space-y-4 p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-[#CF9585] uppercase tracking-wider">
                  {activeImage.tag}
                </span>
                <h3 className="text-2xl font-bold font-playfair text-[#1D1D1F] mt-0.5">
                  {activeImage.title}
                </h3>
                <p className="text-xs text-gray-500">Curated by {activeImage.vendor}</p>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="text-gray-400 hover:text-black text-2xl p-1"
              >
                ✕
              </button>
            </div>

            <div className="max-h-[60vh] overflow-hidden rounded-2xl">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full h-full object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
