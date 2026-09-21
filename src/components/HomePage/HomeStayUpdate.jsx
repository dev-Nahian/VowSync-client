import React, { useState } from "react";
import CommonButton from "../common/CommonButton";
import Container from "../common/Container";
import People from "@/assets/Images/nrPeoples.png";
import toast from "react-hot-toast";

const StayGetFeatures = [
  {
    id: 0,
    headText: "Exclusive Discounts",
    sybHeadText: "Get up to 20% off with certified partner vendors",
  },
  {
    id: 1,
    headText: "Wedding Tips & Guides",
    sybHeadText: "Expert timeline advice and seasonal inspiration",
  },
  {
    id: 2,
    headText: "Trend Updates",
    sybHeadText: "Latest bridal fashion, decor themes, and floral palettes",
  },
];

export default function HomeStayUpdate() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("🎉 Thank you for subscribing! Check your inbox for exclusive wedding promo codes.");
    setEmail("");
  };

  return (
    <section className="py-20 md:py-28 nr--custom--bg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* STAY LEFT */}
          <div className="flex flex-col gap-6">
            {/* STAY HEADING */}
            <div className="flex items-center gap-6">
              <div className="p-4 sm:p-5 bg-[#FFF9F5] rounded-3xl w-max shadow-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="44"
                  viewBox="0 0 36 44"
                  fill="none"
                >
                  <path
                    d="M33.5752 23.7009C33.5752 33.5761 26.6626 38.5137 18.4464 41.3775C18.0162 41.5233 17.5489 41.5163 17.1232 41.3578C8.88725 38.5137 1.97461 33.5761 1.97461 23.7009V9.87565C1.97461 9.35184 2.18269 8.84948 2.55309 8.47909C2.92348 8.1087 3.42584 7.90061 3.94965 7.90061C7.89973 7.90061 12.8373 5.53057 16.2739 2.52851C16.6923 2.17102 17.2246 1.97461 17.7749 1.97461C18.3253 1.97461 18.8575 2.17102 19.276 2.52851C22.7323 5.55032 27.6501 7.90061 31.6002 7.90061C32.124 7.90061 32.6264 8.1087 32.9968 8.47909C33.3672 8.84948 33.5752 9.35184 33.5752 9.87565V23.7009Z"
                    stroke="#C7A8B3"
                    strokeWidth="3.95008"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-[#1D1D1F] font-salsa font-semibold text-3xl sm:text-4xl">
                  Stay Updated
                </h3>
                <p className="text-[#101828] font-manrope text-base sm:text-lg mt-1 font-semibold">
                  Join 25,000+ happy couples
                </p>
              </div>
            </div>

            {/* STAY CONTENT */}
            <div className="max-w-xl flex flex-col gap-2">
              <h3 className="text-[#101828] font-manrope text-xl sm:text-2xl font-bold">
                Get Wedding Planning Tips & Exclusive Vendor Discounts
              </h3>
              <p className="text-[#6A7283] font-manrope text-sm sm:text-base leading-relaxed">
                Sign up for our weekly bridal newsletter and receive curated discounts, planning checklists, and insider guides.
              </p>
            </div>

            {/* STAY MAIL */}
            <div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <div className="py-3 px-5 bg-white rounded-2xl border border-gray-200 flex-1 shadow-xs">
                  <input
                    className="w-full h-full outline-none text-sm font-manrope"
                    placeholder="Enter your email address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="py-3.5 px-6 rounded-2xl bg-[#1D1D1F] text-white font-bold text-sm hover:bg-black transition-all cursor-pointer font-salsa shadow-sm"
                >
                  Subscribe 💌
                </button>
              </form>

              <div className="mt-4">
                <p className="text-[#6A7283] font-manrope text-xs">
                  🔒 Zero spam. Unsubscribe anytime with 1 click.
                </p>
              </div>
            </div>
          </div>

          {/* STAY RIGHT */}
          <div className="space-y-6">
            <div className="max-w-xl">
              <h3 className="text-[#101828] font-manrope text-xl sm:text-2xl font-bold">
                What you'll receive:
              </h3>
              <p className="text-[#6A7283] font-manrope text-sm mt-1">
                Curated by senior luxury event planners and industry experts.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {StayGetFeatures.map((featureItem) => (
                <div key={featureItem.id} className="flex gap-4 items-center bg-white/70 backdrop-blur-xs p-4 rounded-2xl border border-white/60">
                  <div className="p-3 bg-white rounded-xl shadow-xs shrink-0">
                    <span className="text-xl">✨</span>
                  </div>
                  <div>
                    <h4 className="text-[#101828] font-manrope text-base font-bold">
                      {featureItem.headText}
                    </h4>
                    <p className="text-[#6A7283] font-manrope text-xs mt-0.5">
                      {featureItem.sybHeadText}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="max-w-[140px] h-12">
                <img className="w-full h-full object-contain" src={People} alt="Couples" />
              </div>
              <p className="text-[#6A7283] font-manrope text-sm font-semibold">
                Trusted by 25,000+ couples worldwide
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
