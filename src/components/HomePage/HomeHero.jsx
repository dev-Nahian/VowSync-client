import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import HeroBannerBg from "@/assets/Images/hero-banner.png";
import CommonButton from "../common/CommonButton";
import HeroImage from "@/assets/Images/hero-image.png";
import { PixelImage } from "@/components/ui/pixel-image";

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
  return (
    <section
      className="py-8"
      style={{ backgroundImage: `url(${HeroBannerBg})` }}
    >
      <Container>
        <Flex className={"gap-8"}>
          <div className="w-6/12">
            <h1 className="text-[#1D1D1F] text-5xl font-salsa leading-[140%]">
              Plan Your Dream Wedding <br /> With Your Personal AI Planner
            </h1>

            <p className="text-[#6A7283] text-xl font-manrope mt-4 leading-[150%]">
              From venues to decoration ideas just tell the AI what you’re
              dreaming of, and it will guide you instantly.
            </p>

            <div className="my-12">
              <CommonButton>Start Planning with AI </CommonButton>
            </div>

            <div className="w-full flex items-center gap-4">
              <div className="w-full">
                <Select>
                  <SelectTrigger className="w-full bg-white border-[#CF9585] py-5.5 text-[#6A7283] font-manrope">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className={"font-manrope"}>
                    <SelectGroup>
                      <SelectItem value="option-1">Option 1</SelectItem>
                      <SelectItem value="option-2">Option 2</SelectItem>
                      <SelectItem value="option-3">Option 3</SelectItem>
                      <SelectItem value="option-4">Option 4</SelectItem>
                      <SelectItem value="option-5">Option 5</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full">
                <Select>
                  <SelectTrigger className="w-full bg-white border-[#CF9585] py-5.5 text-[#6A7283] font-manrope">
                    <SelectValue placeholder="Select City or State" />
                  </SelectTrigger>
                  <SelectContent className={"font-manrope"}>
                    <SelectGroup>
                      <SelectItem value="option-1">Option 1</SelectItem>
                      <SelectItem value="option-2">Option 2</SelectItem>
                      <SelectItem value="option-3">Option 3</SelectItem>
                      <SelectItem value="option-4">Option 4</SelectItem>
                      <SelectItem value="option-5">Option 5</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="">
                <button
                  onClick={() => toast("Feature not ready")}
                  type="button"
                  className="w-max py-3 px-5 rounded-xl bg-[#C7A8B3] text-white text-base font-salsa hover:opacity-80 transition-all cursor-pointer"
                >
                  Search Vendor
                </button>
              </div>
            </div>
          </div>

          <div className="w-6/12">
            <div className="w-full max-w-full">
              <PixelImage
                src={HeroImage}
                customGrid={{ rows: 4, cols: 6 }}
                grayscaleAnimation
              />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
}
