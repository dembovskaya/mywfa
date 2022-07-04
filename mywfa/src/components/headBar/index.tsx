import { FC } from 'react';
import {useMobile} from '../../hooks';
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LightModeIcon from "@mui/icons-material/LightMode";
import TimeLocal from "./timeLocal";
import SearchBar from "./searchBar";
import DegreesUnit from "./degreesUnit";

const HeadBar: FC = () => {
  const isMobile = useMobile();

  return (
    <AppBar color="primary">
      <Toolbar>
        <IconButton>
          <LightModeIcon/>
        </IconButton>
        {!isMobile && <Typography variant="h6">WEATHER FORECAST</Typography>}
        <SearchBar/>
        <DegreesUnit isCelUnit={true} unit={'°C'}/>
        <DegreesUnit isCelUnit={false} unit={'°F'}/>
        <TimeLocal/>
      </Toolbar>
    </AppBar>
  );
};

export default HeadBar;
