import { createSlice } from "@reduxjs/toolkit";

interface FavState {
  idFav: null | string;
  fav: [];
}

const initialState: FavState = {
  idFav: null,
  fav: []
};

export const favSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    setFav(state, action) {
      state.idFav = action.payload.idFav;
      state.fav = action.payload;
      sessionStorage.setItem("idFav", state.idFav as string);
    },
    removeFav(state) {
      state.idFav = null;
      state.fav = [];
      sessionStorage.removeItem("idFav");
    },
  },
});

export const { setFav, removeFav } = favSlice.actions;
export default favSlice.reducer;
