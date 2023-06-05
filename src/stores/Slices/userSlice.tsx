import { UserDataProp } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserDataProp = {
  email: "",
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUserData(state, action: PayloadAction<UserDataProp>) {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
  },
});
