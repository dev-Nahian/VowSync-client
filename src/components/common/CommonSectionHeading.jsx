import React from "react";

export default function CommonSectionHeading({
  title,
  description,
  className,
}) {
  return (
    <div className={`${className}`}>
      <h3 className="text-[#1D1D1F] text-4xl font-salsa">{title}</h3>
      {description && (
        <p className="text-[#6A7283] w-full max-w-[501px] mx-auto text-center justify-start text-Neutral-N200 text-lg font-manrope leading-7 mt-6">
          {description}
        </p>
      )}
    </div>
  );
}
