import React, {FormEvent, useState} from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {useAppDispatch, useMobile} from "../../../hooks";
import {locationFetch, setSearchValue} from "../../../store/actions/searchAction";
import {selectCity} from "../../../store/actions/weatherAction";

const SearchBar = () => {
  const isMobile = useMobile();
  const dispatch = useAppDispatch();
  const [city, setCity] = useState("");

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      return "Please enter the location!";
    }
    dispatch(setSearchValue(city));
    dispatch(selectCity(city));
    dispatch(locationFetch(city));
    setCity("");
  };

  return (
    <Grid sx={{ ml: "auto" }}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Select your region"
          value={city}
          onChange={changeHandler}
        />
        {!isMobile &&
        <IconButton sx={{ color: "#FCA311" }}>
          <SearchIcon />
        </IconButton>}
      </form>
    </Grid>
  );
};

export default SearchBar;
