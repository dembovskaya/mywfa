import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {displayedData} from "../../conversion";
import {IDisplayedWeather, IWeather} from "../types";

interface WeatherState {
  weather: IWeather;
  displayedWeather: IDisplayedWeather;
  isCel: boolean;
  loading: boolean;
  city?: string;
  error: string;
  forecastDetails: string;
}

const initialState: WeatherState = {
  weather: {},
  displayedWeather: {},
  isCel: true,
  loading: false,
  city: '',
  forecastDetails: '',
  error: '',
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeather(state){
      state.loading = true;
      state.displayedWeather = {};
      state.error = '';
    },
    fetchWeatherSuccess(state, action: PayloadAction<IWeather>){
      state.loading = false;
      state.error = '';
      state.weather = action.payload;
      state.displayedWeather = displayedData(
        state.weather,
        state.isCel,
        state.weather.forecast?.forecastday[0].date
      );
    },
    selectCity(state, action: PayloadAction<string>){
      state.city = action.payload;
    },
    selectTempUnit(state, action: PayloadAction<boolean>){
      state.isCel = action.payload;
      state.displayedWeather = displayedData(
        state.weather,
        state.isCel,
        state.displayedWeather.forecast?.dayOfForecast
      );

    },
    fetchWeatherError(state, action: PayloadAction<string>){
      state.loading = false;
      state.error = action.payload;
    },
  }
})

export default weatherSlice.reducer;
