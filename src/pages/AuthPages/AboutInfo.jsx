import React, { useEffect } from "react";
import AboutImageOne from "@/assets/Images/Auth/about-one.png";
import AboutImageTwo from "@/assets/Images/Auth/about-two.png";
import Container from "@/components/common/Container";
import AuthStepper from "@/shared/Auth/AuthStepper";
import { useForm } from "react-hook-form";
import EnvelopeIconSVG from "@/components/SVG/EnvelopeIconSVG";
import PhoneIconSVG from "@/components/SVG/PhoneIconSVG";
import PartnerFemaleIconSVG from "@/components/SVG/PartnerFemaleIconSVG";
import CommonButton from "@/components/common/CommonButton";
import AuthSectionHeading from "@/components/Auth/AuthSectionHeading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAboutInfo } from "@/Redux/Slices/authRegistrationSlice";

export default function AboutInfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registrationState = useSelector((state) => state.authRegistration);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      himFirstName: registrationState.himFirstName || "",
      himLastName: registrationState.himLastName || "",
      herFirstName: registrationState.herFirstName || "",
      herLastName: registrationState.herLastName || "",
      phoneNo: registrationState.phoneNo || "",
      email: registrationState.email || "",
    },
  });

  useEffect(() => {
    setValue("himFirstName", registrationState.himFirstName || "");
    setValue("himLastName", registrationState.himLastName || "");
    setValue("herFirstName", registrationState.herFirstName || "");
    setValue("herLastName", registrationState.herLastName || "");
    setValue("phoneNo", registrationState.phoneNo || "");
    setValue("email", registrationState.email || "");
  }, [registrationState, setValue]);

  const stepOneSubmit = (data) => {
    dispatch(updateAboutInfo(data));
    toast.success("Personal details saved!");
    navigate("/auth/welcome");
  };

  const isBride = registrationState.role === "Bride";

  return (
    <section className="w-full bg-[#fff9F9] py-12 md:py-20 min-h-[calc(100vh-80px)] flex items-center">
      <Container>
        <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="w-full lg:w-5/12 flex items-center justify-center relative">
            <div className="w-full max-w-[440px] relative">
              <img
                src={AboutImageOne}
                alt="Couple"
                className="w-4/5 rounded-3xl shadow-xl object-cover"
              />
              <img
                src={AboutImageTwo}
                alt="Partner celebration"
                className="w-3/5 absolute -bottom-6 -right-2 rounded-2xl shadow-lg border-4 border-white object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col gap-6">
            <AuthStepper step={1} totalSteps={7} />

            <AuthSectionHeading
              title={"Tell us about you both"}
              description={
                "We'll use this to personalize your wedding planning experience."
              }
            />

            <form onSubmit={handleSubmit(stepOneSubmit)} className="space-y-6">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* You Section */}
                <div className="bg-white/80 p-5 rounded-2xl border border-[#EFE5E7] shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[#121117] text-xl font-bold font-manrope">
                      You ({registrationState.role || "Bride"})
                    </h4>
                    <span className="text-xl">{isBride ? "👰‍♀️" : "🤵‍♂️"}</span>
                  </div>

                  <div className="space-y-4">
                    <div className="w-full flex flex-col gap-1.5">
                      <label className="text-[#1D1D1F] text-sm font-semibold font-manrope">
                        First Name *
                      </label>
                      <input
                        {...register("himFirstName", { required: "First name is required" })}
                        type="text"
                        placeholder="e.g. Ismail"
                        className={`px-4 py-3 rounded-lg border bg-white focus-visible:outline-none focus:ring-2 focus:ring-[#CF9585] text-sm ${
                          errors?.himFirstName ? "border-red-500" : "border-[#DADADA]"
                        }`}
                      />
                      {errors?.himFirstName && (
                        <span className="text-red-500 text-xs">{errors.himFirstName.message}</span>
                      )}
                    </div>

                    <div className="w-full flex flex-col gap-1.5">
                      <label className="text-[#1D1D1F] text-sm font-semibold font-manrope">
                        Last Name *
                      </label>
                      <input
                        {...register("himLastName", { required: "Last name is required" })}
                        type="text"
                        placeholder="e.g. Hossain"
                        className={`px-4 py-3 rounded-lg border bg-white focus-visible:outline-none focus:ring-2 focus:ring-[#CF9585] text-sm ${
                          errors?.himLastName ? "border-red-500" : "border-[#DADADA]"
                        }`}
                      />
                      {errors?.himLastName && (
                        <span className="text-red-500 text-xs">{errors.himLastName.message}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Partner Section */}
                <div className="bg-white/80 p-5 rounded-2xl border border-[#EFE5E7] shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[#121117] text-xl font-bold font-manrope">
                      Your Partner ({isBride ? "Groom" : "Bride"})
                    </h4>
                    <span className="text-xl">{isBride ? "🤵‍♂️" : "👰‍♀️"}</span>
                  </div>

                  <div className="space-y-4">
                    <div className="w-full flex flex-col gap-1.5">
                      <label className="text-[#1D1D1F] text-sm font-semibold font-manrope">
                        First Name *
                      </label>
                      <div className="w-full relative">
                        <input
                          {...register("herFirstName", { required: "Partner's first name is required" })}
                          type="text"
                          placeholder="e.g. Nadia"
                          className={`w-full px-4 py-3 rounded-lg border bg-white focus-visible:outline-none focus:ring-2 focus:ring-[#CF9585] pl-10 text-sm ${
                            errors?.herFirstName ? "border-red-500" : "border-[#DADADA]"
                          }`}
                        />
                        <div className="w-4 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                          <PartnerFemaleIconSVG />
                        </div>
                      </div>
                      {errors?.herFirstName && (
                        <span className="text-red-500 text-xs">{errors.herFirstName.message}</span>
                      )}
                    </div>

                    <div className="w-full flex flex-col gap-1.5">
                      <label className="text-[#1D1D1F] text-sm font-semibold font-manrope">
                        Last Name *
                      </label>
                      <div className="w-full relative">
                        <input
                          {...register("herLastName", { required: "Partner's last name is required" })}
                          type="text"
                          placeholder="e.g. Rahman"
                          className={`w-full px-4 py-3 rounded-lg border bg-white focus-visible:outline-none focus:ring-2 focus:ring-[#CF9585] pl-10 text-sm ${
                            errors?.herLastName ? "border-red-500" : "border-[#DADADA]"
                          }`}
                        />
                        <div className="w-4 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                          <PartnerFemaleIconSVG />
                        </div>
                      </div>
                      {errors?.herLastName && (
                        <span className="text-red-500 text-xs">{errors.herLastName.message}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full flex flex-col gap-1.5">
                  <label className="text-[#1D1D1F] text-sm font-semibold font-manrope">
                    Phone Number *
                  </label>
                  <div className="w-full relative">
                    <input
                      {...register("phoneNo", { required: "Phone number is required" })}
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-4 py-3 rounded-lg border bg-white focus-visible:outline-none focus:ring-2 focus:ring-[#CF9585] pl-11 text-sm ${
                        errors?.phoneNo ? "border-red-500" : "border-[#DADADA]"
                      }`}
                    />
                    <div className="w-4 absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
                      <PhoneIconSVG />
                    </div>
                  </div>
                  {errors?.phoneNo && (
                    <span className="text-red-500 text-xs">{errors.phoneNo.message}</span>
                  )}
                </div>

                <div className="w-full flex flex-col gap-1.5">
                  <label className="text-[#1D1D1F] text-sm font-semibold font-manrope">
                    Email Address *
                  </label>
                  <div className="w-full relative">
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                      type="email"
                      placeholder="couple@wedding.com"
                      className={`w-full px-4 py-3 rounded-lg border bg-white focus-visible:outline-none focus:ring-2 focus:ring-[#CF9585] pl-11 text-sm ${
                        errors?.email ? "border-red-500" : "border-[#DADADA]"
                      }`}
                    />
                    <div className="w-4 absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
                      <EnvelopeIconSVG />
                    </div>
                  </div>
                  {errors?.email && (
                    <span className="text-red-500 text-xs">{errors.email.message}</span>
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="w-full flex items-center gap-4 pt-4">
                <CommonButton
                  link="/auth"
                  className="w-1/2 bg-white border border-[#EBC9D4] text-[#1D1D1F] justify-center"
                >
                  Back
                </CommonButton>

                <CommonButton type="submit" className="w-1/2 justify-center">
                  Next Step
                </CommonButton>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
