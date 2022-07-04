import { FC, useEffect } from 'react';
import CurrentWeather from './weatherCurrent';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
import {weatherFetch} from "../../store/actions/weatherAction";

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const {loading, city} = useAppSelector(state => state.weather);

  useEffect(() => {
    dispatch(weatherFetch(city));
  }, [city, dispatch]);

  return (
    <Box>
      <Grid container>
        {loading ? (
          <CircularProgress sx={{ textAlign: "center", mt: 50, ml: "50%" }} />
        ) : (
          <Grid>
            <CurrentWeather/>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default MainPage;
