import React, { useState } from "react";
import AiIconSVG from "../SVG/AiIconSVG";
import { SparklesText } from "@/components/ui/sparkles-text";
import AIChatModal from "./AIChatModal";

export default function LetsChatFloatingButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-8 right-8 z-40 py-3 px-8 rounded-full text-white text-base md:text-lg font-salsa inline-flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl cursor-pointer"
        style={{
          background: "linear-gradient(90deg, #CC8F7F 0%, #EAC4B8 100%)",
          boxShadow:
            "0 8px 24px rgba(204, 143, 127, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.4)",
        }}
      >
        <SparklesText className="flex! items-center gap-2">
          <span>Let's Chat</span>
          <div className="size-6 shrink-0">
            <AiIconSVG />
          </div>
        </SparklesText>
      </button>

      <AIChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
