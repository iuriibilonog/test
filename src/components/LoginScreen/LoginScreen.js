import s from './LoginScreen.module.css';
import logoRectangle from './../../images/logoRectangle.png';
import { useState } from 'react';

const LoginScreen = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChange = e => {
    switch (e.target.name) {
      case 'username':
        setLogin(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setLogin('');
    setPassword('');
  };

  return (
    <div className={s.bgMain}>
      <div className={s.loginWrapper}>
        <img src={logoRectangle} alt="" className={s.logoRectangle} />
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
        <a href="mailto:info@louvrewealth.com" className={s.mail}>
          info@louvrewealth.com
        </a>
      </div>
    </div>
  );
};

export default LoginScreen;
