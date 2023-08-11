import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    listBook: [],
  },
  reducers: {
    setBook(state, action) {
      state.listBook = action.payload;
    },
  },
});

export const { setBook } = user.actions;
export default user.reducer;
