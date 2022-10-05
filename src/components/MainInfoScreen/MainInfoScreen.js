import { useState } from "react";
import s from "./MainInfoScreen.module.css";
import burger from "./../../images/burger.png";
import Menu from "./../Menu";

const MainInfoScreen = () => {
  const [isShowTabsInfo, setIsShowTabsInfo] = useState({
    secure: false,
    indep: false,
    transparent: false,
    experienced: false,
  });

  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleOnClickBurger = () => {
    setIsShowMenu(!isShowMenu);
  };

  const handleOnClick = (name) => {
    switch (name) {
      case "secure":
        setIsShowTabsInfo({
          secure: !isShowTabsInfo.secure,
          indep: false,
          transparent: false,
          experienced: false,
        });
        break;
      case "indep":
        setIsShowTabsInfo({
          secure: false,
          indep: !isShowTabsInfo.indep,
          transparent: false,
          experienced: false,
        });
        break;
      case "transparent":
        setIsShowTabsInfo({
          secure: false,
          indep: false,
          transparent: !isShowTabsInfo.transparent,
          experienced: false,
        });
        break;
      case "experienced":
        setIsShowTabsInfo({
          secure: false,
          indep: false,
          transparent: false,
          experienced: !isShowTabsInfo.experienced,
        });
        break;

      default:
        break;
    }
  };

  return (
    <div className={s.mainInfoWrapper}>
      <img
        src={burger}
        alt=""
        className={s.burger}
        onClick={handleOnClickBurger}
      />
      <div className={s.titleInfoWrapper}>
        <h3 className={s.title}>WELCOME</h3>
        <p className={s.mainText}>
          Louvre Wealth Management (LWM) provides comprehensive investment and
          wealth management services to high-net-worth individuals, family
          offices and institutional clients. Our team has a long-standing track
          record in international private wealth management, investments and
          corporate advisory.
        </p>
      </div>
      <ul className={s.mainList}>
        <li className={s.secure} onClick={() => handleOnClick("secure")}>
          <span className={s.listItemTitle}>SECURE</span>
          <div className={s.secureTabTextWrapper}>
            <h4 className={s.textTitleForTab}>SECURE</h4>
            <p className={s.textForTab}>
              LWM provides comprehensive wealth management and investment
              solutions for clients booking assets in the UAE. Authorized and
              regulated under English law, LWM makes certain your funds are in
              secure custody with the largest and most respected financial
              institutions.
            </p>
          </div>
        </li>
        {isShowTabsInfo.secure && (
          <li className={s.listItemTextWrapper}>
            <h4 className={s.listItemTextTitle}>SECURE</h4>
            <p className={s.listItemText}>
              LWM provides comprehensive wealth management and investment
              solutions for clients booking assets in the UAE. Authorized and
              regulated under English law, LWM makes certain your funds are in
              secure custody with the largest and most respected financial
              institutions.
            </p>
          </li>
        )}
        <li className={s.independent} onClick={() => handleOnClick("indep")}>
          <span className={s.listItemTitle}>INDEPENDENT</span>
          <div className={s.independentTabTextWrapper}>
            <h4 className={s.textTitleForTab}>INDEPENDENT</h4>
            <p className={s.textForTab}>
              Based on its well-established relationships with leading financial
              institutions, LWM can offer the broadest possible range of
              international investment instruments and structures. Our team has
              an unbiased, objective approach to selecting investments, that
              produces the best results for our clients.
            </p>
          </div>
        </li>
        {isShowTabsInfo.indep && (
          <li className={s.listItemTextWrapper}>
            <h4 className={s.listItemTextTitle}>INDEPENDENT</h4>
            <p className={s.listItemText}>
              Based on its well-established relationships with leading financial
              institutions, LWM can offer the broadest possible range of
              international investment instruments and structures. Our team has
              an unbiased, objective approach to selecting investments, that
              produces the best results for our clients.
            </p>
          </li>
        )}
        <li
          className={s.transparent}
          onClick={() => handleOnClick("transparent")}
        >
          <span className={s.listItemTitle}>TRANSPARENT</span>
          <div className={s.transparentTabTextWrapper}>
            <h4 className={s.textTitleForTab}>TRANSPARENT</h4>
            <p className={s.textForTab}>
              LWM prides itself on the trusting, collaborative, open and
              respectful relationships with our clients, who are always in
              control of their investment strategies and have access to all
              relevant information.
            </p>
          </div>
        </li>
        {isShowTabsInfo.transparent && (
          <li className={s.listItemTextWrapper}>
            <h4 className={s.listItemTextTitle}>TRANSPARENT</h4>
            <p className={s.listItemText}>
              LWM prides itself on the trusting, collaborative, open and
              respectful relationships with our clients, who are always in
              control of their investment strategies and have access to all
              relevant information.
            </p>
          </li>
        )}
        <li
          className={s.experienced}
          onClick={() => handleOnClick("experienced")}
        >
          <span className={s.listItemTitle}>EXPERIENCED</span>
          <div className={s.experiencedTabTextWrapper}>
            <h4 className={s.textTitleForTab}>EXPERIENCED</h4>
            <p className={s.textForTab}>
              Our team has an extensive investment experience in asset
              management. Building investment strategies and portfolios requires
              sophisticated analysis and constant monitoring, to which we add
              our own unique brand of customer service.
            </p>
          </div>
        </li>
        {isShowTabsInfo.experienced && (
          <li className={s.listItemTextWrapper}>
            <h4 className={s.listItemTextTitle}>EXPERIENCED</h4>
            <p className={s.listItemText}>
              Our team has an extensive investment experience in asset
              management. Building investment strategies and portfolios requires
              sophisticated analysis and constant monitoring, to which we add
              our own unique brand of customer service.
            </p>
          </li>
        )}
      </ul>
      <Menu isShow={isShowMenu} setIsShow={setIsShowMenu} />
    </div>
  );
};

export default MainInfoScreen;
