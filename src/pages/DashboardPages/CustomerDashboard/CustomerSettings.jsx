import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAboutInfo, updateWeddingDay, updateWeddingPlace } from "@/Redux/Slices/authRegistrationSlice";
import toast from "react-hot-toast";

export default function CustomerSettings() {
  const dispatch = useDispatch();
  const reg = useSelector((state) => state.authRegistration);

  const [formData, setFormData] = useState({
    himFirstName: reg.himFirstName || "",
    himLastName: reg.himLastName || "",
    herFirstName: reg.herFirstName || "",
    herLastName: reg.herLastName || "",
    phoneNo: reg.phoneNo || "",
    email: reg.email || "",
    weddingDate: reg.weddingDate || "2026-10-24",
    city: reg.city || "Dhaka",
    country: reg.country || "Bangladesh",
  });

  const [notifications, setNotifications] = useState({
    rsvpAlerts: true,
    budgetReminders: true,
    vendorOffers: false,
    checklistDeadlines: true,
  });

  const handleSaveProfile = (e) => {
    e.preventDefault();
    dispatch(
      updateAboutInfo({
        himFirstName: formData.himFirstName,
        himLastName: formData.himLastName,
        herFirstName: formData.herFirstName,
        herLastName: formData.herLastName,
        phoneNo: formData.phoneNo,
        email: formData.email,
      })
    );
    dispatch(
      updateWeddingDay({
        weddingDateType: "picked",
        weddingDate: formData.weddingDate,
      })
    );
    dispatch(
      updateWeddingPlace({
        locationType: "location",
        city: formData.city,
        country: formData.country,
      })
    );
    toast.success("Wedding profile settings updated!");
  };

  return (
    <div className="space-y-8 font-manrope">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold font-playfair text-[#1D1D1F]">
          Wedding Settings & Account Profile ⚙️
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your couple information, wedding date, collaboration access, and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Settings (2 cols) */}
        <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE5E7] shadow-xs">
          <h2 className="text-lg font-bold font-playfair text-[#1D1D1F] mb-6 pb-3 border-b">
            Couple Profile & Wedding Logistics
          </h2>

          <form onSubmit={handleSaveProfile} className="space-y-4 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Bride / Partner First Name</label>
                <input
                  type="text"
                  value={formData.herFirstName}
                  onChange={(e) => setFormData({ ...formData, herFirstName: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Bride / Partner Last Name</label>
                <input
                  type="text"
                  value={formData.herLastName}
                  onChange={(e) => setFormData({ ...formData, herLastName: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Groom / Partner First Name</label>
                <input
                  type="text"
                  value={formData.himFirstName}
                  onChange={(e) => setFormData({ ...formData, himFirstName: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Groom / Partner Last Name</label>
                <input
                  type="text"
                  value={formData.himLastName}
                  onChange={(e) => setFormData({ ...formData, himLastName: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Primary Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Primary Phone</label>
                <input
                  type="tel"
                  value={formData.phoneNo}
                  onChange={(e) => setFormData({ ...formData, phoneNo: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Wedding Date</label>
                <input
                  type="date"
                  value={formData.weddingDate}
                  onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">City / Town</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Country</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                />
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3 bg-[#1D1D1F] text-white font-bold text-sm rounded-xl hover:bg-black transition-all shadow-md"
              >
                Save Profile Changes
              </button>
            </div>
          </form>
        </div>

        {/* Notifications & Collaboration (1 col) */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-[#EFE5E7] shadow-xs">
            <h3 className="text-lg font-bold font-playfair text-[#1D1D1F] mb-4 pb-2 border-b">
              Notification Preferences
            </h3>

            <div className="space-y-3 text-sm">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-700">Real-time RSVP Alerts</span>
                <input
                  type="checkbox"
                  checked={notifications.rsvpAlerts}
                  onChange={(e) => setNotifications({ ...notifications, rsvpAlerts: e.target.checked })}
                  className="w-4 h-4 rounded text-[#CF9585] focus:ring-[#CF9585]"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-700">Budget Limit Alerts</span>
                <input
                  type="checkbox"
                  checked={notifications.budgetReminders}
                  onChange={(e) => setNotifications({ ...notifications, budgetReminders: e.target.checked })}
                  className="w-4 h-4 rounded text-[#CF9585] focus:ring-[#CF9585]"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-700">Checklist Due Reminders</span>
                <input
                  type="checkbox"
                  checked={notifications.checklistDeadlines}
                  onChange={(e) => setNotifications({ ...notifications, checklistDeadlines: e.target.checked })}
                  className="w-4 h-4 rounded text-[#CF9585] focus:ring-[#CF9585]"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-700">Special Vendor Discounts</span>
                <input
                  type="checkbox"
                  checked={notifications.vendorOffers}
                  onChange={(e) => setNotifications({ ...notifications, vendorOffers: e.target.checked })}
                  className="w-4 h-4 rounded text-[#CF9585] focus:ring-[#CF9585]"
                />
              </label>
            </div>
          </div>

          <div className="bg-[#FFF0F3] p-6 rounded-3xl border border-[#FAD7E0]">
            <h3 className="text-lg font-bold font-playfair text-[#1D1D1F] mb-2">
              Export Plan Data 📊
            </h3>
            <p className="text-xs text-gray-600 mb-4 font-manrope">
              Download your complete guest list, vendor contacts, and budget expenses as a printable summary.
            </p>

            <button
              type="button"
              onClick={() => toast.success("📁 Wedding plan data exported to PDF/CSV summary!")}
              className="w-full py-2.5 bg-white border border-[#EBC9D4] text-[#1D1D1F] text-xs font-bold rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
            >
              📥 Export Wedding Plan (PDF)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
