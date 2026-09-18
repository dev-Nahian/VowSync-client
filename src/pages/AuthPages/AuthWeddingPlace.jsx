import Container from "@/components/common/Container";
import React, { useState, useEffect } from "react";
import WeddingDayImage from "@/assets/Images/Auth/weeding-day-image.png";
import AuthStepper from "@/shared/Auth/AuthStepper";
import AuthSectionHeading from "@/components/Auth/AuthSectionHeading";
import CommonButton from "@/components/common/CommonButton";
import { useDispatch, useSelector } from "react-redux";
import { updateWeddingPlace } from "@/Redux/Slices/authRegistrationSlice";
import { useNavigate } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AuthWeddingPlace() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registration = useSelector((state) => state.authRegistration);

  const [selectedOption, setSelectedOption] = useState(registration.locationType || "location");
  const [country, setCountry] = useState(registration.country || "Bangladesh");
  const [city, setCity] = useState(registration.city || "Dhaka");

  useEffect(() => {
    if (registration.locationType) setSelectedOption(registration.locationType);
    if (registration.country) setCountry(registration.country);
    if (registration.city) setCity(registration.city);
  }, [registration]);

  const options = [
    { id: "location", label: "We have a location in mind" },
    { id: "not-sure", label: "We are still deciding" },
  ];

  const cityOptions = {
    Bangladesh: ["Dhaka", "Chittagong", "Sylhet", "Cox's Bazar", "Rajshahi", "Khulna"],
    "United States": ["New York", "Los Angeles", "San Francisco", "Chicago", "Miami", "Dallas"],
    "United Kingdom": ["London", "Manchester", "Birmingham", "Edinburgh", "Leeds"],
    Canada: ["Toronto", "Vancouver", "Montreal", "Calgary"],
    UAE: ["Dubai", "Abu Dhabi", "Sharjah"],
    India: ["Mumbai", "Delhi", "Bengaluru", "Kolkata", "Hyderabad", "Jaipur"],
  };

  const availableCities = cityOptions[country] || ["Capital City", "Downtown", "Coastal Resort"];

  const handleNext = () => {
    dispatch(
      updateWeddingPlace({
        locationType: selectedOption,
        country: selectedOption === "location" ? country : "TBD",
        city: selectedOption === "location" ? city : "TBD",
      })
    );
    navigate("/auth/weeding-guests");
  };

  return (
    <section className="w-full bg-[#fff9F9] py-12 md:py-20 min-h-[calc(100vh-80px)] flex items-center">
      <Container>
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="w-full max-w-[420px]">
              <img
                src={WeddingDayImage}
                alt="Wedding Venue Inspiration"
                className="w-full rounded-3xl shadow-xl object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <AuthStepper step={3} totalSteps={7} />

            <AuthSectionHeading
              title={"Any Idea Where?"}
              description={"This helps us show you local verified vendors and exquisite venues."}
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
                        name="wedding-place-choice"
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

                  {selectedOption === "location" && option.id === "location" && (
                    <div className="pl-4 md:pl-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
                      <Select
                        value={country}
                        onValueChange={(val) => {
                          setCountry(val);
                          const firstCity = cityOptions[val]?.[0] || "City";
                          setCity(firstCity);
                        }}
                      >
                        <SelectTrigger className="w-full px-4 py-3 rounded-xl border border-[#DADADA] bg-white text-sm font-manrope">
                          <SelectValue placeholder="Select Country / Region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {Object.keys(cityOptions).map((c) => (
                              <SelectItem key={c} value={c}>
                                {c}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>

                      <Select value={city} onValueChange={setCity}>
                        <SelectTrigger className="w-full px-4 py-3 rounded-xl border border-[#DADADA] bg-white text-sm font-manrope">
                          <SelectValue placeholder="City or Town" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {availableCities.map((ct) => (
                              <SelectItem key={ct} value={ct}>
                                {ct}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {selectedOption === "not-sure" && option.id === "not-sure" && (
                    <p className="text-[#798090] italic text-sm md:text-base font-manrope pl-4 md:pl-10">
                      💡 That’s okay, you can browse destination venues and update this later.
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="w-full bg-[#DDEEE8] text-[#343E56] text-sm md:text-base font-manrope py-4 px-6 mt-6 rounded-xl border border-[#c4e3d9]">
              <span className="font-bold text-[#1D1D1F]">💡 Helpful Tip:</span> Choosing a location early helps us connect you with top-rated local decorators and banquet managers.
            </div>

            <div className="w-full flex items-center gap-4 mt-8">
              <CommonButton
                link="/auth/weeding-day"
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
