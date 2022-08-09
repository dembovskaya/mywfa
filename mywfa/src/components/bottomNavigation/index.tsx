import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const BottomNavigationLabel = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("recents");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        height: "60px",
        width: "100%",
      }}
    >
      <BottomNavigationAction
        value="home"
        icon={<HomeIcon />}
        onClick={() => {
          navigate("/");
        }}
      />
      <BottomNavigationAction
        value="favorites"
        icon={<FavoriteIcon />}
        onClick={() => {
          navigate("/favourites");
        }}
      />
      <BottomNavigationAction
        value="map"
        icon={<LocationOnIcon />}
        onClick={() => {
          navigate("/map");
        }}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationLabel;
