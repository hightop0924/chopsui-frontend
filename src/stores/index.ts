import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    // mint: mintSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { createUserData } = userSlice.actions;
