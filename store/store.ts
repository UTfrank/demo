import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./slice/transactionSlice";
import profileReducer from "./slice/profileSlice";

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    profile: profileReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;