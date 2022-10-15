import s from "./WelcomeScreen.module.css";
import burger from "./../../images/burger.png";
import logo from "./../../images/logo.png";
import bigLogoDesc from "./../../images/bigLogoDesc.png";
import Menu from "./../Menu";
import { useState } from "react";

const WelcomeScreen = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleOnClick = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <div className={s.main} id="welcome">
      {/* <img src={burger} alt="" className={s.burger} onClick={handleOnClick} /> */}
      <img src={logo} alt="" className={s.logo} />
      <img src={bigLogoDesc} alt="" className={s.bigLogoDesk} />
      <div className={s.bgImg}></div>
      {/* <Menu isShow={isShowMenu} setIsShow={setIsShowMenu} /> */}
    </div>
  );
};

export default WelcomeScreen;
