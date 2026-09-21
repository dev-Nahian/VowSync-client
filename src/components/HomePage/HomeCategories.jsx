import React from "react";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import CategoriesIconOneSVG from "../SVG/CategoriesIcons/CategoriesIconOneSVG";
import CategoriesVector from "@/assets/Images/vectors/categories-vector.png";

const categoriesList = [
  {
    name: "RECEPTION VENUES",
    icon: "🏛️",
  },
  {
    name: "WEDDING PHOTOGRAPHERS",
    icon: "📸",
  },
  {
    name: "WEDDING CAKES",
    icon: "🎂",
  },
  {
    name: "BEAUTY & MAKEUP",
    icon: "💄",
  },
  {
    name: "BRIDAL COUTURE",
    icon: "👗",
  },
  {
    name: "FLORAL & DECOR",
    icon: "💐",
  },
];

export default function HomeCategories() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <Container>
        <div className="w-full flex items-center justify-between gap-10">
          <h3 className="text-[#1D1D1F] text-3xl md:text-4xl font-salsa">
            Popular Wedding Categories
          </h3>

          <Link
            to="/categories"
            className="text-[#CF9585] text-lg md:text-2xl font-salsa underline hover:opacity-80 transition-all"
          >
            View all
          </Link>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-12">
          {categoriesList.map((item, index) => (
            <Link
              to="/browse-vendors"
              key={index}
              className="w-full flex flex-col items-center gap-3 text-center border border-[#EBC9D4] p-6 rounded-3xl hover:border-[#CF9585] hover:scale-105 duration-300 cursor-pointer bg-[#FFF9F9] hover:bg-white shadow-xs"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-xs">
                {item.icon}
              </div>
              <p className="text-[#1D1D1F] text-xs sm:text-sm font-salsa uppercase leading-snug">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </Container>

      <img
        src={CategoriesVector}
        alt=""
        className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none hidden lg:block"
      />
    </section>
  );
}
