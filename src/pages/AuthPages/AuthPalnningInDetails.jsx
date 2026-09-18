import Container from "@/components/common/Container";
import React, { useState, useEffect } from "react";
import AuthStepper from "@/shared/Auth/AuthStepper";
import AuthSectionHeading from "@/components/Auth/AuthSectionHeading";
import ReligousImage from "@/assets/Images/Auth/religious-image.png";
import DietaryImage from "@/assets/Images/Auth/dietary-image.png";
import IslamicImage from "@/assets/Images/Auth/islamic-image.png";
import OtherCeremoniesImage from "@/assets/Images/Auth/other-ceremonies-image.png";
import HelpIconSVG from "@/components/SVG/HelpIconSVG";
import AlertIconSVG from "@/components/SVG/AlertIconSVG";
import CommonButton from "@/components/common/CommonButton";
import { useDispatch, useSelector } from "react-redux";
import { updatePlanningDetails } from "@/Redux/Slices/authRegistrationSlice";
import { useNavigate } from "react-router-dom";

export default function AuthPalnningInDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reg = useSelector((state) => state.authRegistration);

  const [selectedReligious, setSelectedReligious] = useState(reg.religiousAffiliation || "islamic");
  const [selectedDietary, setSelectedDietary] = useState(reg.dietaryRequirements || ["halal", "vegetarian"]);
  const [otherDietaryNotes, setOtherDietaryNotes] = useState(reg.otherDietaryNotes || "");
  const [selectedCeremonies, setSelectedCeremonies] = useState(reg.ceremonies || ["nikah", "walima", "mehendi", "rukhsati"]);
  const [budgetRange, setBudgetRange] = useState(reg.budgetRange || "$40,000 - $75,000");

  useEffect(() => {
    if (reg.religiousAffiliation) setSelectedReligious(reg.religiousAffiliation);
    if (reg.dietaryRequirements) setSelectedDietary(reg.dietaryRequirements);
    if (reg.otherDietaryNotes) setOtherDietaryNotes(reg.otherDietaryNotes);
    if (reg.ceremonies) setSelectedCeremonies(reg.ceremonies);
    if (reg.budgetRange) setBudgetRange(reg.budgetRange);
  }, [reg]);

  const religiousAffiliations = [
    { id: "islamic", label: "Islamic (Muslim)" },
    { id: "christian", label: "Christian" },
    { id: "hindu", label: "Hindu" },
    { id: "sikh", label: "Sikh" },
    { id: "jewish", label: "Jewish" },
    { id: "buddhist", label: "Buddhist" },
    { id: "non-religious", label: "Non-religious / Civil" },
    { id: "other", label: "Interfaith / Other" },
  ];

  const dietaryRequirementsList = [
    { id: "halal", label: "Halal (Zabihah)" },
    { id: "vegetarian", label: "Vegetarian" },
    { id: "vegan", label: "Vegan" },
    { id: "gluten-free", label: "Gluten-free" },
    { id: "kosher", label: "Kosher" },
    { id: "dairy-free", label: "Dairy-free" },
    { id: "nut-free", label: "Nut-free / Allergy safe" },
    { id: "no-restrictions", label: "No Specific Restrictions" },
  ];

  const islamicCeremonies = [
    {
      id: "nikah",
      label: "Nikah (Islamic Marriage Contract)",
      description: "Sacred Islamic marriage contract solemnization and vows",
    },
    {
      id: "walima",
      label: "Walima (Wedding Reception Banquet)",
      description: "Traditional joyous wedding feast hosted by the groom's side",
    },
    {
      id: "mehendi",
      label: "Mehendi / Holud (Henna & Sangeet)",
      description: "Lively pre-wedding henna application, music, and dance celebration",
    },
    {
      id: "rukhsati",
      label: "Rukhsati (Bride's Formal Departure)",
      description: "Emotional farewell and blessing ceremony as the bride departs",
    },
  ];

  const otherCeremonies = [
    {
      id: "wedding-reception",
      label: "Grand Wedding Reception",
      description: "Formal dinner, speeches, cake cutting, and guest celebration",
    },
    {
      id: "civil-ceremony",
      label: "Civil / Legal Ceremony",
      description: "Official government registration and certificate signing",
    },
    {
      id: "engagement-party",
      label: "Engagement / Ring Ceremony",
      description: "Formal announcement celebration with family and close friends",
    },
  ];

  const budgetOptions = [
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $75,000",
    "$75,000 - $100,000",
    "$100,000+",
  ];

  const toggleDietary = (id) => {
    if (selectedDietary.includes(id)) {
      setSelectedDietary(selectedDietary.filter((d) => d !== id));
    } else {
      setSelectedDietary([...selectedDietary, id]);
    }
  };

  const toggleCeremony = (id) => {
    if (selectedCeremonies.includes(id)) {
      setSelectedCeremonies(selectedCeremonies.filter((c) => c !== id));
    } else {
      setSelectedCeremonies([...selectedCeremonies, id]);
    }
  };

  const handleNext = () => {
    dispatch(
      updatePlanningDetails({
        religiousAffiliation: selectedReligious,
        dietaryRequirements: selectedDietary,
        otherDietaryNotes,
        ceremonies: selectedCeremonies,
        budgetRange,
      })
    );
    navigate("/auth/review-details");
  };

  return (
    <section className="w-full bg-[#fff9F9] py-12 md:py-20">
      <Container>
        <div className="max-w-4xl mx-auto mb-10">
          <AuthStepper step={6} totalSteps={7} />
          <AuthSectionHeading
            title={"Personalize Your Ceremonies & Preferences"}
            description={
              "Tell us about your cultural traditions, dietary guidelines, and budget to tailor your vendor recommendations."
            }
            className={"mt-6"}
          />
        </div>

        {/* Section 1: Religious & Cultural Affiliation */}
        <div className="w-full bg-white rounded-3xl p-6 md:p-10 border border-[#EFE5E7] shadow-xs mb-12 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-4/12 flex justify-center">
            <img
              src={ReligousImage}
              alt="Cultural Tradition"
              className="w-full max-w-[320px] rounded-2xl object-cover"
            />
          </div>

          <div className="w-full lg:w-8/12">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">Tradition & Culture</span>
              <h2 className="text-[#121117] text-2xl font-bold font-manrope mt-1">
                Religious or Cultural Tradition
              </h2>
              <p className="text-[#5B6477] text-sm font-manrope">
                Select which tradition your wedding ceremonies will primarily follow:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {religiousAffiliations.map((option) => (
                <label
                  key={option.id}
                  onClick={() => setSelectedReligious(option.id)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-200 border ${
                    selectedReligious === option.id
                      ? "border-[#CF9585] bg-amber-50/70 ring-1 ring-[#CF9585]"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="relative shrink-0">
                    <input
                      type="radio"
                      name="religious-tradition"
                      value={option.id}
                      checked={selectedReligious === option.id}
                      onChange={() => setSelectedReligious(option.id)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedReligious === option.id
                          ? "border-[#CF9585] bg-[#CF9585]"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-white transition-transform ${
                          selectedReligious === option.id ? "scale-100" : "scale-0"
                        }`}
                      />
                    </div>
                  </div>

                  <span className="font-manrope text-sm font-semibold text-[#1D1D1F]">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Dietary Requirements */}
        <div className="w-full bg-white rounded-3xl p-6 md:p-10 border border-[#EFE5E7] shadow-xs mb-12 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-4/12 flex justify-center">
            <img
              src={DietaryImage}
              alt="Dietary requirements"
              className="w-full max-w-[320px] rounded-2xl object-cover"
            />
          </div>

          <div className="w-full lg:w-8/12">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">Catering & Menu</span>
              <h2 className="text-[#121117] text-2xl font-bold font-manrope mt-1">
                Dietary Requirements (Multi-Select)
              </h2>
              <p className="text-[#5B6477] text-sm font-manrope">
                Select any special dietary needs to ensure caterers can accommodate all your guests:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {dietaryRequirementsList.map((option) => {
                const isChecked = selectedDietary.includes(option.id);
                return (
                  <label
                    key={option.id}
                    onClick={() => toggleDietary(option.id)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-200 border ${
                      isChecked
                        ? "border-[#CF9585] bg-amber-50/70 ring-1 ring-[#CF9585]"
                        : "bg-white border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="relative shrink-0">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleDietary(option.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                          isChecked
                            ? "border-[#CF9585] bg-[#CF9585] text-white"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {isChecked && (
                          <svg className="w-3.5 h-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>

                    <span className="font-manrope text-sm font-semibold text-[#1D1D1F]">
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>

            <div className="mt-4">
              <input
                type="text"
                value={otherDietaryNotes}
                onChange={(e) => setOtherDietaryNotes(e.target.value)}
                placeholder="Additional dietary notes (e.g. strict shellfish allergy, diabetic options)..."
                className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#DADADA] rounded-xl text-sm font-manrope focus:outline-none focus:ring-2 focus:ring-[#CF9585]"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Planned Ceremonies */}
        <div className="w-full bg-white rounded-3xl p-6 md:p-10 border border-[#EFE5E7] shadow-xs mb-12 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-4/12 flex justify-center">
            <img
              src={IslamicImage}
              alt="Islamic Ceremonies"
              className="w-full max-w-[320px] rounded-2xl object-cover"
            />
          </div>

          <div className="w-full lg:w-8/12">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">Events & Celebrations</span>
              <h2 className="text-[#121117] text-2xl font-bold font-manrope mt-1">
                Ceremonies You Plan to Host
              </h2>
              <p className="text-[#5B6477] text-sm font-manrope">
                Check all events that are part of your celebration:
              </p>
            </div>

            <div className="space-y-3">
              {[...islamicCeremonies, ...otherCeremonies].map((option) => {
                const isChecked = selectedCeremonies.includes(option.id);
                return (
                  <label
                    key={option.id}
                    onClick={() => toggleCeremony(option.id)}
                    className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
                      isChecked
                        ? "border-[#CF9585] bg-amber-50/70 ring-1 ring-[#CF9585]"
                        : "bg-white border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="relative mt-1 shrink-0">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleCeremony(option.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                          isChecked
                            ? "border-[#CF9585] bg-[#CF9585] text-white"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {isChecked && (
                          <svg className="w-3.5 h-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-manrope text-base font-bold text-[#1D1D1F]">
                          {option.label}
                        </span>
                      </div>
                      <p className="text-[#888E9C] text-sm font-medium font-manrope mt-0.5">
                        {option.description}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>

            <div className="p-4 bg-[#DDEEE8] border border-[#c4e3d9] rounded-xl mt-6 flex items-start gap-3">
              <div className="size-6 shrink-0 text-[#2B7A78] mt-0.5">
                <AlertIconSVG />
              </div>
              <p className="text-[#1D1D1F] text-xs md:text-sm font-manrope">
                Each ceremony will have its own checklist milestone and vendor budget allocation on your dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Estimated Budget Range */}
        <div className="w-full bg-white rounded-3xl p-6 md:p-10 border border-[#EFE5E7] shadow-xs mb-12">
          <h2 className="text-[#121117] text-2xl font-bold font-manrope mb-2">
            Target Overall Budget Range
          </h2>
          <p className="text-[#5B6477] text-sm font-manrope mb-6">
            Help us customize your budget manager categories and cost projections:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {budgetOptions.map((budget) => (
              <button
                key={budget}
                type="button"
                onClick={() => setBudgetRange(budget)}
                className={`py-3 px-4 rounded-xl text-sm font-bold font-manrope border transition-all ${
                  budgetRange === budget
                    ? "bg-[#1D1D1F] text-white border-[#1D1D1F] shadow-sm"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                }`}
              >
                {budget}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Action Buttons */}
        <div className="w-full flex items-center justify-between gap-6 max-w-2xl mx-auto">
          <CommonButton
            link="/auth/weeding-planning"
            className="w-1/2 bg-white border border-[#EBC9D4] text-[#1D1D1F] justify-center"
          >
            Back
          </CommonButton>

          <CommonButton
            onClick={handleNext}
            className="w-1/2 justify-center"
          >
            Review & Confirm
          </CommonButton>
        </div>
      </Container>
    </section>
  );
}
