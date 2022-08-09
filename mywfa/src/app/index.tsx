import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";
import MapPage from "../components/pages/MapPage";
import FavouritesPage from "../components/pages/FavouritesPage";
import { useAppSelector } from "../hooks";
import { dark, light } from "../theme";
import { ThemeProvider } from "@mui/material";
import Grid from "@mui/material/Grid";

const App: FC = () => {
  const theme = useAppSelector((state) => state.theme.darkMode);
  return (
    <ThemeProvider theme={localStorage.getItem("darkMode") ? dark : light}>
      <Grid
        container
        sx={{ justifyContent: "center", bgcolor: "background.default" }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
