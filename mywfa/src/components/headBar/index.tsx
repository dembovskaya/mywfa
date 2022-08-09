import { MouseEvent, FC, useState } from "react";
import { useAppDispatch, useMobile } from "../../hooks";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchBar from "./searchBar";
import DegreesUnit from "./degreesUnit";
import Grid from "@mui/material/Grid";
import { AccountCircle } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { removeUser } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import { toggleTheme } from "../../store/slices/themeSlice";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const HeadBar: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null);
  const isMobile = useMobile();
  const { email } = sessionStorage;
  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (event: MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };
  const changeLanguageClose = (event: MouseEvent<HTMLElement>) => {
    setAnchorElLang(null);
  };

  return (
    <AppBar sx={{ boxShadow: "none", flexGrow: 1, position: "fixed" }}>
      <Toolbar sx={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            sx={{ display: { xs: "none", sm: "block" }, mx: 2 }}
            onClick={() => dispatch(toggleTheme())}
          >
            {localStorage.getItem("darkMode") ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>
          {!isMobile && <Typography variant="h6">{t("logo")}</Typography>}
        </Grid>
        <SearchBar />
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <DegreesUnit isCelUnit unit={"°C"} />
          <DegreesUnit isCelUnit={false} unit={"°F"} />
        </Grid>
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <Grid>
            <IconButton
              sx={{ mx: 2 }}
              color="inherit"
              aria-haspopup="true"
              onClick={changeLanguage}
            >
              <LanguageIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElLang}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElLang)}
              onClose={changeLanguageClose}
            >
              <MenuItem onClick={() => i18n.changeLanguage("ru")}>
                {t("ru")}
              </MenuItem>
              <MenuItem onClick={() => i18n.changeLanguage("en")}>
                {t("en")}
              </MenuItem>
            </Menu>
          </Grid>
          {auth && (
            <Grid>
              <IconButton
                size="large"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    dispatch(removeUser());
                    navigate("/login");
                  }}
                >
                  {t("logOut")} {email}
                </MenuItem>
              </Menu>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default HeadBar;
