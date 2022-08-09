import { CSSTransition } from "react-transition-group";
import Paper from "@mui/material/Paper";
import Favourite from "../favButton";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import WeatherForecast from "../weatherForecast";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../hooks";
import { FC, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompressIcon from "@mui/icons-material/Compress";
import AirIcon from "@mui/icons-material/Air";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import Graph from "../graphButton";

const WeatherCity: FC = () => {
  const { t } = useTranslation();
  const { location, current, forecast } = useAppSelector(
    (state) => state.weather.displayedWeather
  );
  const [showMessage, setShowMessage] = useState(true);
  const list = [
    {
      icon: <VisibilityIcon />,
      weatherData: `${current?.vis_km} ${t("visibility")}`,
    },
    {
      icon: <CompressIcon />,
      weatherData: `${current?.pressure_mb} ${t("pressure")}`,
    },
    {
      icon: <AirIcon />,
      weatherData: `${current?.wind_kph} ${t("wind")}`,
    },
    {
      icon: <AccessibilityNewIcon />,
      weatherData: `${current?.feelslike} ${t("feelsLike")}`,
    },
  ];

  return (
    <CSSTransition
      in={showMessage}
      timeout={300}
      mountOnEnter
      appear
      classNames="alert"
      unmountOnExit
    >
      <Paper sx={{ maxWidth: "lg", m: 4, transitionDelay: "5s" }}>
        <Favourite id={location?.name} city={current?.temp} />
        <Graph id={location?.name} />
        <IconButton onClick={() => setShowMessage(false)}>
          <RemoveCircleOutlineIcon />
        </IconButton>
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item sx={{ ml: 4 }}>
            <img src={current?.condition?.icon} alt="weatherIcon" />
          </Grid>
          <Grid item>
            <Typography variant="h3">{current?.temp}</Typography>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }}>
            <Typography variant="h4">{location?.name}</Typography>
            <Typography variant="h6">{location?.localtime}</Typography>
          </Divider>
          <List>
            {list.map(({ icon, weatherData }, index) => (
              <ListItem key={index}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={weatherData} />
              </ListItem>
            ))}
          </List>
          <List>
            {forecast?.forecastdays?.map((day) => (
              <Grid key={day.date}>
                <WeatherForecast {...day} />
              </Grid>
            ))}
          </List>
        </Grid>
      </Paper>
    </CSSTransition>
  );
};

export default WeatherCity;
