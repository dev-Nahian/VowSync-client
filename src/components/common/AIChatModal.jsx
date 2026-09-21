import React, { useState, useRef, useEffect } from "react";
import AiIconSVG from "../SVG/AiIconSVG";
import toast from "react-hot-toast";

export default function AIChatModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! ✨ I am your personal VowSync AI Wedding Concierge. How can I help you plan your dream wedding today?",
      time: "Just now",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "📅 Generate a 12-Month Wedding Timeline",
    "💰 Estimate Budget for 180 Guests",
    "💐 Suggest Stage Decor Themes for Mehendi",
    "✍️ Help Me Write Romantic Bride Vows",
    "🍽️ Recommended Halal Menu for 200 Guests",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg = {
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsTyping(true);

    // AI Simulated Intelligent Response Logic
    setTimeout(() => {
      let aiReply = "";
      const lower = text.toLowerCase();

      if (lower.includes("timeline") || lower.includes("12-month")) {
        aiReply = `💍 Here is your recommended Wedding Planning Timeline:
• Months 10-12: Book reception venue, hire primary cinema & photo team.
• Months 6-9: Finalize catering menu, stage floral styling, and order bridal attire.
• Months 3-5: Send digital invitations, book hair & makeup artist, order cake.
• Months 1-2: Finalize seating chart, confirm final RSVP headcount with caterer.
• Week of Wedding: Rehearsal dinner, beauty prep, and relax!`;
      } else if (lower.includes("budget") || lower.includes("cost")) {
        aiReply = `💰 For a wedding with ~180 guests (estimated $45,000 - $60,000 budget):
• Venue & Banquets (40%): $18,000 - $24,000
• Catering & Cuisine (25%): $11,250 - $15,000 (~$65-$85/plate)
• Photography & Cinema (12%): $5,400 - $7,200
• Floral & Stage Decor (10%): $4,500 - $6,000
• Bridal & Groom Attire (8%): $3,600 - $4,800
• Music & Entertainment (5%): $2,250 - $3,000`;
      } else if (lower.includes("vow") || lower.includes("speech")) {
        aiReply = `✍️ Here is a heartfelt vow template for your ceremony:
"From the moment we first shared a dream, I knew my heart had found its true home. Today, surrounded by the people we cherish most, I promise to stand by your side through every joy and storm, to celebrate your victories, comfort your sorrow, and love you unconditionally for all the days of our lives."`;
      } else if (lower.includes("mehendi") || lower.includes("decor") || lower.includes("theme")) {
        aiReply = `💐 Top trending Mehendi & Holud themes:
1. Royal Marigold & Terracotta: Golden hues, brass pots, and hanging fresh jasmine.
2. Bohemian Pastel Garden: Lavender, peach roses, fairy light canopies, and wicker seating.
3. Mughal Palace Extravaganza: Velvet drapes, jewel-toned cushions, and intricate floral arches.`;
      } else if (lower.includes("menu") || lower.includes("catering") || lower.includes("food")) {
        aiReply = `🍽️ Curated Wedding Banquet Menu for 200 Guests:
• Starters: Murgh Malai Tikka, Crispy Vegetable Samosas with mint chutney.
• Main Course: Royal Kacchi Biryani with Borhani, Butter Chicken, Shahi Paneer, and Garlic Naan.
• Desserts: Live Jalebi & Rabri station, Gulab Jamun, and Artisanal Ice Cream.`;
      } else {
        aiReply = `✨ That's a wonderful wedding question! Based on top wedding planning best practices, we recommend organizing this milestone in your Customer Dashboard. Would you like me to generate a custom budget breakdown or recommend top-rated vendors for this?`;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiReply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-end sm:p-6 bg-black/30 backdrop-blur-xs font-manrope">
      <div className="bg-white w-full sm:w-[440px] h-[85vh] sm:h-[620px] rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#EFE5E7] animate-in slide-in-from-bottom-5 duration-300">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-[#1D1D1F] via-[#2E2E33] to-[#1D1D1F] text-white p-4.5 flex items-center justify-between shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#CF9585] text-white flex items-center justify-center p-2 shadow-sm">
              <AiIconSVG />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm font-playfair">VowSync AI Concierge</h3>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              </div>
              <p className="text-[11px] text-gray-300 font-manrope">24/7 Intelligent Wedding Planner</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-white/10 text-gray-300 hover:text-white transition-all cursor-pointer text-lg"
          >
            ✕
          </button>
        </div>

        {/* Quick Prompts Carousel */}
        <div className="bg-[#FFF9F5] p-3 border-b border-[#F6ECEE] flex items-center gap-2 overflow-x-auto scrollbar-none shrink-0">
          <span className="text-[10px] font-bold uppercase text-[#CF9585] tracking-wider shrink-0 pl-1">
            Try:
          </span>
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSendMessage(prompt.replace(/^[^\w]+/, ""))}
              className="px-3 py-1 bg-white border border-[#EBC9D4] rounded-full text-xs text-[#1D1D1F] font-semibold whitespace-nowrap hover:bg-[#FCECEE] transition-all cursor-pointer shrink-0"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#FCF8F8]">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-xs ${
                  msg.sender === "user"
                    ? "bg-[#1D1D1F] text-white rounded-tr-none"
                    : "bg-white text-gray-800 border border-[#EFE5E7] rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.time}</span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-gray-400 bg-white p-3 rounded-2xl border border-gray-100 w-max">
              <span className="w-2 h-2 rounded-full bg-[#CF9585] animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-[#CF9585] animate-bounce delay-100"></span>
              <span className="w-2 h-2 rounded-full bg-[#CF9585] animate-bounce delay-200"></span>
              <span>AI is thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-3 bg-white border-t border-gray-200 flex items-center gap-2 shrink-0"
        >
          <input
            type="text"
            placeholder="Ask anything about budgets, vendors, vows, or timelines..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#CF9585]"
          />
          <button
            type="submit"
            disabled={!inputMessage.trim()}
            className="p-2.5 bg-[#1D1D1F] text-white rounded-xl hover:bg-black disabled:opacity-40 transition-all cursor-pointer shrink-0"
          >
            <svg className="w-4 h-4 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
