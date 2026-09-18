import Container from "@/components/common/Container";
import React from "react";
import CommonButton from "@/components/common/CommonButton";
import { ConfettiSideCannons } from "@/components/common/ConfettiSideCannons";
import { useSelector } from "react-redux";
import WelcomeRingImg from "@/assets/Images/Auth/welcome-ring.png";

export default function AuthWelcome() {
  const { himFirstName, herFirstName } = useSelector((state) => state.authRegistration);

  const coupleNames =
    himFirstName && herFirstName
      ? `${himFirstName} & ${herFirstName}!`
      : himFirstName
      ? `${himFirstName} & Partner!`
      : "Ismail & Nadia!";

  return (
    <section className="w-full bg-[#fff9F9] py-16 md:py-24 min-h-[calc(100vh-80px)] flex items-center">
      <Container>
        <div className="w-full max-w-[760px] mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 rounded-full bg-[#FFF0F3] flex items-center justify-center p-3 shadow-md">
              <img src={WelcomeRingImg} alt="Wedding Rings" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-[#CF9585] text-lg md:text-xl font-bold uppercase tracking-wider font-manrope mb-2">
              Welcome to Wedelogy
            </h4>

            <h1 className="text-[#1D1D1F] text-4xl md:text-6xl font-bold font-playfair mb-6 leading-tight">
              {coupleNames}
            </h1>

            <p className="text-[#5B6477] text-xl md:text-2xl font-manrope max-w-lg mx-auto">
              Let's make your wedding planning joyful, seamless, and completely stress-free!
            </p>
          </div>

          <div className="w-full max-w-[360px] mx-auto my-6">
            <ConfettiSideCannons />
          </div>

          <div className="w-full flex items-center gap-6 mt-8 max-w-md mx-auto">
            <CommonButton
              link="/auth/about-info"
              className="w-1/2 bg-white border border-[#EBC9D4] text-[#1D1D1F] justify-center"
            >
              Back
            </CommonButton>

            <CommonButton
              link="/auth/weeding-day"
              className="w-1/2 justify-center"
            >
              Let’s Begin
            </CommonButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
