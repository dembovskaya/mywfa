import { Link } from "react-router-dom";
import SignUp from "../authentification/signUp";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";

const RegisterPage = () => {
  const { t } = useTranslation();
  return (
    <Paper sx={{textAlign: 'center', flexDirection: 'column', m: 16, p: 24}}>
      <Typography variant="h4" sx={{mb: 4}}>{t("registerPage")}</Typography >
      <SignUp />
      <Typography>
        {t("account")}
        <Button>
          <Link to="/login">{t("signIn")}</Link>
        </Button>
      </Typography>
    </Paper>
  );
};

export default RegisterPage;
