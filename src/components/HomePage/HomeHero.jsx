import React, { useState } from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import HeroBannerBg from "@/assets/Images/hero-banner.png";
import CommonButton from "../common/CommonButton";
import HeroImage from "@/assets/Images/hero-image.png";
import { PixelImage } from "@/components/ui/pixel-image";
import { useNavigate } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";

export default function HomeHero() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleSearch = () => {
    navigate("/browse-vendors");
  };

  return (
    <section
      className="py-12 md:py-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${HeroBannerBg})` }}
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          <div className="w-full lg:w-6/12 space-y-6 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFF0F3] text-[#CF9585] text-xs font-bold uppercase tracking-wider border border-[#FAD7E0]">
              ✨ AI-Powered Wedding Planning
            </span>

            <h1 className="text-[#1D1D1F] text-4xl sm:text-5xl lg:text-6xl font-salsa leading-[125%]">
              Plan Your Dream Wedding <br className="hidden sm:inline" /> With Your Personal AI Planner
            </h1>

            <p className="text-[#6A7283] text-lg md:text-xl font-manrope leading-[150%] max-w-xl mx-auto lg:mx-0">
              From majestic venues to exquisite floral decors, tell our intelligent platform what you envision and we will orchestrate your perfect celebration.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <CommonButton link="/auth">
                Start Planning with AI 💍
              </CommonButton>
            </div>

            {/* Vendor Search Bar */}
            <div className="w-full bg-white/90 backdrop-blur-md p-4 rounded-3xl border border-[#EBC9D4] shadow-lg flex flex-col sm:flex-row items-center gap-3">
              <div className="w-full sm:w-1/2">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full bg-white border-gray-200 py-5 text-[#6A7283] text-sm font-manrope rounded-xl">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="font-manrope">
                    <SelectGroup>
                      <SelectItem value="Venues & Banquets">Venues & Banquets</SelectItem>
                      <SelectItem value="Photography & Cinema">Photography & Cinema</SelectItem>
                      <SelectItem value="Catering & Cuisine">Catering & Cuisine</SelectItem>
                      <SelectItem value="Floral & Decor">Floral & Stage Decor</SelectItem>
                      <SelectItem value="Makeup & Hair">Makeup & Hair Styling</SelectItem>
                      <SelectItem value="Bridal Wear & Attire">Bridal Wear & Attire</SelectItem>
                      <SelectItem value="DJ & Entertainment">DJ & Entertainment</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full sm:w-1/2">
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="w-full bg-white border-gray-200 py-5 text-[#6A7283] text-sm font-manrope rounded-xl">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent className="font-manrope">
                    <SelectGroup>
                      <SelectItem value="Dhaka">Dhaka (All Areas)</SelectItem>
                      <SelectItem value="Chittagong">Chittagong</SelectItem>
                      <SelectItem value="Sylhet">Sylhet</SelectItem>
                      <SelectItem value="Cox's Bazar">Cox's Bazar (Resorts)</SelectItem>
                      <SelectItem value="Rajshahi">Rajshahi</SelectItem>
                      <SelectItem value="Khulna">Khulna</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <button
                onClick={handleSearch}
                type="button"
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#1D1D1F] text-white text-sm font-bold font-salsa hover:bg-black transition-all cursor-pointer whitespace-nowrap shadow-sm"
              >
                Search Vendors
              </button>
            </div>
          </div>

          <div className="w-full lg:w-6/12 flex justify-center">
            <div className="w-full max-w-[500px]">
              <PixelImage
                src={HeroImage}
                customGrid={{ rows: 4, cols: 6 }}
                grayscaleAnimation
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
