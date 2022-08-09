import axios from "axios";
import { searchLocationSlice } from "../slices/searchSlice";
import { AppDispatch } from "../index";
import { IParams, ISearchLocation } from "../types";
import {
  REACT_APP_API_KEY,
  REACT_APP_API_URL_SEARCH,
} from "../../app/constants";

export const { fetchLocation } = searchLocationSlice.actions;

export const locationFetch =
  (city?: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get<ISearchLocation[]>(
        REACT_APP_API_URL_SEARCH,
        {
          params: {
            key: REACT_APP_API_KEY,
            q: city,
          } as IParams,
        }
      );
      dispatch(fetchLocation(response.data));
    } catch (error: any) {
      console.log(error.message);
    }
  };
