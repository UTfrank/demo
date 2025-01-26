import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileState } from "@/types/profile.types";

const initialState: ProfileState = {
  profile: {
    username: "",
    minRoi: 0,
    maxRoi: 0,
    balance: 0,
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<Profile>) {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;