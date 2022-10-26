import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithContext from './renderWithContext';

const topBtn = 'search-top-btn';

describe('Testar se o icone Profile esta direcionando para pagina /profile', () => {
  it('Testar se o header está funcionando', () => {
    renderWithContext(<App />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');

    userEvent.type(emailInput, 'teste@gmail.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(button);

    const btnProfile = screen.getByTestId('profile-top-btn');
    expect(btnProfile).toBeInTheDocument();

    const btnLupa = screen.getByTestId(topBtn);
    expect(btnLupa).toBeInTheDocument();

    userEvent.click(btnLupa);
    const input = screen.getByTestId('search-input');
    expect(input).toBeInTheDocument();
    userEvent.type(input, 'chicken');

    userEvent.click(btnProfile);
    expect(btnLupa).not.toBeInTheDocument();
  });
});
