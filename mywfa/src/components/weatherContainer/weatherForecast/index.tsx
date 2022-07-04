import {FC} from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {convertDate} from "../../../conversion";

interface DailyForecastProps {
  date?: string;
  day?: DayProps;
}
interface DayProps {
  condition?: ConditionProps;
  maxtemp?: string;
  mintemp?: string;
}
interface ConditionProps {
  icon?: string;
  text?: string;
}

const WeatherForecast: FC<DailyForecastProps> = ({date, day}) => {
  const list = [
    {
      icon: <img src={day?.condition?.icon} alt=" "/>,
      date: `${convertDate(date!)}`,
      maxTemp: `${day?.maxtemp}`,
      minTemp: `${day?.mintemp}`,
    },
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List>
        {list.map(({ icon, date, maxTemp, minTemp }, index) => (
          <ListItem key={index}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{date}</ListItemText>
            <ListItemText>{maxTemp}/{minTemp}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default WeatherForecast;
