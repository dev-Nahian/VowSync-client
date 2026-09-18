import React from "react";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import CategoriesIconOneSVG from "../SVG/CategoriesIcons/CategoriesIconOneSVG";
import CategoriesVector from "@/assets/Images/vectors/categories-vector.png";

const categoriesList = [
  {
    name: "RECEPTION VENUES",
    icon: <CategoriesIconOneSVG />,
  },
  {
    name: "WEDDING PHOTOGRAPHERS",
    icon: <CategoriesIconOneSVG />,
  },
  {
    name: "WEDDING CAKES",
    icon: <CategoriesIconOneSVG />,
  },
  {
    name: "BEAUTY PARLOR",
    icon: <CategoriesIconOneSVG />,
  },
  {
    name: "BRIDAL SALONS",
    icon: <CategoriesIconOneSVG />,
  },
  {
    name: "BRIDAL SALONS",
    icon: <CategoriesIconOneSVG />,
  },
];

export default function HomeCategories() {
  return (
    <section className="py-[100px] bg-white relative">
      <Container>
        <div className="w-full flex items-center justify-between gap-10">
          <h3 className="text-[#1D1D1F] text-4xl font-salsa">Categories</h3>

          <Link className="text-[#CF9585] text-2xl font-salsa underline hover:opacity-80 transition-all">
            View all
          </Link>
        </div>

        <div className="w-full grid grid-cols-6 gap-8 mt-20">
          {categoriesList?.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center gap-2 text-center border border-[#CF9585] p-8 rounded-2xl hover:scale-105 duration-300 cursor-pointer"
            >
              <div>
                <div className="w-16">{item?.icon}</div>
              </div>
              <p className="text-[#1D1D1F] mt-2 text-base font-salsa uppercase leading-6">
                {item?.name}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <img
        src={CategoriesVector}
        alt=""
        className="absolute top-1/2 left-0 -translate-y-1/2"
      />
    </section>
  );
}
