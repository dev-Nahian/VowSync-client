import Container from "@/components/common/Container";
import Flex from "@/components/common/Flex";
import React from "react";
import Logo from "@/assets/Images/logo.png";
import NavbarVectorOne from "@/assets/Images/vectors/navbar-vectoe-1.png";
import UserBlackIconSVG from "@/components/SVG/UserBlackIconSVG";
import { Link } from "react-router-dom";

export default function AuthTopbar() {
  return (
    <nav className="py-3 bg-white relative border border-[#DDEEE8]">
      <Container>
        <Flex>
          <div>
            <Link to={"/"} className="w-full max-w-[150px]">
              <img
                src={Logo}
                alt="Logo"
                className="w-full max-w-full object-contain"
              />
            </Link>
          </div>

          <Flex>
            <div className="size-12 rounded-full">
              <UserBlackIconSVG />
            </div>
          </Flex>
        </Flex>
      </Container>

      <img
        src={NavbarVectorOne}
        alt=""
        className=" absolute right-10 -bottom-3/5 -translate-y-1/2"
      />
    </nav>
  );
}
