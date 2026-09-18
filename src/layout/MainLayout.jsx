import LetsChatFloatingButton from "@/components/common/LetsChatFloatingButton";
import Copyright from "@/shared/Landing/Copyright";
import Footer from "@/shared/Landing/Footer";
import Navbar from "@/shared/Landing/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <Copyright />

      <LetsChatFloatingButton />
    </div>
  );
}
