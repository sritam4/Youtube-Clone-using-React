import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    key: [],
  },
  reducers: {
    saveSuggestions: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { saveSuggestions } = searchSlice.actions;
export default searchSlice.reducer;
