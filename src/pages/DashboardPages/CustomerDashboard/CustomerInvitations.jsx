import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInvitation } from "@/Redux/Slices/weddingDataSlice";
import toast from "react-hot-toast";

export default function CustomerInvitations() {
  const dispatch = useDispatch();
  const reg = useSelector((state) => state.authRegistration);
  const invite = useSelector((state) => state.weddingData.invitation);

  const [formData, setFormData] = useState({
    title: invite.title || "The Wedding Celebration of",
    welcomeNote: invite.welcomeNote || "Together with their families, invite you to share in their joy as they celebrate their marriage.",
    ceremonyName: invite.ceremonyName || "Nikah & Grand Wedding Reception",
    ceremonyDate: invite.ceremonyDate || "Saturday, October 24, 2026",
    ceremonyTime: invite.ceremonyTime || "6:30 PM - 11:30 PM",
    venueAddress: invite.venueAddress || "Grand Imperial Ballroom, Plot 14, Gulshan Avenue, Dhaka",
    dressCode: invite.dressCode || "Traditional Formal / Elegant Black Tie",
    rsvpDeadline: invite.rsvpDeadline || "October 01, 2026",
  });

  const coupleNames = `${reg.herFirstName || "Nadia"} & ${reg.himFirstName || "Ismail"}`;

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateInvitation(formData));
    toast.success("Digital Invitation card details updated!");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://wedelogy.com/invites/nadia-and-ismail-2026");
    toast.success("💌 Shareable invitation link copied to clipboard!");
  };

  return (
    <div className="space-y-8 font-manrope">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-playfair text-[#1D1D1F]">
            Digital Wedding Invitation Suite 💌
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Design, preview, and share your digital wedding invitation card with your guest list.
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopyLink}
          className="px-5 py-2.5 bg-[#1D1D1F] text-white text-xs font-bold rounded-xl hover:bg-black transition-all shadow-sm"
        >
          🔗 Copy Shareable Invite Link
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Live Invitation Preview Card (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md bg-gradient-to-b from-[#FFFDF9] via-[#FAF3EC] to-[#FFF9F5] rounded-3xl p-8 border-4 border-[#E6C8A5] shadow-xl text-center relative overflow-hidden flex flex-col justify-between min-h-[580px]">
            {/* Elegant Corner Filigree Accents */}
            <div className="absolute top-3 left-3 text-[#CF9585] text-xl opacity-60">⚜️</div>
            <div className="absolute top-3 right-3 text-[#CF9585] text-xl opacity-60">⚜️</div>
            <div className="absolute bottom-3 left-3 text-[#CF9585] text-xl opacity-60">⚜️</div>
            <div className="absolute bottom-3 right-3 text-[#CF9585] text-xl opacity-60">⚜️</div>

            <div className="space-y-4 pt-2">
              <span className="text-xs uppercase tracking-widest text-[#CF9585] font-bold font-manrope">
                {formData.title}
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#1D1D1F] leading-tight my-2">
                {coupleNames}
              </h2>

              <p className="text-xs text-gray-600 font-manrope italic max-w-xs mx-auto leading-relaxed">
                "{formData.welcomeNote}"
              </p>
            </div>

            <div className="my-6 py-5 border-y border-[#E6C8A5]/60 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-[#EBC9D4]/40 text-[#1D1D1F] text-xs font-bold font-manrope">
                {formData.ceremonyName}
              </span>

              <div className="text-base font-bold text-[#1D1D1F] font-playfair">
                {formData.ceremonyDate}
              </div>

              <div className="text-xs font-semibold text-gray-600 font-manrope">
                ⏰ {formData.ceremonyTime}
              </div>

              <div className="text-xs text-gray-700 font-manrope max-w-xs mx-auto pt-1">
                📍 {formData.venueAddress}
              </div>
            </div>

            <div className="space-y-2 pb-2">
              <div className="text-xs text-gray-600 font-manrope">
                <strong>Dress Code:</strong> {formData.dressCode}
              </div>
              <div className="text-xs text-[#CF9585] font-bold font-manrope">
                RSVP Requested by {formData.rsvpDeadline}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Invitation Customizer Editor (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE5E7] shadow-xs">
          <div className="mb-6 pb-4 border-b border-gray-100">
            <h2 className="text-lg font-bold font-playfair text-[#1D1D1F]">
              Customize Card Details & Schedule
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Live edits will be reflected on your invitation card preview and online RSVP link.
            </p>
          </div>

          <form onSubmit={handleSave} className="space-y-4 text-sm">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Invitation Card Headline
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="px-3.5 py-2.5 rounded-xl border border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Welcome Message / Blessing Note
              </label>
              <textarea
                rows={2}
                value={formData.welcomeNote}
                onChange={(e) => setFormData({ ...formData, welcomeNote: e.target.value })}
                className="px-3.5 py-2.5 rounded-xl border border-gray-300"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                  Ceremony / Event Name
                </label>
                <input
                  type="text"
                  value={formData.ceremonyName}
                  onChange={(e) => setFormData({ ...formData, ceremonyName: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                  Ceremony Date
                </label>
                <input
                  type="text"
                  value={formData.ceremonyDate}
                  onChange={(e) => setFormData({ ...formData, ceremonyDate: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                  Event Timing
                </label>
                <input
                  type="text"
                  value={formData.ceremonyTime}
                  onChange={(e) => setFormData({ ...formData, ceremonyTime: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                  RSVP Deadline
                </label>
                <input
                  type="text"
                  value={formData.rsvpDeadline}
                  onChange={(e) => setFormData({ ...formData, rsvpDeadline: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Venue Location & Full Address
              </label>
              <input
                type="text"
                value={formData.venueAddress}
                onChange={(e) => setFormData({ ...formData, venueAddress: e.target.value })}
                className="px-3.5 py-2.5 rounded-xl border border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Dress Code Recommendation
              </label>
              <input
                type="text"
                value={formData.dressCode}
                onChange={(e) => setFormData({ ...formData, dressCode: e.target.value })}
                className="px-3.5 py-2.5 rounded-xl border border-gray-300"
              />
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3 bg-[#1D1D1F] text-white font-bold text-sm rounded-xl hover:bg-black transition-all shadow-md"
              >
                Save & Update Digital Invitation Card
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
