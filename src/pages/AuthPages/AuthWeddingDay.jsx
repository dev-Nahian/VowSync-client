import Container from "@/components/common/Container";
import React, { useState, useEffect } from "react";
import WeddingDayImage from "@/assets/Images/Auth/weeding-day-image.png";
import AuthStepper from "@/shared/Auth/AuthStepper";
import AuthSectionHeading from "@/components/Auth/AuthSectionHeading";
import CommonButton from "@/components/common/CommonButton";
import CalanderSettingIconSVG from "@/components/SVG/CalanderSettingIconSVG";
import { useDispatch, useSelector } from "react-redux";
import { updateWeddingDay } from "@/Redux/Slices/authRegistrationSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AuthWeddingDay() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registration = useSelector((state) => state.authRegistration);

  const [selectedOption, setSelectedOption] = useState(registration.weddingDateType || "picked");
  const [specificDate, setSpecificDate] = useState(registration.weddingDate || "2026-10-24");
  const [month, setMonth] = useState(registration.weddingMonth || "October");
  const [year, setYear] = useState(registration.weddingYear || "2026");

  useEffect(() => {
    if (registration.weddingDateType) setSelectedOption(registration.weddingDateType);
    if (registration.weddingDate) setSpecificDate(registration.weddingDate);
    if (registration.weddingMonth) setMonth(registration.weddingMonth);
    if (registration.weddingYear) setYear(registration.weddingYear);
  }, [registration]);

  const options = [
    { id: "picked", label: "We picked an exact date" },
    { id: "month-year", label: "We have a month and year in mind" },
    { id: "not-sure", label: "We are not sure yet" },
  ];

  const handleNext = () => {
    dispatch(
      updateWeddingDay({
        weddingDateType: selectedOption,
        weddingDate: specificDate,
        weddingMonth: month,
        weddingYear: year,
      })
    );
    navigate("/auth/weeding-place");
  };

  return (
    <section className="w-full bg-[#fff9F9] py-12 md:py-20 min-h-[calc(100vh-80px)] flex items-center">
      <Container>
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="w-full max-w-[420px]">
              <img
                src={WeddingDayImage}
                alt="Wedding Day Inspiration"
                className="w-full rounded-3xl shadow-xl object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <AuthStepper step={2} totalSteps={7} />

            <AuthSectionHeading
              title={"Have a wedding day in mind?"}
              description={
                "This helps us create a personalized planning timeline and countdown for you."
              }
              className={"my-8"}
            />

            <div className="space-y-4">
              {options.map((option) => (
                <div key={option.id} className="space-y-3">
                  <label
                    onClick={() => setSelectedOption(option.id)}
                    className={`flex items-center gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                      selectedOption === option.id
                        ? "bg-amber-50/70 border-[#E6C8A5] shadow-xs"
                        : "bg-white border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="relative shrink-0">
                      <input
                        type="radio"
                        name="wedding-date-choice"
                        value={option.id}
                        checked={selectedOption === option.id}
                        onChange={() => setSelectedOption(option.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                          selectedOption === option.id
                            ? "border-[#CF9585] bg-[#CF9585]"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        <div
                          className={`w-2.5 h-2.5 rounded-full bg-white transition-all duration-300 ${
                            selectedOption === option.id ? "scale-100" : "scale-0"
                          }`}
                        />
                      </div>
                    </div>

                    <span className="text-[#1D1D1F] text-base md:text-lg font-manrope font-medium">
                      {option.label}
                    </span>
                  </label>

                  {selectedOption === "picked" && option.id === "picked" && (
                    <div className="pl-4 md:pl-10">
                      <div className="w-full max-w-md relative">
                        <input
                          type="date"
                          value={specificDate}
                          onChange={(e) => setSpecificDate(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-[#DADADA] bg-white font-manrope text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#CF9585]"
                        />
                      </div>
                    </div>
                  )}

                  {selectedOption === "month-year" && option.id === "month-year" && (
                    <div className="pl-4 md:pl-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                      <Select value={month} onValueChange={setMonth}>
                        <SelectTrigger className="w-full px-4 py-3 rounded-xl border border-[#DADADA] bg-white text-sm font-manrope">
                          <SelectValue placeholder="Pick a month" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {[
                              "January",
                              "February",
                              "March",
                              "April",
                              "May",
                              "June",
                              "July",
                              "August",
                              "September",
                              "October",
                              "November",
                              "December",
                            ].map((m) => (
                              <SelectItem key={m} value={m}>
                                {m}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>

                      <Select value={year} onValueChange={setYear}>
                        <SelectTrigger className="w-full px-4 py-3 rounded-xl border border-[#DADADA] bg-white text-sm font-manrope">
                          <SelectValue placeholder="Pick a year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {["2025", "2026", "2027", "2028", "2029", "2030"].map((y) => (
                              <SelectItem key={y} value={y}>
                                {y}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {selectedOption === "not-sure" && option.id === "not-sure" && (
                    <p className="text-[#798090] italic text-sm md:text-base font-manrope pl-4 md:pl-10">
                      💡 That's completely fine! We will help you set up an approximate timeline.
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="w-full flex items-center gap-4 mt-10">
              <CommonButton
                link="/auth/welcome"
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
