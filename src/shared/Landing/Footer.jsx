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

const FooterLinks = [
  {
    heading: "For Couples",
    items: [
      { label: "Browse Vendors", url: "#" },
      { label: "Wedding Planning Tools", url: "#" },
      { label: "Inspiration Gallery", url: "#" },
      { label: "Budget Calculator", url: "#" },
      { label: "Wedding Checklist", url: "#" },
    ],
  },
  {
    heading: "For Vendors",
    items: [
      { label: "Join as Vendor", url: "#" },
      { label: "Success Stories", url: "#" },
      { label: "Vendor Resources", url: "#" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About Us", url: "#" },
      { label: "Contact Us", url: "#" },
      { label: "Terms of Service", url: "#" },
      { label: "Cookie Policy", url: "#" },
      { label: "Community Guidelines", url: "#" },
    ],
  },
  {
    heading: "Support",
    items: [
      { label: "Help Center", url: "#" },
      { label: "Privacy Policy", url: "#" },
      { label: "Report an Issue", url: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pt-[100px] pb-[70px] bg-white relative">
      <Container>
        <div className="w-full flex justify-between items-start gap-8">
          <div className="w-4/12">
            <div className="size-[150px]">
              <img src={Logo} alt="" />
            </div>

            <p className="text-[#1D1D1F] text-base font-manrope">
              The ultimate wedding planning platform connecting couples with
              top-rated vendors. Make your dream wedding a reality with our
              curated network of professionals.
            </p>

            <ul className="flex flex-col gap-5 mt-8">
              <li className="flex items-center gap-2 text-[#CF9585] text-base font-manrope">
                <div className="size-7">
                  <LocationIconSVG />
                </div>
                123 Wedding Street, Love City, LC 12345
              </li>
              <li className="flex items-center gap-2 text-[#CF9585] text-base font-manrope">
                <div className="size-7">
                  <PhoneIconSVG />
                </div>
                +1 (555) 123-LOVE
              </li>
              <li className="flex items-center gap-2 text-[#CF9585] text-base font-manrope">
                <div className="size-7">
                  <EnvolopeIconSVG />
                </div>
                hello@weddingplatform.com
              </li>
            </ul>
          </div>

          <div className="w-8/12 flex gap-7">
            <div className="w-9/12 flex gap-7">
              {FooterLinks?.map((item, index) => (
                <div key={index}>
                  <h3 className="text-[#1D1D1F] text-lg font-semibold font-manrope">
                    {item?.heading}
                  </h3>

                  <ul className="flex flex-col gap-3 mt-4">
                    {item?.items?.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem?.url}
                          className="text-[#4F586D] text-base font-manrope hover:opacity-80 transition-all"
                        >
                          {subItem?.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="w-3/12">
              <div>
                <h3 className="text-[#1D1D1F] text-lg font-semibold font-manrope">
                  Download our App
                </h3>

                <ul className="flex gap-3 mt-4">
                  <li>
                    <a href={"#"} className="hover:opacity-80 duration-300">
                      <img src={GooglePlay} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href={"#"} className=" hover:opacity-80 duration-300">
                      <img src={AppStore} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <img src={FooterVectorOne} alt="" className="absolute bottom-0 right-0" />
      <img src={FooterVectorTwo} alt="" className="absolute -top-1/2 left-0" />
    </footer>
  );
}
