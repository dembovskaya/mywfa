import React, { FormEvent, useState } from "react";
import Grid from "@mui/material/Grid";
import { useAppDispatch } from "../../../hooks";
import { selectCity } from "../../../store/actions/weatherAction";
import {useTranslation} from "react-i18next";

const SearchBar = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [city, setCity] = useState("");
  const styles = {
    input: {
      padding: "12px",
      borderRadius: "20px",
      width: "130%",
    },
  };
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      return "Please enter the location!";
    }
    dispatch(selectCity(city));
    setCity("");
  };

  return (
    <Grid sx={{ mr: 6 }}>
      <form onSubmit={submitHandler}>
        <input
          style={styles.input}
          type="text"
          placeholder={t("search")}
          value={city}
          onChange={changeHandler}
        />
      </form>
    </Grid>
  );
};

export default SearchBar;
