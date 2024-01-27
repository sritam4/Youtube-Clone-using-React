import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      if (state.length > 20) {
        state.shift();
      }
      state = state.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
