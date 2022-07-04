import axios from "axios";
import {weatherSlice} from "../slices/weatherSlice";
import {AppDispatch} from "../index";
import {IParams, IWeather} from "../types";

export const {
  fetchWeather,
  fetchWeatherError,
  fetchWeatherSuccess,
  selectTempUnit,
  selectCity,
} = weatherSlice.actions;

export const weatherFetch = (city?: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchWeather());
    const response = await axios.get<IWeather>(
      'https://api.weatherapi.com/v1/forecast.json?', {
        params: {
          key: 'd7aea0e2854b443ca7a222149223006',
          q: city,
          lang: 'en',
          days: 3,
          aqi: 'yes',
          alerts: 'yes'
        } as IParams
      }
    );
    setTimeout(async ()  => {
      dispatch(fetchWeatherSuccess(response.data));
    }, 500);
  } catch (error: any) {
    dispatch(fetchWeatherError(error.message));
  }
}
