import React from "react";

export default function Container({ children, className }) {
  return (
    <div className={`w-full max-w-[1400px] mx-auto ${className}`}>
      {children}
    </div>
  );
}
