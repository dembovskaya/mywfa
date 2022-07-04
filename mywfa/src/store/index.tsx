import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./slices/weatherSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    search: searchSlice,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
