import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};


export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      if (state.darkMode) {
        localStorage.setItem("darkMode", 'true');
      } else {
        localStorage.removeItem("darkMode");
      }
    },
  },
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;
