import {useAppSelector} from "../../../hooks";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import VisibilityIcon from '@mui/icons-material/Visibility';
import OpacityIcon from '@mui/icons-material/Opacity';
import CompressIcon from '@mui/icons-material/Compress';
import AirIcon from '@mui/icons-material/Air';
import WeatherForecast from "../weatherForecast";
import WeatherChart from "../weatherChart";
import { FC } from "react";

const WeatherCurrent: FC = () => {
  const { displayedWeather } = useAppSelector(state => state.weather);
  const { forecast } = useAppSelector(state => state.weather.displayedWeather);
  const { location } = displayedWeather;
  const { current } = displayedWeather;
  const list = [
    {
      icon: <VisibilityIcon />,
      weatherData: `${current?.vis_km} km`,
    },
    {
      icon: <OpacityIcon />,
      weatherData: `${current?.precip_mm} humidity, %`,
    },
    {
      icon: <CompressIcon />,
      weatherData: `${current?.pressure_mb} pressure, mbar`,
    },
    {
      icon: <AirIcon />,
      weatherData: `${current?.wind_kph} wind, km/h`,
    },
  ];

  return (
    <Box>
      <Paper sx={{ maxWidth: "md", m: 4 }}>
        <Grid container sx={{ p: 2, pt: 4, alignItems: "center" }}>
          <Grid item sx={{ ml: 2 }}>
            <img src={current?.condition?.icon} alt='weatherIcon'/>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              {current?.temp}
            </Typography>
          </Grid>
          <Divider orientation="vertical" flexItem>
            <Typography variant="h4">
              {location?.name}
            </Typography>
            <Typography variant="h6">
              {location?.localtime}
            </Typography>
          </Divider>
          <List>
            {list.map(({ icon, weatherData }, index) => (
              <ListItem key={index}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={weatherData} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Paper>
      <Paper sx={{ maxWidth: "md", m: 4 }}>
        {forecast?.forecastdays?.map(day =>
          <Grid key={day.date} sx={{ ml: 2 }}>
            <WeatherForecast {...day}/>
          </Grid>
        )}
      </Paper>
      <Paper sx={{ maxWidth: "md", m: 4 }}><WeatherChart /></Paper>
    </Box>
  );
};

export default WeatherCurrent;
