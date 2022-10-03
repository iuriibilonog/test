import s from './WelcomeScreen.module.css';
import burger from './../../images/burger.png';
import logo from './../../images/logo.png';
import bigLogoDesc from './../../images/bigLogoDesc.png';

const WelcomeScreen = () => {
  return (
    <div className={s.main}>
      <img src={burger} alt="" className={s.burger} />
      <img src={logo} alt="" className={s.logo} />
      <img src={bigLogoDesc} alt="" className={s.bigLogoDesk} />
      <div className={s.bgImg}></div>
    </div>
  );
};

export default WelcomeScreen;
