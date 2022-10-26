import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithContext from './renderWithContext';
import App from '../App';
import Meals from '../pages/Meals';
import Drinks from '../pages/Drinks';

afterEach(() => jest.clearAllMocks());

const execBtn = 'exec-search-btn';
const searchBtn = 'search-top-btn';
const inputSearch = 'search-input';
const ingredSearch = 'ingredient-search-radio';
const nomeSearch = 'name-search-radio';

describe('1. SearchBar - Inputs', () => {
  test('Testa se existem os inputs no path /meals', () => {
    renderWithContext(<App />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');

    userEvent.type(emailInput, 'teste@gmail.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(button);

    const ingredientSearch = screen.getByTestId(ingredSearch);
    const nameSearch = screen.getByTestId(nomeSearch);
    const firstLetterSearch = screen.getByTestId('first-letter-search-radio');
    const btn = screen.getByTestId(execBtn);
    expect(ingredientSearch).toBeInTheDocument();
    expect(ingredientSearch).toBeInTheDocument();
    expect(nameSearch).toBeInTheDocument();
    expect(firstLetterSearch).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  describe('2. SearchBar - Filtros Radio', () => {
    test('Testa se o filtro de ingrediente nos Meals funciona depois de ser chamado pela API', async () => {
      await act(async () => {
        renderWithContext(<Meals />);
      });

      const btnLupa = screen.getByTestId(searchBtn);
      expect(btnLupa).toBeInTheDocument();
      userEvent.click(btnLupa);

      const input = screen.getByTestId(inputSearch);
      expect(input).toBeInTheDocument();
      userEvent.type(input, 'chicken');

      const ingredientSearch = screen.getByTestId(ingredSearch);
      expect(ingredientSearch).toBeInTheDocument();
      userEvent.click(ingredientSearch);

      const btnSearch = screen.getByTestId(execBtn);
      expect(btnSearch).toBeInTheDocument();
      userEvent.click(btnSearch);

      const recipe1 = screen.findByText(/brown stew chicken/i);
      waitFor(() => expect(recipe1).toBeInTheDocument());
    });

    test('Testa se o filtro de ingrediente nos Drinks funciona depois de ser chamado pela API', async () => {
      await act(async () => {
        renderWithContext(<Drinks />);
      });

      const btnLupa = screen.getByTestId(searchBtn);
      expect(btnLupa).toBeInTheDocument();
      userEvent.click(btnLupa);

      const input = screen.getByTestId(inputSearch);
      expect(input).toBeInTheDocument();
      userEvent.type(input, 'vodka');

      const ingredientSearch = screen.getByTestId(ingredSearch);
      expect(ingredientSearch).toBeInTheDocument();
      userEvent.click(ingredientSearch);

      const btnSearch = screen.getByTestId(execBtn);
      expect(btnSearch).toBeInTheDocument();
      userEvent.click(btnSearch);

      const drink1 = screen.findByText(/155 belmont/i);
      waitFor(() => expect(drink1).toBeInTheDocument());
    });

    test('Testa se o filtro de name nos Meals funciona depois de ser chamado pela API', async () => {
      await act(async () => {
        renderWithContext(<Meals />);
      });

      const btnLupa = screen.getByTestId(searchBtn);
      expect(btnLupa).toBeInTheDocument();
      userEvent.click(btnLupa);

      const input = screen.getByTestId(inputSearch);
      expect(input).toBeInTheDocument();
      userEvent.type(input, 'chicken');

      const nameSearch = screen.getByTestId(nomeSearch);
      expect(nameSearch).toBeInTheDocument();
      userEvent.click(nameSearch);

      const btnSearch = screen.getByTestId(execBtn);
      expect(btnSearch).toBeInTheDocument();
      userEvent.click(btnSearch);

      const recipe1 = screen.findByText(/chiken handi/i);
      waitFor(() => expect(recipe1).toBeInTheDocument());
    });

    test('Testa se o filtro de name nos Drinks funciona depois de ser chamado pela API', async () => {
      await act(async () => {
        renderWithContext(<Drinks />);
      });

      const btnLupa = screen.getByTestId(searchBtn);
      expect(btnLupa).toBeInTheDocument();
      userEvent.click(btnLupa);

      const input = screen.getByTestId(inputSearch);
      expect(input).toBeInTheDocument();
      userEvent.type(input, 'adam');

      const nameSearch = screen.getByTestId(nomeSearch);
      expect(nameSearch).toBeInTheDocument();
      userEvent.click(nameSearch);

      const btnSearch = screen.getByTestId(execBtn);
      expect(btnSearch).toBeInTheDocument();
      userEvent.click(btnSearch);

      const drink1 = screen.findByText(/adam bomb/i);
      waitFor(() => expect(drink1).toBeInTheDocument());
    });

    test('Testa se o filtro de FirstLetter funciona depois de ser chamado pela API', async () => {
      await act(async () => {
        renderWithContext(<Meals />);
      });

      const btnLupa = await screen.findByTestId(searchBtn);
      expect(btnLupa).toBeInTheDocument();
      userEvent.click(btnLupa);

      const input = await screen.findByTestId(inputSearch);
      expect(input).toBeInTheDocument();
      userEvent.type(input, 'chicken');

      const firstLetterSearch = await screen.findByTestId('first-letter-search-radio');
      expect(firstLetterSearch).toBeInTheDocument();
      userEvent.click(firstLetterSearch);
      userEvent.type('c');

      const btnSearch = await screen.findByTestId(execBtn);
      expect(btnSearch).toBeInTheDocument();
      userEvent.click(btnSearch);

      const recipe1 = screen.findByText(/chocolate gateau/i);
      waitFor(() => expect(recipe1).toBeInTheDocument());
    });
  });
});
