import { useTranslation } from "react-i18next";
import { useState } from "react";
import { EyeSlash, Eye } from "../../Assets/SVGS.js";
import axios from "axios";
// import i18n from "../../LanguageTranslation/i18";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import LanguageButtons from "../../Components/LanguageButtons/LanguageButtons.js";

function Login() {
  const nav = useNavigate("");
  const { t } = useTranslation(); // Get the translation function from i18next
  const [pass, showPass] = useState(false);
  const [mailValue, setMailValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const [loader , setLoader] = useState(false)

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(passValue, mailValue);
    
    if(!mailValue){
      toast.error("Email is required")
      return
    }
    if(!passValue){
      toast.error("Password is required")
      return
    }
    setLoader(true)
    axios
      .post("https://xproject.shaarapp.com/api/admin/login", {
        password: passValue,
        email: mailValue,
      })
      .then((res) => {
        if (res.data?.data?.token) {
          console.log("there is a token");
          // Store token in localStorage;
          localStorage.setItem("token", res.data.data.token);
          nav("/user");
        }
        setLoader(false)
      })
      .catch((error) => {
        toast.error("You do not have an account")
        console.log("Login error:", error.response?.data || error.message);
        // alert("You do not have an account");
        localStorage.removeItem("token");
        setLoader(false)
      });
  };

  const handleClick = () => {
    showPass(!pass);
  };

  return (
    <div className="login-container">
      <ToastContainer/>
      <div className="content">
        <div className="image">
          <img
            src="https://last-version-of-store.vercel.app/static/media/logo.0aac528f8ddea5e58747.png"
            alt="Logo"
          />
        </div>
        <form action="post">
          <div>
            <label>{t("description")}</label>
            <label>{t("enter_credentials")}</label>
          </div>
          <input
            type="email"
            onChange={(e) => setMailValue(e.target.value)}
            placeholder={t("email_placeholder")}
          />
          <div className="passInput">
            <input
              onChange={(e) => setPassValue(e.target.value)}
              type={pass ? "password" : "text"}
              placeholder={t("password_placeholder")}
            />
            <div className="icon" onClick={() => handleClick()}>
              {pass ? <Eye color="#git686767" width="20px"/> : <EyeSlash color="black" width="30px"/>}
            </div>
          </div>
          <button type="submit" onClick={handleSumbit} disabled={loader}>
            {loader?<Spin indicator={<LoadingOutlined spin />} size="large" />:t("login_button")}
          </button>
          <span>{t("back_to_home")}</span>
        </form>

        {/* Language Switcher */}
        <LanguageButtons/>
      </div>
    </div>
  );
}

export default Login;
