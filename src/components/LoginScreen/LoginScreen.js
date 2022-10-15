import s from "./LoginScreen.module.css";
import burger from "./../../images/burger.png";
import logoRectangle from "./../../images/logoRectangle.png";
import Footer from "../Footer";
import Menu from "./../Menu";
import { useState } from "react";

const LoginScreen = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [error, setError] = useState({});

  // const handleOnClick = () => {
  //   setIsShowMenu(!isShowMenu);
  // };

  const handleOnChange = (e) => {
    switch (e.target.name) {
      case "username":
        setLogin(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLogin("");
    setPassword("");
    setError({ message: "Wrong login or password!" });
  };

  return (
    <div className={s.bgMain} id="login">
      {/* <img src={burger} alt="" className={s.burger} onClick={handleOnClick} /> */}
      <div className={s.loginWrapper}>
        <img src={logoRectangle} alt="" className={s.logoRectangle} />
        <div className={s.formWrapper}>
          <form className={s.loginForm} onSubmit={handleOnSubmit}>
            <input
              type="input"
              name="username"
              value={login}
              placeholder="USERNAME"
              className={s.loginInput}
              onChange={handleOnChange}
            ></input>
            <input
              type="input"
              name="password"
              value={password}
              placeholder="PASSWORD"
              className={s.loginInput}
              onChange={handleOnChange}
            ></input>
            <button type="submit" className={s.submit}>
              LOG-IN
            </button>
          </form>

          {Object.keys(error).length && (
            <div className={s.error}>{error.message}</div>
          )}
        </div>
        <a href="mailto:info@louvrewealth.com" className={s.mail}>
          info@louvrewealth.com
        </a>
      </div>
      {/* <Menu isShow={isShowMenu} setIsShow={setIsShowMenu} /> */}
      <Footer />
    </div>
  );
};

export default LoginScreen;
