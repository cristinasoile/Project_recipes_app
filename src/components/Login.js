import React, { useCallback, useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/login.css';

function Login() {
  const { email, setEmail } = useContext(AppContext);
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const history = useHistory();

  const emailValid = useCallback(() => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    return regex.test(email);
  }, [email]);

  const passwordValid = useCallback(() => {
    const MAGIC_NUMBER = 6;
    return password.length > MAGIC_NUMBER;
  }, [password.length]);

  const handleButtonClick = useCallback(() => {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktaislToken', '1');
    history.push('/meals');
  }, [email, history]);

  useEffect(() => {
    if (emailValid() && passwordValid()) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [emailValid, passwordValid]);

  return (
    <div className="login-mobile">

      <form className="box-branco">
        <img src="https://thumbs.dreamstime.com/b/%C3%ADcone-redondo-com-chap%C3%A9u-do-cozinheiro-chefe-51743039.jpg" alt="img" className="img-login" />
        <label htmlFor="email-input">
          <input
            className="input-email"
            data-testid="email-input"
            type="email"
            placeholder="Digite seu email"
            name="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>

        <label htmlFor="password-input">
          <input
            className="input-senha"
            data-testid="password-input"
            type="password"
            placeholder="Digite sua senha"
            name="empasswordail"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>

        <button
          className="input-button"
          type="button"
          data-testid="login-submit-btn"
          disabled={ isDisable }
          onClick={ handleButtonClick }
        >
          ENTRAR
        </button>
      </form>
    </div>
  );
}

export default Login;
