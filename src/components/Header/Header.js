import s from "./Header.module.css";
import burger from "./../../images/burger.png";
import Menu from "./../Menu";
import { useState } from "react";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleOnClick = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <div className={s.headerWrapper}>
      <img src={burger} alt="" className={s.burger} onClick={handleOnClick} />
      <Menu isShow={isShowMenu} setIsShow={setIsShowMenu} />
    </div>
  );
};

export default Header;
