import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Login from '../pages/Login';

describe('Testar componentes da tela de Login', () => {
  const email = 'email-input';
  const password = 'password-input';
  const btnLogin = 'login-submit-btn';
  it('verifica se os inputs e o botão está na tela', () => {
    render(<Login />);
    expect(screen.getByTestId(email)).toBeInTheDocument();
    expect(screen.getByTestId(password)).toBeInTheDocument();
    expect(screen.getByTestId(btnLogin)).toBeInTheDocument();
  });

  it('verifica se o botão redireciona para a página /meals', () => {
    const { history } = renderWithRouter(<Login />);
    const emailInput = screen.getByTestId(email);
    const passwordInput = screen.getByTestId(password);
    const button = screen.getByTestId(btnLogin);

    userEvent.type(emailInput, 'teste@gmail.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(button);

    const { pathname } = history.location;
    expect(pathname).toBe('/meals');
  });

  it('verifica se o botão é ativado apenas quando os inputs estão corretos', () => {
    render(<Login />);

    userEvent.type(screen.getByTestId(email), 'emailErrado');
    userEvent.type(screen.getByTestId(password), '111');
    expect(screen.getByTestId('login-submit-btn')).toHaveProperty('disabled', true);

    userEvent.type(email, 'teste@gmail.com');
    userEvent.type(password, '1234567');
    expect(screen.getByTestId('password-input')).toHaveProperty('disabled', false);
  });
});
