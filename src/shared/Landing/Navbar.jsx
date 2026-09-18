import Container from "@/components/common/Container";
import Flex from "@/components/common/Flex";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "@/assets/Images/logo.png";
import CommonButton from "@/components/common/CommonButton";
import NavbarVectorOne from "@/assets/Images/vectors/navbar-vectoe-1.png";

// Nav Links
const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Browse Vendors",
    path: "/browse-vendors",
  },
  {
    name: "Categories",
    path: "/categories",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Custom Styles For Nav
  const navStyle =
    "text-center justify-start text-[#888E9C] hover:text-[#1D1D1F] text-sm md:text-base font-medium font-manrope transition-colors";
  const navActiveStyle =
    "text-center justify-start text-[#CF9585] font-bold text-sm md:text-base font-manrope";

  return (
    <nav className="py-4 bg-white relative border-b border-gray-100 sticky top-0 z-40 shadow-2xs">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link to="/" className="w-full max-w-[140px] md:max-w-[160px]">
              <img
                src={Logo}
                alt="Wedelogy Logo"
                className="w-full object-contain"
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks?.map((link, index) => (
              <NavLink
                to={link?.path}
                key={index}
                className={({ isActive }) =>
                  isActive ? navActiveStyle : navStyle
                }
                end={link?.path === "/"}
              >
                {link?.name}
              </NavLink>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <CommonButton
              link="/auth/login"
              varient="dark"
              className="px-5 py-2.5 text-sm md:text-base font-bold"
              showIcon={false}
            >
              Login
            </CommonButton>

            <CommonButton
              link="/auth/vendor/register"
              className="px-5 py-2.5 text-sm md:text-base font-bold hidden sm:inline-flex"
              showIcon={false}
            >
              Become a Vendor
            </CommonButton>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 flex">
          <div className="w-72 bg-white h-full p-6 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b">
                <img src={Logo} alt="Logo" className="h-8 object-contain" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-gray-500 hover:text-black text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <NavLink
                    key={idx}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `py-2 text-base font-semibold ${isActive ? "text-[#CF9585]" : "text-gray-700"}`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t">
              <Link
                to="/auth/vendor/register"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-2.5 bg-primary text-black font-bold text-sm rounded-xl font-salsa"
              >
                Become a Vendor
              </Link>
              <Link
                to="/all-pages"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-2 text-xs font-semibold text-gray-400 hover:text-gray-700"
              >
                View Sitemap / All Pages Directory &rarr;
              </Link>
            </div>
          </div>

          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}

      <img
        src={NavbarVectorOne}
        alt=""
        className="absolute right-10 -bottom-3/5 -translate-y-1/2 pointer-events-none hidden lg:block"
      />
    </nav>
  );
}
