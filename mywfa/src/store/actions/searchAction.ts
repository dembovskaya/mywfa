import axios from "axios";
import {searchLocationSlice} from "../slices/searchSlice";
import {AppDispatch} from "../index";
import {IParams, ISearchLocation} from "../types";

export const {
  fetchLocation,
  setSearchIsOpen,
  setSearchValue,
} = searchLocationSlice.actions;

export const locationFetch = (city?: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<ISearchLocation[]>(
      'https://api.weatherapi.com/v1/search.json?', {
        params: {
          key: '4371ead6bca843c796f193609222905',
          q: city
        } as IParams
      }
    )
    const asd  = dispatch(fetchLocation(response.data));
    console.log(asd, 'locationFetching')
    console.log(response.data, 'fetchLocation')
  } catch (error: any) {
    console.log(error.message)
  }
}
