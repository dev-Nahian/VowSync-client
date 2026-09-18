import React from "react";
import Container from "../common/Container";
import CommonSectionHeading from "../common/CommonSectionHeading";
import WhyChooseVector from "@/assets/Images/vectors/whychoose-vector.png";
import WhyChooseBg from "@/assets/Images/whyChooseBg.png";
import { NumberTicker } from "@/components/ui/number-ticker";

const whyChooseData = [
  {
    value: "500+",
    label: "Verified Vendors",
  },
  {
    value: "10,000+",
    label: "Happy Couples",
  },
  {
    value: "4.9%",
    label: "Average Rating",
  },
  {
    value: "50+",
    label: "Cities Covered",
  },
];

export default function HomeWhyChoose() {
  return (
    <section
      className="py-[100px] bg-white relativ bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${WhyChooseBg})` }}
    >
      <Container>
        <CommonSectionHeading
          title="Why Choose Our Platform?"
          description="Find top-rated wedding vendors for catering, entertainment, flowers, photography, and more all in one place."
          className={"text-center"}
        />

        <div className="w-full grid grid-cols-4 items-center gap-10 mt-12">
          {whyChooseData?.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center gap-2 text-center"
            >
              <NumberTicker
                value={item?.value}
                className="font-medium tracking-tighter whitespace-pre-wrap text-[#1D1D1F] text-6xl font-salsa"
              />
              <p className="text-[#6A7283] text-lg font-manrope mt-2">
                {item?.label}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <img
        src={WhyChooseVector}
        alt=""
        className="absolute top-1/2 right-0 -translate-y-1/2"
      />
    </section>
  );
}
