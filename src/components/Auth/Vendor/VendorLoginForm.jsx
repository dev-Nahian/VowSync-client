import ButtonIconDarkSVG from "@/components/SVG/ButtonIconDarkSVG";
import EnvelopeIconSVG from "@/components/SVG/EnvelopeIconSVG";
import KeyIconSVG from "@/components/SVG/KeyIconSVG";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function VendorLoginForm() {
  const [loginRole, setLoginRole] = useState("couple"); // 'couple' | 'vendor'
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "nadia.ismail@wedding.com",
      password: "password123",
      remember: true,
    },
  });

  const onSubmit = (data) => {
    toast.success(
      `🎉 Logged in successfully as ${loginRole === "couple" ? "Couple" : "Vendor"}!`
    );
    if (loginRole === "couple") {
      localStorage.setItem(
        "vowsync_user_session",
        JSON.stringify({
          role: "couple",
          name: "Nadia & Ismail",
          email: data.email,
        })
      );
      navigate("/customer-dashboard");
    } else {
      localStorage.setItem(
        "vowsync_user_session",
        JSON.stringify({
          role: "vendor",
          name: "Luxe Memories Photography Studio",
          email: data.email,
        })
      );
      navigate("/vendor-dashboard");
    }
  };

  const setDemoCouple = () => {
    setLoginRole("couple");
    setValue("email", "nadia.ismail@wedding.com");
    setValue("password", "password123");
    toast("Demo Couple credentials loaded", { icon: "👰" });
  };

  const setDemoVendor = () => {
    setLoginRole("vendor");
    setValue("email", "contact@luxememories.com");
    setValue("password", "password123");
    toast("Demo Vendor credentials loaded", { icon: "📸" });
  };

  return (
    <div className="w-full bg-white p-6 md:p-10 rounded-3xl border border-[#EFE5E7] shadow-lg">
      <div className="flex bg-[#F8F9FA] p-1.5 rounded-2xl mb-8 border border-gray-200">
        <button
          type="button"
          onClick={() => {
            setLoginRole("couple");
            setValue("email", "nadia.ismail@wedding.com");
          }}
          className={`w-1/2 py-3 rounded-xl text-sm md:text-base font-bold font-manrope transition-all cursor-pointer ${
            loginRole === "couple"
              ? "bg-[#1D1D1F] text-white shadow-sm"
              : "text-gray-600 hover:text-black"
          }`}
        >
          💍 Couple Login
        </button>

        <button
          type="button"
          onClick={() => {
            setLoginRole("vendor");
            setValue("email", "contact@luxememories.com");
          }}
          className={`w-1/2 py-3 rounded-xl text-sm md:text-base font-bold font-manrope transition-all cursor-pointer ${
            loginRole === "vendor"
              ? "bg-[#1D1D1F] text-white shadow-sm"
              : "text-gray-600 hover:text-black"
          }`}
        >
          🏪 Vendor Login
        </button>
      </div>

      <div>
        <h1 className="text-[#121117] text-3xl font-bold font-playfair leading-[130%]">
          {loginRole === "couple" ? "Welcome Back, Lovebirds!" : "Vendor Partner Portal"}
        </h1>

        <p className="text-[#5B6477] text-sm md:text-base font-manrope mt-2">
          {loginRole === "couple"
            ? "Sign in to access your wedding countdown, budget, and RSVP manager."
            : "Sign in to manage client inquiries, bookings, and your service portfolio."}
        </p>
      </div>

      {/* Quick Demo Login Preset Buttons */}
      <div className="flex items-center gap-2 my-5 p-2.5 bg-[#FFF9F5] rounded-xl border border-[#FCECEE]">
        <span className="text-xs font-bold text-[#CF9585] uppercase tracking-wider font-manrope shrink-0">
          Quick Demo:
        </span>
        <button
          type="button"
          onClick={setDemoCouple}
          className="px-2.5 py-1 text-xs font-semibold bg-white border border-gray-200 hover:border-gray-400 rounded-lg text-gray-800 transition-all cursor-pointer"
        >
          Couple Demo
        </button>
        <button
          type="button"
          onClick={setDemoVendor}
          className="px-2.5 py-1 text-xs font-semibold bg-white border border-gray-200 hover:border-gray-400 rounded-lg text-gray-800 transition-all cursor-pointer"
        >
          Vendor Demo
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        {/* Email */}
        <div className="w-full flex flex-col gap-1.5">
          <label className="text-[#1D1D1F] text-sm font-semibold font-manrope">Email Address</label>
          <div className="w-full relative">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-3 rounded-xl border bg-white pl-12 font-manrope text-sm
                ${errors.email ? "border-red-500" : "border-[#DADADA] focus:ring-2 focus:ring-[#CF9585] outline-none"}`}
            />
            <div className="w-4 absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
              <EnvelopeIconSVG />
            </div>
          </div>
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>

        {/* Password */}
        <div className="w-full flex flex-col gap-1.5">
          <label className="text-[#1D1D1F] text-sm font-semibold font-manrope">Password</label>
          <div className="w-full relative">
            <input
              {...register("password", {
                required: "Password is required",
              })}
              type="password"
              placeholder="••••••••"
              className={`w-full px-4 py-3 rounded-xl border bg-white pl-12 font-manrope text-sm
                ${errors.password ? "border-red-500" : "border-[#DADADA] focus:ring-2 focus:ring-[#CF9585] outline-none"}`}
            />
            <div className="w-5 absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
              <KeyIconSVG />
            </div>
          </div>
          {errors.password && (
            <span className="text-red-500 text-xs">{errors.password.message}</span>
          )}
        </div>

        {/* Remember and Forgot Password */}
        <div className="w-full flex items-center justify-between pt-1">
          <label className="flex items-center cursor-pointer select-none">
            <input
              {...register("remember")}
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-[#CF9585] focus:ring-[#CF9585]"
            />
            <span className="text-[#1D1D1F] text-xs md:text-sm font-manrope ml-2">
              Remember me
            </span>
          </label>

          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              toast("Password reset instructions sent to your email!");
            }}
            className="text-[#CF9585] text-xs md:text-sm font-manrope font-semibold underline hover:opacity-80 transition-all"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Action Button */}
        <div className="w-full pt-4">
          <button
            type="submit"
            className="w-full bg-primary text-black inline-flex justify-center items-center gap-3 px-8 py-4 rounded-2xl text-lg font-salsa hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer shadow-md"
          >
            Login to Dashboard
            <div className="size-7">
              <ButtonIconDarkSVG />
            </div>
          </button>
        </div>

        <div className="text-center pt-4 border-t border-gray-100 mt-6">
          <p className="text-sm font-manrope text-[#5B6477]">
            {loginRole === "couple" ? (
              <>
                New to Wedelogy?{" "}
                <Link to="/auth" className="text-[#CF9585] font-bold underline hover:opacity-80">
                  Create a Couple Account
                </Link>
              </>
            ) : (
              <>
                Want to list your business?{" "}
                <Link to="/auth/vendor/register" className="text-[#CF9585] font-bold underline hover:opacity-80">
                  Register as a Vendor
                </Link>
              </>
            )}
          </p>
        </div>
      </form>
    </div>
  );
}
