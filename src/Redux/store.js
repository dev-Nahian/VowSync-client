import { configureStore } from "@reduxjs/toolkit";
import authRegistrationReducer from "./Slices/authRegistrationSlice";
import weddingDataReducer from "./Slices/weddingDataSlice";

export const store = configureStore({
  reducer: {
    authRegistration: authRegistrationReducer,
    weddingData: weddingDataReducer,
  },
});

export default store;
