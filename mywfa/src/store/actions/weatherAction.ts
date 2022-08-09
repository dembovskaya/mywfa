import axios from "axios";
import { weatherSlice } from "../slices/weatherSlice";
import { AppDispatch } from "../index";
import { IParams, IWeather } from "../types";
import {
  REACT_APP_API_KEY,
  REACT_APP_API_URL_FORESACT,
} from "../../app/constants";

export const {
  fetchWeather,
  fetchWeatherError,
  fetchWeatherSuccess,
  selectTempUnit,
  selectCity,
} = weatherSlice.actions;

export const weatherFetch =
  (city?: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchWeather());
      const response = await axios.get<IWeather>(REACT_APP_API_URL_FORESACT, {
        params: {
          key: REACT_APP_API_KEY,
          q: city,
          lang: "en",
          days: 3,
          aqi: "yes",
          alerts: "yes",
        } as IParams,
      });
      dispatch(fetchWeatherSuccess(response.data));
    } catch (error: any) {
      dispatch(fetchWeatherError(error.message));
    }
  };
