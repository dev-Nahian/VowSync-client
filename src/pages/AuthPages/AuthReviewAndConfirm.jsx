import WeddingInfoCard from "@/components/Auth/WeddingInfoCard";
import CommonButton from "@/components/common/CommonButton";
import Container from "@/components/common/Container";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthStepper from "@/shared/Auth/AuthStepper";
import { useDispatch } from "react-redux";
import { completeRegistration } from "@/Redux/Slices/authRegistrationSlice";
import toast from "react-hot-toast";

export default function AuthReviewAndConfirm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConfirmAndCreate = () => {
    dispatch(completeRegistration());
    toast.success("🎉 Congratulations! Your wedding account is ready!");
    navigate("/customer-dashboard");
  };

  return (
    <section className="py-12 md:py-20 bg-[#FFF9F5] min-h-[calc(100vh-80px)]">
      <Container>
        <div className="w-full max-w-[760px] mx-auto px-4">
          <div className="mb-8">
            <AuthStepper step={7} totalSteps={7} />
          </div>

          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 rounded-full bg-[#FCECEE] text-[#CF9585] text-xs font-bold uppercase tracking-wider mb-2">
              Final Step
            </span>
            <h1 className="text-[#1D1D1F] text-3xl md:text-4xl font-bold font-playfair mb-3">
              Review & Confirm Your Details
            </h1>
            <p className="text-[#5B6477] text-base md:text-lg font-manrope">
              Please review your personalized information before we generate your wedding dashboard.
            </p>
          </div>

          <WeddingInfoCard />

          <div className="w-full flex items-center justify-between gap-6 mt-10">
            <CommonButton
              link="/auth/weeding-planning-in-details"
              className="w-1/2 bg-white border border-[#EBC9D4] text-[#1D1D1F] justify-center"
            >
              Back
            </CommonButton>

            <CommonButton
              onClick={handleConfirmAndCreate}
              className="w-1/2 justify-center font-bold"
            >
              Create My Dashboard 🎉
            </CommonButton>
          </div>

          <div className="mt-8 flex justify-center text-center">
            <p className="text-[#1D1D1F] text-sm md:text-base font-manrope">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-[#CF9585] font-bold underline hover:opacity-80">
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
