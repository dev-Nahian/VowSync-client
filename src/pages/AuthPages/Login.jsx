import React from "react";
import VendorLoginImageOne from "@/assets/Images/Auth/vendor-login-1.png";
import VendorLoginImageTwo from "@/assets/Images/Auth/vendor-login-2.png";
import Container from "@/components/common/Container";
import VendorLoginForm from "@/components/Auth/Vendor/VendorLoginForm";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="w-full bg-[#fff9F9] py-12 md:py-20 min-h-[calc(100vh-80px)] flex items-center">
      <Container>
        <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end pr-0 lg:pr-10">
            <div className="w-full max-w-[500px] relative">
              <img
                src={VendorLoginImageOne}
                alt="Wedding Login"
                className="w-full rounded-3xl shadow-xl object-cover"
              />
              <img
                src={VendorLoginImageTwo}
                alt="Celebration"
                className="w-36 md:w-48 absolute -bottom-6 -right-4 rounded-2xl shadow-lg border-4 border-white object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="w-full max-w-[560px]">
              <VendorLoginForm />
            </div>

            <div className="w-full text-center mt-6">
              <p className="text-xs md:text-sm font-manrope text-[#798090]">
                By clicking Log in or Continue, you agree to our{" "}
                <Link to="#" className="text-[#CF9585] font-semibold underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="#" className="text-[#CF9585] font-semibold underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
