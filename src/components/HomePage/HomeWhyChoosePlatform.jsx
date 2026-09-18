import React from "react";
import Container from "../common/Container";
import WhyChooseIconSVGOne from "../SVG/WhyChoosePlatform/WhyChooseIconSVGOne";
import WhyChooseFloatItemImage from "@/assets/Images/vectors/whyChooseItemVector.png";
import WhyChooseIconSVGTwo from "../SVG/WhyChoosePlatform/WhyChooseIconSVGTwo";
import WhyChooseIconSVGThree from "../SVG/WhyChoosePlatform/WhyChooseIconSVGThree";
import WhyChooseIconSVGFour from "../SVG/WhyChoosePlatform/WhyChooseIconSVGFour";
import WhyChooseIconSVGSix from "../SVG/WhyChoosePlatform/WhyChooseIconSVGSix";
import WhyChooseIconSVGFIve from "../SVG/WhyChoosePlatform/WhyChooseIconSVGFIve";
import WhyChooseFloatItemImage2 from "@/assets/Images/vectors/choosePlatformVector.png";

const whyChooseData = [
  {
    title: "Curated List of Vendors",
    description:
      "Only the best wedding vendors, vetted for quality and reliability. Every vendor goes through our rigorous screening process.",
    icon: <WhyChooseIconSVGOne />,
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Plan with your partner, family, and friends in real time. Share ideas, get feedback, and make decisions together.",
    icon: <WhyChooseIconSVGTwo />,
  },
  {
    title: "Multi-Vendor Booking",
    description:
      "Book multiple services in one go, hassle-free. Coordinate all your vendors through a single platform.",
    icon: <WhyChooseIconSVGThree />,
  },
  {
    title: "Personalized Recommendations",
    description:
      "Get vendor suggestions based on your style, budget, and preferences. Our AI learns what you love.",
    icon: <WhyChooseIconSVGFour />,
  },
  {
    title: "Flexible Budgeting",
    description:
      "Options for every budget—find vendors that match your financial needs without compromising on quality.",
    icon: <WhyChooseIconSVGFIve />,
  },
  {
    title: "5-Star Support",
    description:
      "Dedicated support team available throughout your wedding planning journey. We’re here when you need us.",
    icon: <WhyChooseIconSVGSix />,
  },
];

export default function HomeWhyChoosePlatform() {
  return (
    <section className="py-[100px] bg-white relative">
      <Container>
        <div className="w-full flex items-center justify-between gap-10">
          <h3 className="text-[#1D1D1F] text-4xl font-salsa">
            Why Choose Our Platform?
          </h3>
        </div>

        <div className="w-full grid grid-cols-3 gap-8 mt-12">
          {whyChooseData?.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center gap-2 text-center bg-[#FFF9F5] p-8 rounded-2xl relative"
            >
              <div className="size-16 rounded-xl mx-auto bg-[#CF9585] flex items-center justify-center mb-5">
                <div className="size-10">{item?.icon}</div>
              </div>

              <h3 className="text-[#1D1D1F] text-2xl font-semibold font-manrope">
                {item?.title}
              </h3>
              <p className="text-[#4F586D] mt-2 text-base font-manrope">
                {item?.description}
              </p>

              <img
                src={WhyChooseFloatItemImage}
                alt=""
                className="absolute -top-5 -right-5"
              />
            </div>
          ))}
        </div>
      </Container>

      <img
        src={WhyChooseFloatItemImage2}
        alt=""
        className="absolute bottom-0 right-0"
      />
    </section>
  );
}
