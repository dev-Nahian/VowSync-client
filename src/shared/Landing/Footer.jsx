import Container from "@/components/common/Container";
import React from "react";
import Logo from "@/assets/Images/logo.png";
import LocationIconSVG from "@/components/SVG/LocationIconSVG";
import PhoneIconSVG from "@/components/SVG/PhoneIconSVG";
import EnvolopeIconSVG from "@/components/SVG/EnvolopeIconSVG";
import GooglePlay from "@/assets/Images/google-play.png";
import AppStore from "@/assets/Images/app-store.png";
import FooterVectorOne from "@/assets/Images/vectors/footerVectorOne.png";
import FooterVectorTwo from "@/assets/Images/vectors/footerVectorTwo.png";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    heading: "For Couples",
    items: [
      { label: "Browse Vendors", url: "/browse-vendors" },
      { label: "Wedding Planning Tools", url: "/customer-dashboard" },
      { label: "Inspiration Gallery", url: "/inspiration-gallery" },
      { label: "Budget Calculator", url: "/budget-calculator" },
      { label: "Wedding Checklist", url: "/wedding-checklist" },
    ],
  },
  {
    heading: "For Vendors",
    items: [
      { label: "Join as Vendor", url: "/auth/vendor/register" },
      { label: "Vendor Partner Portal", url: "/vendor-dashboard" },
      { label: "Vendor Login", url: "/auth/login" },
      { label: "Success Stories", url: "/blogs" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About Us", url: "/about-us" },
      { label: "All Categories", url: "/categories" },
      { label: "Wedding Journal & Blogs", url: "/blogs" },
      { label: "Contact Us", url: "/contact" },
      { label: "Sitemap / All Pages", url: "/all-pages" },
    ],
  },
  {
    heading: "Support & Legal",
    items: [
      { label: "Help Center", url: "/help-center" },
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms of Service", url: "/terms-of-service" },
      { label: "Direct Concierge", url: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pt-20 pb-16 bg-white relative border-t border-gray-100 font-manrope">
      <Container>
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="w-full lg:w-4/12 space-y-5">
            <Link to="/" className="inline-block w-40">
              <img src={Logo} alt="Wedelogy Logo" className="w-full object-contain" />
            </Link>

            <p className="text-[#5B6477] text-sm leading-relaxed max-w-sm">
              The premier modern wedding management platform connecting couples with top-rated verified vendors. Plan your dream wedding effortlessly.
            </p>

            <ul className="flex flex-col gap-3.5 pt-2">
              <li className="flex items-center gap-2.5 text-[#CF9585] text-xs sm:text-sm">
                <div className="size-5 shrink-0">
                  <LocationIconSVG />
                </div>
                <span>123 Wedding Boulevard, Gulshan 2, Dhaka</span>
              </li>
              <li className="flex items-center gap-2.5 text-[#CF9585] text-xs sm:text-sm">
                <div className="size-5 shrink-0">
                  <PhoneIconSVG />
                </div>
                <span>+1 (555) 123-LOVE / +880 1700-000000</span>
              </li>
              <li className="flex items-center gap-2.5 text-[#CF9585] text-xs sm:text-sm">
                <div className="size-5 shrink-0">
                  <EnvolopeIconSVG />
                </div>
                <span>hello@wedelogy.com</span>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-8/12 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FooterLinks.map((section, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-[#1D1D1F] text-sm md:text-base font-bold font-playfair">
                  {section.heading}
                </h3>

                <ul className="flex flex-col gap-2.5">
                  {section.items.map((item, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={item.url}
                        className="text-[#5B6477] text-xs md:text-sm hover:text-[#CF9585] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <img src={FooterVectorOne} alt="" className="absolute bottom-0 right-0 pointer-events-none hidden lg:block opacity-60" />
      <img src={FooterVectorTwo} alt="" className="absolute -top-1/4 left-0 pointer-events-none hidden lg:block opacity-60" />
    </footer>
  );
}
