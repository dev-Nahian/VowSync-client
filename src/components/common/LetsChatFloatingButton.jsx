import React from "react";
import { Link } from "react-router-dom";
import AiIconSVG from "../SVG/AiIconSVG";
import { SparklesText } from "@/components/ui/sparkles-text";

export default function LetsChatFloatingButton() {
  return (
    <Link
      to="#"
      className="fixed bottom-10 right-10 z-999 py-3 px-10 rounded-2xl text-white text-lg font-salsa inline-flex items-center gap-3 hover:opacity-80 transition-all"
      style={{
        background: "linear-gradient(90deg, #CC8F7F 0%, #EAC4B8 100%)",
        boxShadow:
          "0 4px 4px rgba(0, 0, 0, 0.25), inset 0 4px 12px rgba(207, 149, 133, 0.20)",
      }}
    >
      <SparklesText className={"flex!"}>
        Let's Chat
        <div className="size-[25px]">
          <AiIconSVG />
        </div>
      </SparklesText>
    </Link>
  );
}
