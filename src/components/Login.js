import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
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
    <div>
      <form>
        <Redirect to="/Meals" />
        <label htmlFor="email-input">
          <input
            data-testid="email-input"
            type="email"
            placeholder="digite seu email"
            name="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          <input
            data-testid="password-input"
            type="password"
            placeholder="digite sua senha"
            name="empasswordail"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-btn"
          className="login-submit-btn"
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
