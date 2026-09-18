import React from "react";
import IntroImageOne from "@/assets/Images/Auth/intro-one.png";
import IntroImageTwo from "@/assets/Images/Auth/intro-two.png";
import CommonButton from "@/components/common/CommonButton";
import ExclematoryIconSVG from "@/components/SVG/ExclematoryIconSVG";
import Container from "@/components/common/Container";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "@/Redux/Slices/authRegistrationSlice";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentRole = useSelector((state) => state.authRegistration?.role);

  const handleSelectRole = (role) => {
    dispatch(setRole(role));
    navigate("/auth/about-info");
  };

  return (
    <section className="w-full bg-[#fff9F9] py-16 md:py-24 min-h-[calc(100vh-80px)] flex items-center">
      <Container>
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end pr-0 lg:pr-10">
            <div className="w-full max-w-[520px] relative">
              <img
                src={IntroImageOne}
                alt="Happy couple"
                className="w-full rounded-3xl shadow-xl object-cover"
              />
              <img
                src={IntroImageTwo}
                alt="Wedding moment"
                className="w-36 md:w-48 absolute -bottom-6 -right-4 md:-bottom-10 md:-right-8 rounded-2xl shadow-lg border-4 border-white object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center">
            <div className="w-full max-w-[580px] text-center lg:text-left mx-auto lg:mx-0">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#FCECEE] text-[#CF9585] text-sm font-semibold tracking-wide uppercase mb-4">
                ✨ Start Your Journey
              </span>

              <h1 className="text-[#121117] text-4xl md:text-5xl font-semibold font-playfair leading-[120%]">
                Create Your <br className="hidden sm:inline" /> Wedding Account
              </h1>

              <h4 className="text-[#5B6477] text-lg md:text-xl font-manrope mt-4">
                Start planning your perfect day together with curated tools & vendors
              </h4>

              <div className="w-full sm:w-4/5 my-8 mx-auto lg:mx-0 flex flex-col gap-4">
                <CommonButton
                  onClick={() => handleSelectRole("Bride")}
                  className={`w-full justify-center ${currentRole === "Bride" ? "ring-2 ring-[#CF9585]" : ""}`}
                >
                  I am the Bride 👰‍♀️
                </CommonButton>

                <CommonButton
                  onClick={() => handleSelectRole("Groom")}
                  className={`w-full justify-center ${currentRole === "Groom" ? "ring-2 ring-[#CF9585]" : ""}`}
                  varient="dark"
                >
                  I am the Groom 🤵‍♂️
                </CommonButton>
              </div>

              <div className="w-full sm:w-4/5 mx-auto lg:mx-0 flex items-center gap-3 p-4 bg-[#DDEEE8] rounded-xl text-[#1D1D1F] text-sm md:text-base font-manrope">
                <div className="size-5 shrink-0 text-[#2B7A78]">
                  <ExclematoryIconSVG />
                </div>
                <span>You can easily invite your partner to collaborate after sign-up.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
