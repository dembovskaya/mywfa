import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import WeatherChart from "../weatherChart";
import CircularProgress from "@mui/material/CircularProgress";
import WeatherCity from "../weatherCity";
import "./index.css";

const WeatherCurrent: FC = () => {
  const { location, current } = useAppSelector(
    (state) => state.weather.displayedWeather
  );

  return (
    <Box sx={{ mb: 16 }}>
      {location && current ? (
        <>
          <WeatherCity />
          <Paper sx={{ maxWidth: "lg", m: 4 }}>
            <WeatherChart />
          </Paper>
        </>
      ) : (
        <Paper sx={{ alignItems: "center", p: 16, m: 8, textAlign: "center" }}>
          <CircularProgress />
        </Paper>
      )}
    </Box>
  );
};

export default WeatherCurrent;
