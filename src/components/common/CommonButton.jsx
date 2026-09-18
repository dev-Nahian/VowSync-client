import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonIconLightSVG from "../SVG/ButtonIconLightSVG";
import ButtonIconDarkSVG from "../SVG/ButtonIconDarkSVG";

export default function CommonButton({
  children,
  className = "",
  onClick,
  type = "button",
  disabled,
  link,
  varient = "light",
  showIcon = true,
  ...props
}) {
  const navigate = useNavigate();

  const baseClasses = `
    ${className}
    ${varient === "dark" ? "bg-[#1D1D1F] text-white hover:bg-black" : "bg-primary text-black hover:bg-[#dfb5c2]"}
    inline-flex items-center gap-3 px-8 py-4 rounded-2xl 
    text-lg font-salsa hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const Icon =
    varient === "dark" ? <ButtonIconLightSVG /> : <ButtonIconDarkSVG />;

  if (link === -1 || link === "back") {
    return (
      <button
        type="button"
        className={baseClasses}
        onClick={(e) => {
          if (onClick) onClick(e);
          navigate(-1);
        }}
        disabled={disabled}
        {...props}
      >
        {children}
        {showIcon && <div className="size-7 shrink-0">{Icon}</div>}
      </button>
    );
  }

  if (link && typeof link === "string") {
    return (
      <Link to={link} className={baseClasses} {...props}>
        {children}
        {showIcon && <div className="size-7 shrink-0">{Icon}</div>}
      </Link>
    );
  }

  return (
    <button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
      {showIcon && <div className="size-7 shrink-0">{Icon}</div>}
    </button>
  );
}
