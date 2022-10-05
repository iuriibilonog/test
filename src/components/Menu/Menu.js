import { Link } from "react-router-dom";
import s from "./Menu.module.css";
import logoRectangle from "./../../images/logoRectangle.png";
import close from "./../../images/close.png";
import { useEffect, useState } from "react";

const Menu = ({ isShow, setIsShow }) => {
  useEffect(() => {
    document.addEventListener("keyup", keyUp);
    return () => {
      document.removeEventListener("keyup", keyUp);
    };
  }, []);

  const keyUp = (e) => {
    if (e.keyCode === 27) {
      setIsShow(false);
    }
  };

  return (
    isShow && (
      <div
        className={isShow ? s.wrapper + " " + s.wrapperOpen : s.wrapper}
        onClick={() => {
          setIsShow(false);
        }}
      >
        <div className={s.overlay}></div>
        <div className={s.menuContent} onClick={(e) => e.stopPropagation()}>
          <img
            src={close}
            alt=""
            className={s.close}
            onClick={() => {
              setIsShow(false);
            }}
          />
          <img src={logoRectangle} alt="" className={s.logoRectangle} />
          <ul className={s.menuList}>
            <li className={s.menuListItem}>
              <Link to="/welcome">
                <span className={s.menuListItemTitle}>Welcome</span>
              </Link>
            </li>
            <li className={s.menuListItem}>
              <Link to="/home">
                <span className={s.menuListItemTitle}>Home</span>
              </Link>
            </li>
            <li className={s.menuListItem}>
              <Link to="/login">
                <span className={s.menuListItemTitle}>Login</span>
              </Link>
            </li>
          </ul>
          <a href="mailto:info@louvrewealth.com" className={s.mail}>
            info@louvrewealth.com
          </a>
        </div>
      </div>
    )
  );
};

export default Menu;
