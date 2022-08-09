import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./slices/weatherSlice";
import searchSlice from "./slices/searchSlice";
import authSlice from "./slices/authSlice";
import themeSlice from "./slices/themeSlice";
import favSlice from "./slices/favSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    search: searchSlice,
    auth: authSlice,
    theme: themeSlice,
    fav: favSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
