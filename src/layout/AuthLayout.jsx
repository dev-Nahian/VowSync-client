import AuthTopbar from "@/shared/Auth/AuthTopbar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <AuthTopbar />
      <Outlet />
    </div>
  );
}
