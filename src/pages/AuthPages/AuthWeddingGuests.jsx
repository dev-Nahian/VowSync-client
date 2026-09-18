import Container from "@/components/common/Container";
import React, { useState, useEffect } from "react";
import WeddingDayImage from "@/assets/Images/Auth/weeding-day-image.png";
import AuthStepper from "@/shared/Auth/AuthStepper";
import AuthSectionHeading from "@/components/Auth/AuthSectionHeading";
import CommonButton from "@/components/common/CommonButton";
import { useDispatch, useSelector } from "react-redux";
import { updateWeddingGuests } from "@/Redux/Slices/authRegistrationSlice";
import { useNavigate } from "react-router-dom";

export default function AuthWeddingGuests() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const savedGuestRange = useSelector((state) => state.authRegistration.guestRange);

  const [selected, setSelected] = useState(savedGuestRange || "151-200");

  useEffect(() => {
    if (savedGuestRange) setSelected(savedGuestRange);
  }, [savedGuestRange]);

  const guestOptions = [
    { id: "0-50", label: "0 - 50 guests (Intimate)" },
    { id: "51-100", label: "51 - 100 guests (Cozy)" },
    { id: "100-150", label: "100 - 150 guests (Standard)" },
    { id: "151-200", label: "151 - 200 guests (Large)" },
    { id: "201-300", label: "201 - 300 guests (Grand)" },
    { id: "300+", label: "300+ guests (Mega Wedding)" },
    { id: "not-sure", label: "We are not sure yet" },
  ];

  const handleNext = () => {
    dispatch(updateWeddingGuests(selected));
    navigate("/auth/weeding-planning");
  };

  return (
    <section className="w-full bg-[#fff9F9] py-12 md:py-20 min-h-[calc(100vh-80px)] flex items-center">
      <Container>
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="w-full max-w-[420px]">
              <img
                src={WeddingDayImage}
                alt="Wedding Guests Celebration"
                className="w-full rounded-3xl shadow-xl object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <AuthStepper step={4} totalSteps={7} />

            <AuthSectionHeading
              title={"How many guests?"}
              description={
                "This helps us recommend appropriately-sized banquet venues and calculate catering cost estimates."
              }
              className={"my-8"}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {guestOptions.map((option) => (
                <label
                  key={option.id}
                  onClick={() => setSelected(option.id)}
                  className={`flex items-center gap-3.5 px-5 py-4 rounded-2xl cursor-pointer transition-all duration-200 border ${
                    selected === option.id
                      ? "border-[#CF9585] bg-amber-50/70 shadow-xs ring-1 ring-[#CF9585]"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="relative flex items-center justify-center shrink-0">
                    <input
                      type="radio"
                      name="guest-count-choice"
                      value={option.id}
                      checked={selected === option.id}
                      onChange={() => setSelected(option.id)}
                      className="sr-only"
                    />
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        selected === option.id
                          ? "border-[#CF9585] bg-[#CF9585]"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full bg-white transition-transform duration-300 ${
                          selected === option.id ? "scale-100" : "scale-0"
                        }`}
                      />
                    </div>
                  </div>

                  <span
                    className={`font-manrope text-sm md:text-base ${
                      selected === option.id
                        ? "text-[#1D1D1F] font-bold"
                        : "text-gray-700 font-medium"
                    }`}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>

            <div className="w-full bg-[#DDEEE8] text-[#343E56] text-sm md:text-base font-manrope py-4 px-6 mt-6 rounded-xl border border-[#c4e3d9]">
              <span className="font-bold text-[#1D1D1F]">💡 Helpful Tip:</span> About 80% of invited guests typically accept RSVPs, which can help you finalize your exact seating chart.
            </div>

            <div className="w-full flex items-center gap-4 mt-8">
              <CommonButton
                link="/auth/weeding-place"
                className="w-1/2 bg-white border border-[#EBC9D4] text-[#1D1D1F] justify-center"
              >
                Back
              </CommonButton>

              <CommonButton
                onClick={handleNext}
                className="w-1/2 justify-center"
              >
                Next Step
              </CommonButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
