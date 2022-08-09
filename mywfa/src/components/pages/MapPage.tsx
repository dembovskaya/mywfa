import { FC, useEffect } from "react";
import HeadBar from "../headBar";
import BottomNavigation from "../bottomNavigation";
import Grid from "@mui/material/Grid";
import { REACT_APP_MAP_URL } from "../../app/constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { weatherFetch } from "../../store/actions/weatherAction";

const MapPage: FC = () => {
  const dispatch = useAppDispatch();
  const location = useAppSelector((state) => state.weather.weather.location);
  const { city } = useAppSelector((state) => state.weather);
  const degree = useAppSelector((state) => state.weather.isCel);

  useEffect(() => {
    dispatch(weatherFetch(city));
  }, [city, dispatch]);

  return (
    <Grid container sx={{ my: 16, mx: 8, width: '100vh', height: '100vh' }}>
      <HeadBar />
      <iframe
        width="100%"
        src={`${REACT_APP_MAP_URL}lat=${location?.lat}&lon=${
          location?.lon
        }&zoom=11&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=12&pressure=&type=map&location=coordinates&detail=&metricWind=m%2Fs&metricTemp=%C2%B0${
          degree ? "C" : "F"
        }&radarRange=-1`}
      ></iframe>
      <BottomNavigation />
    </Grid>
  );
};

export default MapPage;
