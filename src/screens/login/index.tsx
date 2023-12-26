import { useTranslation } from "react-i18next";

import "./css/module.login.css";
import { LoginForm } from "./modules";

const Login = () => {
  const { t } = useTranslation();
  return (
    <section className="login container">
      <div className="login-text">
        <div className="login-text-title">
          <h1 className="login-text-gradient">{t("loginPage.title")}</h1>
          <LoginForm />
        </div>
      </div>
      <div className="login-img">
        <img src="/hero-login.webp" alt="Logo" />
        <div className="login-img-gradient" />
      </div>
    </section>
  );
};

export default Login;
