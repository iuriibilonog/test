import { useState } from "react";
import s from "./MainInfoScreen.module.css";

const MainInfoScreen = () => {
  const [isShowTabsInfo, setIsShowTabsInfo] = useState({
    secure: false,
    indep: false,
    transparent: false,
    experienced: false,
  });

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
      <div className={s.titleInfoWrapper}>
        <h3 className={s.title}>WELCOME</h3>
        <p className={s.mainText}>
          Louvre Wealth Management provides comprehensive wealth management and
          investment services to high net worth individuals, family offices and
          institutional clients. Our team has a longstanding track record in
          international private wealth management, investments and corporate
          advisory.
        </p>
      </div>
      <ul className={s.mainList}>
        <li className={s.secure} onClick={() => handleOnClick("secure")}>
          <span className={s.listItemTitle}>SECURE</span>
          <div className={s.secureTabTextWrapper}>
            <h4 className={s.textTitleForTab}>SECURE</h4>
            <p className={s.textForTab}>
              We believe that an unbiased, objective approach to selecting
              investments provides the greatest possibility of success. To
              identify the best investments, we look across a broad range of
              opportunities.
            </p>
          </div>
        </li>
        {isShowTabsInfo.secure && (
          <li className={s.listItemTextWrapper}>
            <h4 className={s.listItemTextTitle}>SECURE</h4>
            <p className={s.listItemText}>
              We believe that an unbiased, objective approach to selecting
              investments provides the greatest possibility of success. To
              identify the best investments, we look across a broad range of
              opportunities.
            </p>
          </li>
        )}
        <li className={s.independent} onClick={() => handleOnClick("indep")}>
          <span className={s.listItemTitle}>INDEPENDENT</span>
          <div className={s.independentTabTextWrapper}>
            <h4 className={s.textTitleForTab}>INDEPENDENT</h4>
            <p className={s.textForTab}>
              We believe that an unbiased, objective approach to selecting
              investments provides the greatest possibility of success. To
              identify the best investments, we look across a broad range of
              opportunities.
            </p>
          </div>
        </li>
        {isShowTabsInfo.indep && (
          <li className={s.listItemTextWrapper}>
            <h4 className={s.listItemTextTitle}>INDEPENDENT</h4>
            <p className={s.listItemText}>
              We believe that an unbiased, objective approach to selecting
              investments provides the greatest possibility of success. To
              identify the best investments, we look across a broad range of
              opportunities.
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
              We believe that an unbiased, objective approach to selecting
              investments provides the greatest possibility of success. To
              identify the best investments, we look across a broad range of
              opportunities.
            </p>
          </div>
        </li>
        {isShowTabsInfo.transparent && (
          <li className={s.listItemTextWrapper}>
            <h4 className={s.listItemTextTitle}>TRANSPARENT</h4>
            <p className={s.listItemText}>
              We believe that an unbiased, objective approach to selecting
              investments provides the greatest possibility of success. To
              identify the best investments, we look across a broad range of
              opportunities.
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
              We believe that an unbiased, objective approach to selecting
              investments provides the greatest possibility of success. To
              identify the best investments, we look across a broad range of
              opportunities.
            </p>
          </div>
        </li>
        {isShowTabsInfo.experienced && (
          <li className={s.listItemTextWrapper}>
            <h4 className={s.listItemTextTitle}>EXPERIENCED</h4>
            <p className={s.listItemText}>
              We believe that an unbiased, objective approach to selecting
              investments provides the greatest possibility of success. To
              identify the best investments, we look across a broad range of
              opportunities.
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MainInfoScreen;
