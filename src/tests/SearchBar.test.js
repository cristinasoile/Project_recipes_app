import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithContext from './renderWithContext';
import App from '../App';

afterEach(() => jest.clearAllMocks());

describe('Testa o componente SearchBar', () => {
  test('Testa se existem os inputs no path /meals', () => {
    renderWithContext(<App />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');

    userEvent.type(emailInput, 'teste@gmail.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(button);

    const ingredientSearch = screen.getByTestId('ingredient-search-radio');
    const nameSearch = screen.getByTestId('name-search-radio');
    const firstLetterSearch = screen.getByTestId('first-letter-search-radio');
    const btn = screen.getByTestId('exec-search-btn');
    expect(ingredientSearch).toBeInTheDocument();
    expect(ingredientSearch).toBeInTheDocument();
    expect(nameSearch).toBeInTheDocument();
    expect(firstLetterSearch).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  test('Testa se o filtro de ingrediente funciona depois de ser chamado pela API', async () => {
    await act(async () => {
      renderWithContext(<App />);
    });
    const btnLupa = screen.getByTestId('search-top-btn');
    expect(btnLupa).toBeInTheDocument();

    userEvent.click(btnLupa);
    const input = screen.getByTestId('search-input');
    expect(input).toBeInTheDocument();
    userEvent.type(input, 'chicken');

    const ingredientSearch = screen.getByTestId('ingredient-search-radio');
    expect(ingredientSearch).toBeInTheDocument();
    userEvent.click(ingredientSearch);

    const inputSearch = screen.getByTestId('search-input');
    expect(inputSearch).toBeInTheDocument();
    userEvent.type(inputSearch, 'chicken');

    const btnSearch = screen.getByTestId('exec-search-btn');
    expect(btnSearch).toBeInTheDocument();

    userEvent.click(btnSearch);
    recipe1 = screen.getByRole('heading', { name: /brown stew chicken/i });
    expect(recipe1).toBeInTheDocument();
  });
});
