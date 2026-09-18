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
    name: "Bella Vista Catering",
    price: "$$",
    rating: 4.9,
    reviews: 127,
    location: "Metro Area",
    description:
      "Award-winning catering with farm-to-table ingredients and stunning presentation.",
    tags: ["Organic", "Vegan Options"],
    image: RecentViewImageOne,
  },
  {
    id: 2,
    name: "Rustic Elegance Catering",
    price: "$$$",
    rating: 4.8,
    reviews: 89,
    location: "Downtown & Suburbs",
    description:
      "Timeless flavors with elegant plating. Perfect for barn and ballroom weddings.",
    tags: ["Gluten-Free", "Locally Sourced"],
    image: RecentViewImageOne,
  },
  {
    id: 3,
    name: "Evergreen Gourmet",
    price: "$$",
    rating: 5.0,
    reviews: 203,
    location: "Greater Metro",
    description: "Sustainable, seasonal menus crafted by award-winning chefs.",
    tags: ["Sustainable", "Custom Menus", "Vegetarian"],
    image: RecentViewImageOne,
  },
];

export default function HomeFeaturedWedding() {
  return (
    <section className="py-[100px] bg-[#FFF9F5] relative">
      <Container>
        <div className="w-full flex items-center justify-between gap-10">
          <h3 className="text-[#1D1D1F] text-4xl font-salsa">
            Featured Wedding Vendors
          </h3>

          <Link className="text-[#CF9585] text-2xl font-salsa underline hover:opacity-80 transition-all">
            View all
          </Link>
        </div>

        <div className="w-full grid grid-cols-3 gap-8 mt-12">
          {cateringData?.map((item, index) => (
            <div
              className="bg-white border border-[#E6C8A5] rounded-3xl shadow-lg overflow-hidden p-6"
              key={index}
            >
              <div className="relative">
                <img
                  src={item?.image}
                  alt={item?.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/50 bg-opacity-90 px-4 py-2 rounded text-xs font-medium text-white font-manrope">
                  Photography
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-gray-900 text-2xl font-semibold font-manrope">
                    {item.name}
                  </h3>
                  <span className="text-gray-900/50 text-lg font-manrope">
                    {item.price}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <div className="size-5">
                      <StarIconSVG />
                    </div>
                    <span className="text-[#6A7283] text-base font-manrope">
                      {item.rating}
                    </span>
                    <span>({item.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="size-5">
                      <LocationIconSVG />
                    </div>
                    <span className="text-[#6A7283] text-base font-manrope">
                      {item?.location}
                    </span>
                  </div>
                </div>

                <p className="text-[#4F586D] text-base font-manrope">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-5 my-6">
                  {item?.tags?.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[#798090] text-xs font-manrope"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 2 && (
                    <span className="text-[#798090] text-xs font-manrope">
                      +{item.tags.length - 2} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to={"#"}
                    className="w-1/2 text-lg font-salsa bg-white border border-[#EBC9D4] text-gray-800 py-3 rounded-2xl hover:bg-gray-50 transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    View Details
                    <div className="size-7">
                      <ButtonIconDarkSVG />
                    </div>
                  </Link>

                  <Link
                    to={"#"}
                    className="w-1/2 text-lg font-salsa bg-[#EBC9D4] text-gray-800 py-3 rounded-2xl hover:bg-[#f0beb0] duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Book Now
                    <div className="size-7">
                      <ButtonIconDarkSVG />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <img
        src={RecentlyViewVextor}
        alt=""
        className="absolute top-1/2 right-0 -translate-y-1/2"
      />
    </section>
  );
}
