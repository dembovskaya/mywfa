import { FC } from 'react';
import MainPage from '../components/weatherContainer';
import Grid from "@mui/material/Grid";
import HeadBar from "../components/headBar";

const App: FC = () => {
  return (
    <Grid container>
      <HeadBar />
      <MainPage/>
    </Grid>
  );
}

export default App;
