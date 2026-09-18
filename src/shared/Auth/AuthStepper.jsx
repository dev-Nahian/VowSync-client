import React from "react";

export default function AuthStepper({ step = 1, totalSteps = 7 }) {
  const percentage = Math.min(100, Math.max(10, Math.round((step / totalSteps) * 100)));

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-[#798090] text-sm md:text-base font-semibold font-manrope mb-2">
        <span className="text-[#CF9585] uppercase tracking-wider text-xs">Registration Progress</span>
        <span>
          Step <strong className="text-[#1D1D1F]">{step}</strong> of {totalSteps}
        </span>
      </div>

      <div className="w-full h-3.5 rounded-full bg-[#EFEFEF] overflow-hidden relative">
        <div
          style={{ width: `${percentage}%` }}
          className="h-full rounded-full bg-gradient-to-r from-[#D8B4B8] via-[#EBC9D4] to-[#CF9585] transition-all duration-500 ease-out shadow-sm"
        />
      </div>
    </div>
  );
}
