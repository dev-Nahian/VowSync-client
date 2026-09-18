import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGuest, updateGuest, deleteGuest } from "@/Redux/Slices/weddingDataSlice";
import toast from "react-hot-toast";

export default function CustomerGuestList() {
  const dispatch = useDispatch();
  const wedding = useSelector((state) => state.weddingData);

  const [filterRsvp, setFilterRsvp] = useState("All");
  const [filterSide, setFilterSide] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingGuest, setEditingGuest] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    side: "Bride",
    email: "",
    phone: "",
    count: 1,
    rsvp: "Awaiting",
    table: "Table 1 (Family)",
    dietary: "Halal",
  });

  const totalInvitedCount = wedding.guests.reduce((acc, curr) => acc + Number(curr.count || 1), 0);
  const attendingCount = wedding.guests
    .filter((g) => g.rsvp === "Attending")
    .reduce((acc, curr) => acc + Number(curr.count || 1), 0);
  const declinedCount = wedding.guests
    .filter((g) => g.rsvp === "Declined")
    .reduce((acc, curr) => acc + Number(curr.count || 1), 0);
  const awaitingCount = wedding.guests
    .filter((g) => g.rsvp === "Awaiting")
    .reduce((acc, curr) => acc + Number(curr.count || 1), 0);

  const filteredGuests = wedding.guests.filter((guest) => {
    const matchesRsvp = filterRsvp === "All" || guest.rsvp === filterRsvp;
    const matchesSide = filterSide === "All" || guest.side === filterSide;
    const matchesSearch =
      guest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guest.table.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (guest.email && guest.email.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRsvp && matchesSide && matchesSearch;
  });

  const handleOpenAddModal = () => {
    setEditingGuest(null);
    setFormData({
      name: "",
      side: "Bride",
      email: "",
      phone: "",
      count: 1,
      rsvp: "Awaiting",
      table: "Table 1 (Family)",
      dietary: "Halal",
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (guest) => {
    setEditingGuest(guest);
    setFormData({
      name: guest.name,
      side: guest.side,
      email: guest.email || "",
      phone: guest.phone || "",
      count: guest.count,
      rsvp: guest.rsvp,
      table: guest.table,
      dietary: guest.dietary,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error("Please provide a guest or family name");
      return;
    }

    const payload = {
      ...formData,
      count: Number(formData.count || 1),
    };

    if (editingGuest) {
      dispatch(updateGuest({ id: editingGuest.id, ...payload }));
      toast.success("Guest details updated!");
    } else {
      dispatch(addGuest(payload));
      toast.success("Guest added to the wedding list!");
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteGuest(id));
    toast.success("Guest removed.");
  };

  return (
    <div className="space-y-8 font-manrope">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-playfair text-[#1D1D1F]">
            Guest List & RSVP Manager 👥
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Organize invitations, dietary requirements, table seating, and track RSVP confirmations.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenAddModal}
          className="px-5 py-2.5 bg-[#1D1D1F] text-white text-xs font-bold rounded-xl hover:bg-black transition-all shadow-sm self-start sm:self-auto"
        >
          + Add New Guest / Party
        </button>
      </div>

      {/* RSVP Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-[#EFE5E7] shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Headcount</span>
          <div className="text-2xl font-bold text-[#1D1D1F] mt-1">{totalInvitedCount} Guests</div>
          <p className="text-[11px] text-gray-500">{wedding.guests.length} invitation parties</p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#EFE5E7] shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-green-600">Attending</span>
          <div className="text-2xl font-bold text-green-600 mt-1">{attendingCount} Confirmed</div>
          <p className="text-[11px] text-gray-500">{Math.round((attendingCount / (totalInvitedCount || 1)) * 100)}% of total</p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#EFE5E7] shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Awaiting Response</span>
          <div className="text-2xl font-bold text-amber-600 mt-1">{awaitingCount} Pending</div>
          <p className="text-[11px] text-gray-500">Need follow up</p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#EFE5E7] shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Declined</span>
          <div className="text-2xl font-bold text-rose-600 mt-1">{declinedCount} Regrets</div>
          <p className="text-[11px] text-gray-500">Seats available</p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-3xl border border-[#EFE5E7] shadow-xs flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="w-full sm:w-72 relative">
          <input
            type="text"
            placeholder="Search by guest, table, or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-9 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#CF9585]"
          />
          <span className="absolute left-3 top-2.5 text-gray-400 text-xs">🔍</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {/* Side Filter */}
          <div className="flex bg-gray-100 p-1 rounded-xl text-xs font-semibold">
            {["All", "Bride", "Groom"].map((side) => (
              <button
                key={side}
                type="button"
                onClick={() => setFilterSide(side)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filterSide === side ? "bg-white text-[#1D1D1F] shadow-xs font-bold" : "text-gray-500"
                }`}
              >
                {side === "All" ? "All Sides" : side}
              </button>
            ))}
          </div>

          {/* RSVP Filter */}
          <div className="flex bg-gray-100 p-1 rounded-xl text-xs font-semibold">
            {["All", "Attending", "Awaiting", "Declined"].map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setFilterRsvp(status)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filterRsvp === status ? "bg-white text-[#1D1D1F] shadow-xs font-bold" : "text-gray-500"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Guest Table */}
      <div className="bg-white rounded-3xl border border-[#EFE5E7] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-[#FAF5F6] text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Guest / Family Name</th>
                <th className="px-6 py-4">Party Size</th>
                <th className="px-6 py-4">Side</th>
                <th className="px-6 py-4">Table Seating</th>
                <th className="px-6 py-4">Dietary Preference</th>
                <th className="px-6 py-4">RSVP Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-manrope">
              {filteredGuests.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center text-gray-400">
                    No guests found matching the selected filters.
                  </td>
                </tr>
              ) : (
                filteredGuests.map((guest) => (
                  <tr key={guest.id} className="hover:bg-gray-50/70 transition-all">
                    <td className="px-6 py-4">
                      <div className="font-bold text-[#1D1D1F]">{guest.name}</div>
                      <div className="text-xs text-gray-400 font-medium">{guest.email || guest.phone || "No contact info"}</div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-[#1D1D1F]">
                      {guest.count} {guest.count === 1 ? "Person" : "People"}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        guest.side === "Bride" ? "bg-pink-50 text-pink-700" : "bg-blue-50 text-blue-700"
                      }`}>
                        {guest.side}'s Side
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-gray-600">
                      {guest.table}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
                        {guest.dietary || "Standard"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        guest.rsvp === "Attending"
                          ? "bg-green-100 text-green-700"
                          : guest.rsvp === "Declined"
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-700"
                      }`}>
                        {guest.rsvp}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        type="button"
                        onClick={() => handleOpenEditModal(guest)}
                        className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-lg transition-all"
                        title="Edit Guest"
                      >
                        ✏️
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(guest.id)}
                        className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete Guest"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Guest Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b">
              <h3 className="text-xl font-bold font-playfair text-[#1D1D1F]">
                {editingGuest ? "Edit Guest Information" : "Add New Guest / Party"}
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-black p-1 text-lg"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-sm">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Guest or Family Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Tariq Ahmed & Family"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-gray-700">Affiliation Side</label>
                  <select
                    value={formData.side}
                    onChange={(e) => setFormData({ ...formData, side: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white"
                  >
                    <option value="Bride">Bride's Side</option>
                    <option value="Groom">Groom's Side</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-gray-700">Party Count (Seats)</label>
                  <input
                    type="number"
                    min="1"
                    value={formData.count}
                    onChange={(e) => setFormData({ ...formData, count: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-gray-700">RSVP Status</label>
                  <select
                    value={formData.rsvp}
                    onChange={(e) => setFormData({ ...formData, rsvp: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white"
                  >
                    <option value="Attending">Attending</option>
                    <option value="Awaiting">Awaiting Response</option>
                    <option value="Declined">Declined</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-gray-700">Table Assignment</label>
                  <input
                    type="text"
                    placeholder="e.g. Table 1 (Family)"
                    value={formData.table}
                    onChange={(e) => setFormData({ ...formData, table: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Dietary Requirements</label>
                <input
                  type="text"
                  placeholder="e.g. Halal, Vegetarian, Gluten-Free"
                  value={formData.dietary}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="guest@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-gray-700">Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-1/2 py-2.5 rounded-xl border border-gray-300 font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2.5 rounded-xl bg-[#1D1D1F] text-white font-bold hover:bg-black"
                >
                  Save Guest
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
