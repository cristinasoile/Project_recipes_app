import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithContext from './renderWithContext';
import App from '../App';
import Meals from '../pages/Meals';

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

  describe('Testa o componente SearchBar', () => {
    test('Testa se o filtro de ingrediente funciona depois de ser chamado pela API', async () => {
      await act(async () => {
        renderWithContext(<Meals />);
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

      const btnSearch = screen.getByTestId('exec-search-btn');
      expect(btnSearch).toBeInTheDocument();
      userEvent.click(btnSearch);

      const recipe1 = screen.findByText(/brown stew chicken/i);
      waitFor(() => expect(recipe1).toBeInTheDocument());
    });
  });
});
