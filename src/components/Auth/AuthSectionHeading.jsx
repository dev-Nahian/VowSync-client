import React from "react";

export default function AuthSectionHeading({ title, description, className }) {
  return (
    <div className={`${className}`}>
      <h2 className="text-[#121117] text-3xl font-semibold font-manrope mb-3">
        {title}
      </h2>
      <p className="text-[#5B6477] text-lg font-manrope">{description}</p>
    </div>
  );
}
