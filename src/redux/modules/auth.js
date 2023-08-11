import { createSlice } from "@reduxjs/toolkit";

export const authV1 = createSlice({
  name: "authV1",
  initialState: {
    auth: false,
  },
  reducers: {
    setAuth(state, action) {
      state.auth = action.payload;
    },
  },
});

export const { setAuth } = authV1.actions;
export default authV1.reducer;
