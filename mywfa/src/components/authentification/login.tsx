import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { setUser } from "../../store/slices/authSlice";
import {useTranslation} from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert(`${t("invalidUser")}`));
  };

  return <Form title={t("signIn")} handleClick={handleLogin} />;
};

export default Login;
