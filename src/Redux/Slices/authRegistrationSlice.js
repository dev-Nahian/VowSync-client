import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "wedelogy_registration_data";

const loadInitialState = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error("Failed to load saved registration from localStorage", e);
  }
  return {
    role: "Bride", // 'Bride' or 'Groom'
    himFirstName: "Ismail",
    himLastName: "Hossain",
    herFirstName: "Nadia",
    herLastName: "Rahman",
    phoneNo: "+1 (555) 234-5678",
    email: "nadia.ismail@wedding.com",
    weddingDateType: "picked", // 'picked' | 'month-year' | 'not-sure'
    weddingDate: "2026-10-24",
    weddingMonth: "October",
    weddingYear: "2026",
    locationType: "location", // 'location' | 'not-sure'
    country: "Bangladesh",
    city: "Dhaka",
    guestRange: "151-200",
    planningStage: "just-engaged", // 'not-engaged' | 'just-engaged' | 'venue-booked' | 'invites-sent'
    religiousAffiliation: "islamic",
    dietaryRequirements: ["halal", "vegetarian"],
    otherDietaryNotes: "",
    ceremonies: ["nikah", "walima", "mehendi", "rukhsati"],
    budgetRange: "$40,000 - $75,000",
    isRegistered: false,
    partnerInviteSent: true,
  };
};

const initialState = loadInitialState();

const saveState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save registration state to localStorage", e);
  }
};

export const authRegistrationSlice = createSlice({
  name: "authRegistration",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
      saveState(state);
    },
    updateAboutInfo: (state, action) => {
      const { himFirstName, himLastName, herFirstName, herLastName, phoneNo, email } = action.payload;
      if (himFirstName !== undefined) state.himFirstName = himFirstName;
      if (himLastName !== undefined) state.himLastName = himLastName;
      if (herFirstName !== undefined) state.herFirstName = herFirstName;
      if (herLastName !== undefined) state.herLastName = herLastName;
      if (phoneNo !== undefined) state.phoneNo = phoneNo;
      if (email !== undefined) state.email = email;
      saveState(state);
    },
    updateWeddingDay: (state, action) => {
      const { weddingDateType, weddingDate, weddingMonth, weddingYear } = action.payload;
      if (weddingDateType !== undefined) state.weddingDateType = weddingDateType;
      if (weddingDate !== undefined) state.weddingDate = weddingDate;
      if (weddingMonth !== undefined) state.weddingMonth = weddingMonth;
      if (weddingYear !== undefined) state.weddingYear = weddingYear;
      saveState(state);
    },
    updateWeddingPlace: (state, action) => {
      const { locationType, country, city } = action.payload;
      if (locationType !== undefined) state.locationType = locationType;
      if (country !== undefined) state.country = country;
      if (city !== undefined) state.city = city;
      saveState(state);
    },
    updateWeddingGuests: (state, action) => {
      state.guestRange = action.payload;
      saveState(state);
    },
    updatePlanningStage: (state, action) => {
      state.planningStage = action.payload;
      saveState(state);
    },
    updatePlanningDetails: (state, action) => {
      const { religiousAffiliation, dietaryRequirements, otherDietaryNotes, ceremonies, budgetRange } = action.payload;
      if (religiousAffiliation !== undefined) state.religiousAffiliation = religiousAffiliation;
      if (dietaryRequirements !== undefined) state.dietaryRequirements = dietaryRequirements;
      if (otherDietaryNotes !== undefined) state.otherDietaryNotes = otherDietaryNotes;
      if (ceremonies !== undefined) state.ceremonies = ceremonies;
      if (budgetRange !== undefined) state.budgetRange = budgetRange;
      saveState(state);
    },
    completeRegistration: (state) => {
      state.isRegistered = true;
      saveState(state);
    },
    resetRegistration: (state) => {
      const reset = loadInitialState();
      Object.assign(state, reset);
      saveState(state);
    },
  },
});

export const {
  setRole,
  updateAboutInfo,
  updateWeddingDay,
  updateWeddingPlace,
  updateWeddingGuests,
  updatePlanningStage,
  updatePlanningDetails,
  completeRegistration,
  resetRegistration,
} = authRegistrationSlice.actions;

export default authRegistrationSlice.reducer;
