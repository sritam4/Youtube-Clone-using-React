import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    mainContainerMargin: "ml-44",
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
      state.mainContainerMargin = state.isMenuOpen ? "ml-44" : "ml-0";
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
      state.mainContainerMargin = "0";
    },
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
