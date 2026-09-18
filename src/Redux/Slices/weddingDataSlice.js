import { createSlice } from "@reduxjs/toolkit";

const WEDDING_DATA_STORAGE_KEY = "wedelogy_wedding_data";

const loadInitialWeddingData = () => {
  try {
    const saved = localStorage.getItem(WEDDING_DATA_STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error("Failed to load wedding data from localStorage", e);
  }

  return {
    totalBudget: 60000,
    budgetItems: [
      { id: "1", category: "Venue & Catering", name: "Grand Imperial Hall Ballroom", allocated: 22000, spent: 20500, paid: true, status: "Paid" },
      { id: "2", category: "Photography & Cinema", name: "Eternal Memories Studio", allocated: 6500, spent: 3000, paid: false, status: "Deposit Paid" },
      { id: "3", category: "Bridal Attire & Jewelry", name: "Royal Silk & Haute Couture", allocated: 7500, spent: 7200, paid: true, status: "Paid" },
      { id: "4", category: "Floral & Stage Decor", name: "Blossom & Dream Styling", allocated: 8000, spent: 4000, paid: false, status: "Partial" },
      { id: "5", category: "Hair & Makeup", name: "Glamour Glow Bridal Studio", allocated: 2500, spent: 1000, paid: false, status: "Deposit Paid" },
      { id: "6", category: "Music & Entertainment", name: "Symphony Strings & Live DJ", allocated: 3500, spent: 0, paid: false, status: "Pending" },
      { id: "7", category: "Wedding Cake & Favors", name: "Sweet Elegance Bakery", allocated: 1800, spent: 900, paid: false, status: "Deposit Paid" },
      { id: "8", category: "Invitations & Stationery", name: "Prestige Luxe Printables", allocated: 1200, spent: 1200, paid: true, status: "Paid" },
    ],
    guests: [
      { id: "g1", name: "Farhan & Ayesha Ahmed", side: "Groom", email: "farhan@example.com", phone: "+1 555-111-2222", count: 2, rsvp: "Attending", table: "Table 1 (Family)", dietary: "Halal" },
      { id: "g2", name: "Dr. Tariq Rahman & Family", side: "Bride", email: "tariq@example.com", phone: "+1 555-333-4444", count: 4, rsvp: "Attending", table: "Table 2 (VIP)", dietary: "Halal, Diabetic" },
      { id: "g3", name: "Zubair & Samira Khan", side: "Groom", email: "zubair@example.com", phone: "+1 555-555-6666", count: 2, rsvp: "Attending", table: "Table 3 (Friends)", dietary: "Halal" },
      { id: "g4", name: "Elena Rostova", side: "Bride", email: "elena@example.com", phone: "+1 555-777-8888", count: 1, rsvp: "Attending", table: "Table 4 (Colleagues)", dietary: "Vegetarian" },
      { id: "g5", name: "Kamran & Fatima Siddique", side: "Groom", email: "kamran@example.com", phone: "+1 555-999-0000", count: 2, rsvp: "Declined", table: "Unassigned", dietary: "Halal" },
      { id: "g6", name: "Marcus Chen", side: "Bride", email: "marcus@example.com", phone: "+1 555-222-3333", count: 2, rsvp: "Awaiting", table: "Table 4 (Colleagues)", dietary: "Gluten-free" },
      { id: "g7", name: "Uncle Rafiq & Family", side: "Bride", email: "rafiq@example.com", phone: "+1 555-444-5555", count: 3, rsvp: "Attending", table: "Table 1 (Family)", dietary: "Halal" },
      { id: "g8", name: "Sofia & Liam Johnson", side: "Bride", email: "sofia@example.com", phone: "+1 555-666-7777", count: 2, rsvp: "Awaiting", table: "Table 3 (Friends)", dietary: "Vegan" },
    ],
    checklist: [
      { id: "c1", category: "10-12 Months Before", title: "Determine wedding budget & guest count breakdown", completed: true, dueDate: "2026-02-15" },
      { id: "c2", category: "10-12 Months Before", title: "Book primary wedding ceremony & reception venue", completed: true, dueDate: "2026-03-01" },
      { id: "c3", category: "6-9 Months Before", title: "Hire photographer, videographer & drone cinema", completed: true, dueDate: "2026-05-10" },
      { id: "c4", category: "6-9 Months Before", title: "Finalize theme, color palette & floral designer", completed: true, dueDate: "2026-06-20" },
      { id: "c5", category: "3-5 Months Before", title: "Order custom bridal & groom wedding attire", completed: true, dueDate: "2026-07-15" },
      { id: "c6", category: "3-5 Months Before", title: "Select catering menu tasting & dietary options", completed: false, dueDate: "2026-08-10" },
      { id: "c7", category: "1-2 Months Before", title: "Send digital & printed wedding invitations", completed: false, dueDate: "2026-09-01" },
      { id: "c8", category: "1-2 Months Before", title: "Finalize seating chart & table arrangements", completed: false, dueDate: "2026-09-20" },
      { id: "c9", category: "2 Weeks Before", title: "Conduct hair & makeup trial run", completed: false, dueDate: "2026-10-05" },
      { id: "c10", category: "Week of Wedding", title: "Final RSVP confirmation with venue & caterer", completed: false, dueDate: "2026-10-18" },
    ],
    vendors: [
      {
        id: "v1",
        name: "Grand Imperial Hall & Gardens",
        category: "Venue / Banquet",
        rating: 4.9,
        reviewsCount: 142,
        city: "Dhaka",
        quote: "$22,000",
        status: "Booked",
        contactPerson: "Sarah Khan (Event Manager)",
        phone: "+1 555-890-1234",
        email: "events@grandimperial.com",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "v2",
        name: "Eternal Moments Photography & Film",
        category: "Photography & Cinema",
        rating: 5.0,
        reviewsCount: 98,
        city: "Dhaka",
        quote: "$6,500",
        status: "Booked",
        contactPerson: "David Miller",
        phone: "+1 555-456-7890",
        email: "contact@eternalmoments.com",
        image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "v3",
        name: "Blossom & Dream Floral Design",
        category: "Floral & Decor",
        rating: 4.8,
        reviewsCount: 76,
        city: "Dhaka",
        quote: "$8,000",
        status: "Contract Pending",
        contactPerson: "Maria Lopez",
        phone: "+1 555-789-0123",
        email: "hello@blossomdream.com",
        image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "v4",
        name: "Savor Delights Gourmet Catering",
        category: "Catering",
        rating: 4.9,
        reviewsCount: 110,
        city: "Dhaka",
        quote: "$14,500",
        status: "Inquired",
        contactPerson: "Chef Tariq",
        phone: "+1 555-321-6540",
        email: "chef@savordelights.com",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
      },
    ],
    invitation: {
      template: "royal-gold",
      title: "The Wedding Celebration of",
      welcomeNote: "Together with their families, invite you to share in their joy as they celebrate their marriage.",
      ceremonyName: "Nikah & Grand Wedding Reception",
      ceremonyDate: "Saturday, October 24, 2026",
      ceremonyTime: "6:30 PM - 11:30 PM",
      venueAddress: "Grand Imperial Ballroom, Plot 14, Gulshan Avenue, Dhaka",
      dressCode: "Traditional Formal / Elegant Black Tie",
      rsvpDeadline: "October 01, 2026",
    },
  };
};

const initialWeddingState = loadInitialWeddingData();

const saveWeddingState = (state) => {
  try {
    localStorage.setItem(WEDDING_DATA_STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save wedding data to localStorage", e);
  }
};

export const weddingDataSlice = createSlice({
  name: "weddingData",
  initialState: initialWeddingState,
  reducers: {
    setTotalBudget: (state, action) => {
      state.totalBudget = action.payload;
      saveWeddingState(state);
    },
    addBudgetItem: (state, action) => {
      state.budgetItems.push({
        id: Date.now().toString(),
        ...action.payload,
      });
      saveWeddingState(state);
    },
    updateBudgetItem: (state, action) => {
      const index = state.budgetItems.findIndex((b) => b.id === action.payload.id);
      if (index !== -1) {
        state.budgetItems[index] = { ...state.budgetItems[index], ...action.payload };
        saveWeddingState(state);
      }
    },
    deleteBudgetItem: (state, action) => {
      state.budgetItems = state.budgetItems.filter((b) => b.id !== action.payload);
      saveWeddingState(state);
    },
    addGuest: (state, action) => {
      state.guests.push({
        id: "g_" + Date.now().toString(),
        ...action.payload,
      });
      saveWeddingState(state);
    },
    updateGuest: (state, action) => {
      const index = state.guests.findIndex((g) => g.id === action.payload.id);
      if (index !== -1) {
        state.guests[index] = { ...state.guests[index], ...action.payload };
        saveWeddingState(state);
      }
    },
    deleteGuest: (state, action) => {
      state.guests = state.guests.filter((g) => g.id !== action.payload);
      saveWeddingState(state);
    },
    toggleChecklistTask: (state, action) => {
      const task = state.checklist.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveWeddingState(state);
      }
    },
    addChecklistTask: (state, action) => {
      state.checklist.push({
        id: "c_" + Date.now().toString(),
        completed: false,
        ...action.payload,
      });
      saveWeddingState(state);
    },
    deleteChecklistTask: (state, action) => {
      state.checklist = state.checklist.filter((t) => t.id !== action.payload);
      saveWeddingState(state);
    },
    addBookedVendor: (state, action) => {
      state.vendors.push({
        id: "v_" + Date.now().toString(),
        ...action.payload,
      });
      saveWeddingState(state);
    },
    updateVendorStatus: (state, action) => {
      const { id, status } = action.payload;
      const vendor = state.vendors.find((v) => v.id === id);
      if (vendor) {
        vendor.status = status;
        saveWeddingState(state);
      }
    },
    updateInvitation: (state, action) => {
      state.invitation = { ...state.invitation, ...action.payload };
      saveWeddingState(state);
    },
  },
});

export const {
  setTotalBudget,
  addBudgetItem,
  updateBudgetItem,
  deleteBudgetItem,
  addGuest,
  updateGuest,
  deleteGuest,
  toggleChecklistTask,
  addChecklistTask,
  deleteChecklistTask,
  addBookedVendor,
  updateVendorStatus,
  updateInvitation,
} = weddingDataSlice.actions;

export default weddingDataSlice.reducer;
