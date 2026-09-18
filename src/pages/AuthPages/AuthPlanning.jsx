import Container from "@/components/common/Container";
import React, { useState, useEffect } from "react";
import AuthStepper from "@/shared/Auth/AuthStepper";
import AuthSectionHeading from "@/components/Auth/AuthSectionHeading";
import CommonButton from "@/components/common/CommonButton";
import PlanningImage from "@/assets/Images/Auth/planning-image.png";
import { useDispatch, useSelector } from "react-redux";
import { updatePlanningStage } from "@/Redux/Slices/authRegistrationSlice";
import { useNavigate } from "react-router-dom";

export default function AuthPlanning() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const savedStage = useSelector((state) => state.authRegistration.planningStage);

  const [selected, setSelected] = useState(savedStage || "just-engaged");

  useEffect(() => {
    if (savedStage) setSelected(savedStage);
  }, [savedStage]);

  const stages = [
    {
      id: "not-engaged",
      title: "We are not engaged yet",
      subtitle: "Still gathering inspiration and planning for the proposal 💍",
    },
    {
      id: "just-engaged",
      title: "We just got engaged",
      subtitle: "Congratulations! Let's start laying the foundation 🎉",
    },
    {
      id: "venue-booked",
      title: "We have booked our venue",
      subtitle: "One major milestone down, let's lock in the vendors 🏛️",
    },
    {
      id: "invites-sent",
      title: "We have sent wedding invitations",
      subtitle: "Getting closer to the big day! Time for final touches 💌",
    },
  ];

  const handleNext = () => {
    dispatch(updatePlanningStage(selected));
    navigate("/auth/weeding-planning-in-details");
  };

  return (
    <section className="w-full bg-[#fff9F9] py-12 md:py-20 min-h-[calc(100vh-80px)] flex items-center">
      <Container>
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="w-full max-w-[420px]">
              <img
                src={PlanningImage}
                alt="Planning Stage"
                className="w-full rounded-3xl shadow-xl object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <AuthStepper step={5} totalSteps={7} />

            <AuthSectionHeading
              title={"Where are you in planning?"}
              description={"Select the phase that best describes your current progress."}
              className={"my-8"}
            />

            <div className="space-y-4">
              {stages.map((stage) => (
                <label
                  key={stage.id}
                  onClick={() => setSelected(stage.id)}
                  className={`flex items-start gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                    selected === stage.id
                      ? "border-[#CF9585] bg-amber-50/70 shadow-xs ring-1 ring-[#CF9585]"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="relative mt-1 shrink-0">
                    <input
                      type="radio"
                      name="wedding-stage-choice"
                      value={stage.id}
                      checked={selected === stage.id}
                      onChange={() => setSelected(stage.id)}
                      className="sr-only"
                    />
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        selected === stage.id
                          ? "border-[#CF9585] bg-[#CF9585]"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full bg-white transition-transform duration-300 ${
                          selected === stage.id ? "scale-100" : "scale-0"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[#1D1D1F] text-base md:text-lg font-bold font-manrope">
                      {stage.title}
                    </h3>
                    <p className="text-[#798090] text-sm md:text-base font-manrope mt-1">
                      {stage.subtitle}
                    </p>
                  </div>
                </label>
              ))}
            </div>

            <div className="w-full flex items-center gap-4 mt-8">
              <CommonButton
                link="/auth/weeding-guests"
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
