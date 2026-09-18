import React from "react";

export default function Flex({ children, className }) {
  return (
    <div className={`${className} flex items-center justify-between gap-6`}>
      {children}
    </div>
  );
}
