import React from "react";
import Container from "../common/Container";
import HowItWorkImageOne from "@/assets/Images/how-it-works-one.png";
import AiIconSVG from "../SVG/AiIconSVG";
import SearchIconSVG from "../SVG/SearchIconSVG";
import HeartIconSVG from "../SVG/HeartIconSVG";
import CalanderIconSVG from "../SVG/CalanderIconSVG";
import CheckMarkIconSVG from "../SVG/CheckMarkIconSVG";
import NavbarVectorOne from "@/assets/Images/vectors/navbar-vectoe-1.png";
import HowItWorksIconTwo from "@/assets/Images/vectors/howItWorkIconTwo.png";

const steps = [
  {
    icon: <AiIconSVG />,
    title: "Start Planning with AI",
    description:
      "Your intelligent wedding assistant is here to help you choose themes, manage budgets, create checklists, and guide you every step of the way.",
  },
  {
    icon: <SearchIconSVG />,
    title: "Browse Vendors",
    description:
      "Find top-rated wedding vendors for catering, entertainment, flowers, photography, and more all in one place.",
  },
  {
    icon: <HeartIconSVG />,
    title: "Select Your Favorites",
    description:
      "Choose vendors that match your vision. Compare services, read reviews, and shortlist your top picks for each category.",
  },
  {
    icon: <CalanderIconSVG />,
    title: "Book & Manage",
    description:
      "Book services and manage your wedding plan all in one place. Coordinate with vendors and track your progress seamlessly.",
  },
  {
    icon: <CheckMarkIconSVG />,
    title: "Celebrate Your Day",
    description:
      "Enjoy your perfect wedding day knowing everything is organized and your chosen vendors will deliver exceptional service.",
  },
];

export default function HomeHowItWorks() {
  return (
    <section className="py-[100px] bg-white relative">
      <Container>
        <div className="w-full flex items-center justify-between gap-10">
          <h3 className="text-[#1D1D1F] text-4xl font-salsa">How It Works</h3>
        </div>

        <div className="w-full grid grid-cols-2 gap-16 mt-12">
          <div className="w-full h-full flex flex-col gap-6">
            <div className="w-full flex items-center gap-6">
              <div className="w-7/12 h-full">
                <img
                  src={HowItWorkImageOne}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="w-5/12 h-full">
                <img
                  src={HowItWorkImageOne}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="w-full flex items-center gap-6">
              <div className="w-5/12 h-full">
                <img
                  src={HowItWorkImageOne}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="w-7/12 h-full">
                <img
                  src={HowItWorkImageOne}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="relative flex flex-col gap-10">
              {steps?.map((step, index) => (
                <div key={index} className={`relative flex items-start`}>
                  {/* Icon Circle */}
                  <div className="absolute left-4 flex items-center justify-center w-14 h-14 bg-[#C7A8BF] rounded-2xl shadow-lg z-10">
                    <div className="size-7">{step?.icon}</div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-24 mr-8 max-w-lg`}>
                    <h3 className="text-[#101828] mb-3 text-2xl font-semibold font-manrope">
                      {step.title}
                    </h3>
                    <p className="text-[#4F586D] text-base font-manrope leading-6">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <img src={NavbarVectorOne} alt="" className="absolute right-10 -top-10" />

      <img
        src={HowItWorksIconTwo}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2"
      />
    </section>
  );
}
