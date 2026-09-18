import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleChecklistTask,
  addChecklistTask,
  deleteChecklistTask,
} from "@/Redux/Slices/weddingDataSlice";
import toast from "react-hot-toast";

export default function CustomerChecklist() {
  const dispatch = useDispatch();
  const wedding = useSelector((state) => state.weddingData);

  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    category: "3-5 Months Before",
    title: "",
    dueDate: "2026-08-01",
  });

  const categories = [
    "All",
    "10-12 Months Before",
    "6-9 Months Before",
    "3-5 Months Before",
    "1-2 Months Before",
    "2 Weeks Before",
    "Week of Wedding",
  ];

  const completedCount = wedding.checklist.filter((t) => t.completed).length;
  const totalCount = wedding.checklist.length;
  const percentComplete = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const filteredTasks = wedding.checklist.filter((task) => {
    if (activeCategory === "All") return true;
    return task.category === activeCategory;
  });

  const handleToggle = (id) => {
    dispatch(toggleChecklistTask(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteChecklistTask(id));
    toast.success("Task removed from checklist.");
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!formData.title) {
      toast.error("Please enter a task description");
      return;
    }
    dispatch(addChecklistTask(formData));
    toast.success("New checklist milestone added!");
    setIsModalOpen(false);
    setFormData({ category: "3-5 Months Before", title: "", dueDate: "2026-08-01" });
  };

  return (
    <div className="space-y-8 font-manrope">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-playfair text-[#1D1D1F]">
            Wedding Checklist & Timeline 📅
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Stay on schedule with your tailored countdown planning milestones.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2.5 bg-[#1D1D1F] text-white text-xs font-bold rounded-xl hover:bg-black transition-all shadow-sm self-start sm:self-auto"
        >
          + Add Custom Task
        </button>
      </div>

      {/* Progress Banner */}
      <div className="bg-white p-6 rounded-3xl border border-[#EFE5E7] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
            Overall Progress
          </span>
          <h3 className="text-2xl font-bold text-[#1D1D1F]">
            {completedCount} of {totalCount} Milestones Done ({percentComplete}%)
          </h3>
          <p className="text-xs text-gray-500">
            {totalCount - completedCount} tasks remaining before your wedding day
          </p>
        </div>

        <div className="w-full sm:w-64">
          <div className="w-full h-3.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              style={{ width: `${percentComplete}%` }}
              className="h-full bg-gradient-to-r from-[#D8B4B8] via-[#EBC9D4] to-[#CF9585] rounded-full transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Category Timeline Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeCategory === cat
                ? "bg-[#1D1D1F] text-white shadow-xs"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tasks List */}
      <div className="bg-white rounded-3xl border border-[#EFE5E7] shadow-xs p-6 divide-y divide-gray-100">
        {filteredTasks.length === 0 ? (
          <div className="py-12 text-center text-gray-400 text-sm">
            No checklist tasks found for this timeline phase.
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4 hover:bg-gray-50/50 rounded-xl px-2 transition-all"
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggle(task.id)}
                  className="w-5 h-5 rounded-lg border-gray-300 text-[#CF9585] focus:ring-[#CF9585] cursor-pointer"
                />

                <div>
                  <p
                    className={`text-sm md:text-base font-semibold transition-all ${
                      task.completed ? "line-through text-gray-400" : "text-[#1D1D1F]"
                    }`}
                  >
                    {task.title}
                  </p>
                  <span className="text-xs text-gray-400 font-medium">
                    {task.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100 hidden sm:inline-block">
                  Due: {task.dueDate}
                </span>

                <button
                  type="button"
                  onClick={() => handleDelete(task.id)}
                  className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all text-sm"
                  title="Delete Task"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Task Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b">
              <h3 className="text-xl font-bold font-playfair text-[#1D1D1F]">
                Add Custom Task Milestone
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-black p-1 text-lg"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddTask} className="space-y-4 text-sm">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Timeline Phase</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white"
                >
                  {categories.filter((c) => c !== "All").map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Task Title *</label>
                <input
                  type="text"
                  placeholder="e.g. Schedule bridal henna trial"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Target Due Date</label>
                <input
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-300"
                />
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
                  Add Milestone
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
