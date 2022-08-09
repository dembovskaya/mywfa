import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import HeadBar from "../headBar";
import BottomNavigationLabel from "../bottomNavigation";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

const FavouritesPage = () => {
  // @ts-ignore
  const favList = JSON.parse(localStorage.getItem("fav"));

  return (
    <Grid container sx={{ my: 16, mx: 8, width: "100vh", height: "100vh" }}>
      <HeadBar />
      <Paper
        sx={{ textAlign: "center", flexDirection: "column", m: 16, p: 24 }}
      >
        <List>
          {favList.map((el: any) => (
            <ListItem>
              <ListItemText primary={el} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <BottomNavigationLabel />
    </Grid>
  );
};

export default FavouritesPage;
