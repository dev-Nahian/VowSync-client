import React from "react";

export default function Copyright() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #CC8F7F 0%, #EAC4B8 100%)",
      }}
      className="w-full py-5 text-center text-[#1D1D1F] text-sm font-manrope"
    >
      &copy; {new Date().getFullYear()} WeddingPlatform. All rights reserved.
    </div>
  );
}
