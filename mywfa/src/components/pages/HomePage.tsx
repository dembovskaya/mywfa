import { Navigate } from "react-router-dom";
import { checkIsLoggedIn } from "../../hooks";
import HeadBar from "../headBar";
import MainPage from "../weatherContainer";
import BottomNavigationLabel from "../bottomNavigation";
import Grid from "@mui/material/Grid";

const HomePage = () => {
  const loggedIn = checkIsLoggedIn();
  return loggedIn ? (
    <Grid sx={{ mt: 8, width: '100vh', height: '100vh' }}>
      <HeadBar />
      <MainPage />
      <BottomNavigationLabel />
    </Grid>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
