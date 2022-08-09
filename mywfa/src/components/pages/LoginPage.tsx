import { Link } from "react-router-dom";
import Login from "../authentification/login";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <Paper sx={{ textAlign: "center", flexDirection: "column", m: 16, p: 24 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        {t("loginPage")}
      </Typography>
      <Login />
      <Button>
        <Link to="/register">{t("register")}</Link>
      </Button>
    </Paper>
  );
};

export default LoginPage;
