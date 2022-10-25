import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Meals from '../pages/Meals';
import App from '../App';
import RenderWithRouter from './renderWithRouter';
import renderWithContext from './renderWithContext';

const topBtn = 'search-top-btn';

describe('Teste do Header', () => {
  beforeEach(() => {
    act(() => {
      RenderWithRouter(<Meals />);
    });
  });
  it('Testando o componente Header', () => {
    const idProfile = screen.getByTestId('profile-top-btn');
    expect(idProfile).toBeInTheDocument();
    const idSearch = screen.getByTestId(topBtn);
    expect(idSearch).toBeInTheDocument();
  });
  it('Testando o Search', () => {
    const search = screen.getByTestId(topBtn);
    expect(search).toBeInTheDocument();
    userEvent.click(search);
    const input = screen.getByTestId('search-input');
    expect(input).toBeInTheDocument();
    userEvent.click(input);
  });
});
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
