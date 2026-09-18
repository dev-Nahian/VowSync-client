import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WeddingInfoCard = () => {
  const reg = useSelector((state) => state.authRegistration);

  const isBride = reg.role === "Bride";
  const yourName = isBride
    ? `${reg.herFirstName || "Nadia"} ${reg.herLastName || "Rahman"}`
    : `${reg.himFirstName || "Ismail"} ${reg.himLastName || "Hossain"}`;

  const partnerName = isBride
    ? `${reg.himFirstName || "Ismail"} ${reg.himLastName || "Hossain"}`
    : `${reg.herFirstName || "Nadia"} ${reg.herLastName || "Rahman"}`;

  const formattedDate =
    reg.weddingDateType === "picked" && reg.weddingDate
      ? reg.weddingDate
      : reg.weddingDateType === "month-year"
      ? `${reg.weddingMonth || "October"} ${reg.weddingYear || "2026"}`
      : "Date Not Decided Yet";

  const locationDisplay =
    reg.locationType === "location"
      ? `${reg.city || "Dhaka"}, ${reg.country || "Bangladesh"}`
      : "Location Still Deciding";

  const stageLabels = {
    "not-engaged": "Planning Proposal",
    "just-engaged": "Just Engaged",
    "venue-booked": "Venue Booked",
    "invites-sent": "Invitations Sent",
  };

  const ceremonyNames = {
    nikah: "Nikah Ceremony",
    walima: "Walima Reception",
    mehendi: "Mehendi / Holud",
    rukhsati: "Rukhsati Farewell",
    "wedding-reception": "Wedding Reception",
    "civil-ceremony": "Civil Ceremony",
    "engagement-party": "Engagement Celebration",
  };

  const ceremoniesList =
    reg.ceremonies && reg.ceremonies.length > 0
      ? reg.ceremonies.map((c) => ceremonyNames[c] || c).join(", ")
      : "Traditional Ceremony & Reception";

  const dietaryList =
    reg.dietaryRequirements && reg.dietaryRequirements.length > 0
      ? reg.dietaryRequirements.map((d) => d.charAt(0).toUpperCase() + d.slice(1)).join(", ")
      : "Standard Menu";

  return (
    <div className="w-full mx-auto bg-white rounded-3xl p-6 md:p-8 font-manrope shadow-md border border-[#EFE5E7]">
      {/* Your Information */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#121117] font-manrope flex items-center gap-2">
            <span>👤</span> Your Information
          </h2>
          <Link
            to="/auth/about-info"
            className="text-xs font-bold text-[#CF9585] hover:underline uppercase tracking-wider"
          >
            Edit
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 bg-[#FDF8F9] p-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-500">Your Role:</span>
            <span className="font-semibold text-[#1D1D1F]">
              {reg.role || "Bride"} {isBride ? "👰‍♀️" : "🤵‍♂️"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-500">Full Name:</span>
            <span className="font-semibold text-[#1D1D1F]">{yourName}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-500">Email:</span>
            <span className="font-semibold text-[#1D1D1F] truncate max-w-[180px]">{reg.email || "couple@wedding.com"}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-500">Phone:</span>
            <span className="font-semibold text-[#1D1D1F]">{reg.phoneNo || "+1 (555) 000-0000"}</span>
          </div>
        </div>
      </section>

      <hr className="border-gray-100 my-6" />

      {/* Partner Information */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#121117] font-manrope flex items-center gap-2">
            <span>💍</span> Partner Information
          </h2>
          <Link
            to="/auth/about-info"
            className="text-xs font-bold text-[#CF9585] hover:underline uppercase tracking-wider"
          >
            Edit
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 bg-[#FDF8F9] p-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-500">Partner Role:</span>
            <span className="font-semibold text-[#1D1D1F]">
              {isBride ? "Groom 🤵‍♂️" : "Bride 👰‍♀️"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-500">Partner's Name:</span>
            <span className="font-semibold text-[#1D1D1F]">{partnerName}</span>
          </div>

          <div className="flex items-center justify-between col-span-1 sm:col-span-2">
            <span className="font-medium text-gray-500">Collaboration Status:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-green-700 font-semibold text-xs">Invite Ready to Send</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-100 my-6" />

      {/* Wedding & Ceremony Details */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#121117] font-manrope flex items-center gap-2">
            <span>🎉</span> Wedding & Celebration Overview
          </h2>
          <Link
            to="/auth/weeding-planning-in-details"
            className="text-xs font-bold text-[#CF9585] hover:underline uppercase tracking-wider"
          >
            Edit
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 bg-[#FDF8F9] p-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-500">Wedding Date:</span>
            <span className="font-semibold text-[#1D1D1F]">{formattedDate}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-500">Location:</span>
            <span className="font-semibold text-[#1D1D1F]">{locationDisplay}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-500">Expected Guests:</span>
            <span className="font-semibold text-[#1D1D1F]">{reg.guestRange || "151-200"}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-500">Planning Stage:</span>
            <span className="font-semibold text-[#1D1D1F]">
              {stageLabels[reg.planningStage] || "Just Engaged"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-500">Target Budget:</span>
            <span className="font-semibold text-[#1D1D1F]">{reg.budgetRange || "$40,000 - $75,000"}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-500">Dietary Needs:</span>
            <span className="font-semibold text-[#1D1D1F]">{dietaryList}</span>
          </div>

          <div className="col-span-1 sm:col-span-2 pt-2 border-t border-gray-200/50">
            <span className="font-medium text-gray-500 block mb-1">Ceremonies Selected:</span>
            <p className="font-semibold text-[#1D1D1F] text-xs md:text-sm">{ceremoniesList}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingInfoCard;
