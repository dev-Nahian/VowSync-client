import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setTotalBudget,
  addBudgetItem,
  updateBudgetItem,
  deleteBudgetItem,
} from "@/Redux/Slices/weddingDataSlice";
import toast from "react-hot-toast";

export default function CustomerBudget() {
  const dispatch = useDispatch();
  const wedding = useSelector((state) => state.weddingData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [isEditBudgetOpen, setIsEditBudgetOpen] = useState(false);
  const [newTotalBudget, setNewTotalBudget] = useState(wedding.totalBudget);

  const [formData, setFormData] = useState({
    category: "Venue & Catering",
    name: "",
    allocated: "",
    spent: "",
    status: "Pending",
    paid: false,
  });

  const categories = [
    "Venue & Catering",
    "Photography & Cinema",
    "Bridal Attire & Jewelry",
    "Floral & Stage Decor",
    "Hair & Makeup",
    "Music & Entertainment",
    "Wedding Cake & Favors",
    "Invitations & Stationery",
    "Transportation & Logistics",
    "Other Miscellaneous",
  ];

  const totalAllocated = wedding.budgetItems.reduce((acc, curr) => acc + Number(curr.allocated || 0), 0);
  const totalSpent = wedding.budgetItems.reduce((acc, curr) => acc + Number(curr.spent || 0), 0);
  const remainingBudget = wedding.totalBudget - totalSpent;

  const handleOpenAddModal = () => {
    setEditingItem(null);
    setFormData({
      category: "Venue & Catering",
      name: "",
      allocated: "",
      spent: "",
      status: "Pending",
      paid: false,
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item) => {
    setEditingItem(item);
    setFormData({
      category: item.category,
      name: item.name,
      allocated: item.allocated,
      spent: item.spent,
      status: item.status,
      paid: item.paid,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.allocated) {
      toast.error("Please provide an item name and allocated budget amount");
      return;
    }

    const payload = {
      ...formData,
      allocated: Number(formData.allocated),
      spent: Number(formData.spent || 0),
    };

    if (editingItem) {
      dispatch(updateBudgetItem({ id: editingItem.id, ...payload }));
      toast.success("Budget item updated!");
    } else {
      dispatch(addBudgetItem(payload));
      toast.success("New budget expense added!");
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteBudgetItem(id));
    toast.success("Item removed from budget.");
  };

  const handleSaveTotalBudget = () => {
    dispatch(setTotalBudget(Number(newTotalBudget)));
    setIsEditBudgetOpen(false);
    toast.success("Total budget goal updated!");
  };

  return (
    <div className="space-y-8 font-manrope">
      {/* Header & Overview Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-playfair text-[#1D1D1F]">
            Wedding Budget Planner 💰
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Track allocations, payments, and control wedding expenses in real time.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsEditBudgetOpen(true)}
            className="px-4 py-2.5 bg-white border border-gray-200 text-xs font-bold rounded-xl hover:bg-gray-50 transition-all text-gray-800"
          >
            ✏️ Edit Total Goal
          </button>

          <button
            type="button"
            onClick={handleOpenAddModal}
            className="px-5 py-2.5 bg-[#1D1D1F] text-white text-xs font-bold rounded-xl hover:bg-black transition-all shadow-sm"
          >
            + Add Expense Item
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-3xl border border-[#EFE5E7] shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Budget Goal</span>
          <div className="text-3xl font-bold text-[#1D1D1F] mt-2">
            ${wedding.totalBudget.toLocaleString()}
          </div>
          <p className="text-xs text-gray-500 mt-1">Allocated across {wedding.budgetItems.length} categories: ${totalAllocated.toLocaleString()}</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-[#EFE5E7] shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Spent / Committed</span>
          <div className="text-3xl font-bold text-[#CF9585] mt-2">
            ${totalSpent.toLocaleString()}
          </div>
          <p className="text-xs text-gray-500 mt-1">{Math.round((totalSpent / wedding.totalBudget) * 100)}% of total budget utilized</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-[#EFE5E7] shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Remaining Funds</span>
          <div className={`text-3xl font-bold mt-2 ${remainingBudget >= 0 ? "text-green-600" : "text-red-500"}`}>
            ${remainingBudget.toLocaleString()}
          </div>
          <p className="text-xs text-gray-500 mt-1">{remainingBudget >= 0 ? "Under target limit" : "Budget exceeded!"}</p>
        </div>
      </div>

      {/* Expenses Breakdown Table */}
      <div className="bg-white rounded-3xl border border-[#EFE5E7] shadow-xs overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-bold font-playfair text-[#1D1D1F]">
            Category Expenses & Vendor Allocations
          </h2>
          <span className="text-xs font-bold text-gray-400">
            {wedding.budgetItems.length} Categories
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-[#FAF5F6] text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Category & Service</th>
                <th className="px-6 py-4">Allocated</th>
                <th className="px-6 py-4">Spent / Paid</th>
                <th className="px-6 py-4">Payment Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-manrope">
              {wedding.budgetItems.map((item) => {
                const percent = Math.min(100, Math.round((item.spent / (item.allocated || 1)) * 100));
                return (
                  <tr key={item.id} className="hover:bg-gray-50/70 transition-all">
                    <td className="px-6 py-4">
                      <div className="font-bold text-[#1D1D1F]">{item.name}</div>
                      <div className="text-xs text-gray-400 font-medium">{item.category}</div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-[#1D1D1F]">
                      ${item.allocated.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-[#1D1D1F]">${item.spent.toLocaleString()}</div>
                      <div className="w-24 h-1.5 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
                        <div
                          style={{ width: `${percent}%` }}
                          className={`h-full rounded-full ${percent > 100 ? "bg-red-500" : "bg-[#CF9585]"}`}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        item.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Deposit Paid"
                          ? "bg-blue-100 text-blue-700"
                          : item.status === "Partial"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        type="button"
                        onClick={() => handleOpenEditModal(item)}
                        className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-lg transition-all"
                        title="Edit Item"
                      >
                        ✏️
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete Item"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Add / Edit Item */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b">
              <h3 className="text-xl font-bold font-playfair text-[#1D1D1F]">
                {editingItem ? "Edit Budget Item" : "Add New Expense"}
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-black p-1 text-lg"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Item / Vendor Name</label>
                <input
                  type="text"
                  placeholder="e.g. Wedding Hall Deposit"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-gray-700">Allocated ($)</label>
                  <input
                    type="number"
                    placeholder="5000"
                    value={formData.allocated}
                    onChange={(e) => setFormData({ ...formData, allocated: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-gray-700">Spent / Paid ($)</label>
                  <input
                    type="number"
                    placeholder="2500"
                    value={formData.spent}
                    onChange={(e) => setFormData({ ...formData, spent: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Payment Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white"
                >
                  <option value="Paid">Paid in Full</option>
                  <option value="Deposit Paid">Deposit Paid</option>
                  <option value="Partial">Partial Payment</option>
                  <option value="Pending">Pending / In Discussion</option>
                </select>
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
                  Save Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Edit Total Budget Goal */}
      {isEditBudgetOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl space-y-4">
            <h3 className="text-xl font-bold font-playfair text-[#1D1D1F]">
              Edit Target Budget Goal
            </h3>
            <p className="text-xs text-gray-500">
              Update your overall target wedding expenditure limit.
            </p>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-700">Total Budget ($)</label>
              <input
                type="number"
                value={newTotalBudget}
                onChange={(e) => setNewTotalBudget(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-300 text-lg font-bold text-[#1D1D1F]"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsEditBudgetOpen(false)}
                className="w-1/2 py-2.5 rounded-xl border border-gray-300 font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveTotalBudget}
                className="w-1/2 py-2.5 rounded-xl bg-[#1D1D1F] text-white font-bold hover:bg-black"
              >
                Update Goal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
