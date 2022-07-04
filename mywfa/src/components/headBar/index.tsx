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
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const HeadBar: FC = () => {
  const isMobile = useMobile();

  return (
    <Box>
    <AppBar sx={{bgcolor: '#14213d', color: '#fca311'}}>
      <Toolbar>
        <IconButton>
          <LightModeIcon sx={{color: '#fca311'}}/>
        </IconButton>
        {!isMobile && <Typography variant="h6">WEATHER FORECAST</Typography>}
        <SearchBar/>
        <Grid sx={{px: 2}}>
        <DegreesUnit isCelUnit={true} unit={'°C'}/>
        <DegreesUnit isCelUnit={false} unit={'°F'}/>
        </Grid>
        {!isMobile &&
          <TimeLocal/>}
      </Toolbar>
    </AppBar>
      </Box>
  );
};

export default HeadBar;
