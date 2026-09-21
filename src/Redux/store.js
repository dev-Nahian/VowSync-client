import { configureStore } from "@reduxjs/toolkit";
import authRegistrationReducer from "./Slices/authRegistrationSlice";
import weddingDataReducer from "./Slices/weddingDataSlice";
import vendorsReducer from "./Slices/vendorsSlice";

export const store = configureStore({
  reducer: {
    authRegistration: authRegistrationReducer,
    weddingData: weddingDataReducer,
    vendors: vendorsReducer,
  },
});

export default store;
