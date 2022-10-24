import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testar o componente Footer', () => {
  const footer = 'footer';
  const drinksBtn = 'drinks-bottom-btn';
  const mealsBtn = 'meals-bottom-btn';

  it('verifica se os botões estão no path "/meals"', () => {
    renderWithRouter(<App />, ['/meals']);

    expect(screen.getByTestId(footer)).toBeInTheDocument();
    expect(screen.getByTestId(drinksBtn)).toBeInTheDocument();
    expect(screen.getByTestId(mealsBtn)).toBeInTheDocument();
  });

  it('verifica se os botões estão no path "/drinks"', () => {
    renderWithRouter(<App />, ['/drinks']);

    expect(screen.getByTestId(footer)).toBeInTheDocument();
    expect(screen.getByTestId(drinksBtn)).toBeInTheDocument();
    expect(screen.getByTestId(mealsBtn)).toBeInTheDocument();
  });

  it('verifica se os botões estão no path "/profile"', () => {
    renderWithRouter(<App />, ['/profile']);

    expect(screen.getByTestId(footer)).toBeInTheDocument();
    expect(screen.getByTestId(drinksBtn)).toBeInTheDocument();
    expect(screen.getByTestId(mealsBtn)).toBeInTheDocument();
  });

  it('verifica se no botão Drinks leva para o path "/drinks" ', () => {
    const { history } = renderWithRouter(<App />, ['/profile']);

    const btnDrinks = screen.getByTestId(drinksBtn);

    userEvent.click(btnDrinks);

    const { pathname } = history.location;

    expect(pathname).toBe('/drinks');
  });

  it('verifica se no botão Drinks leva para o path "/meals" ', () => {
    const { history } = renderWithRouter(<App />, ['/profile']);

    const btnMeals = screen.getByTestId(mealsBtn);

    userEvent.click(btnMeals);

    const { pathname } = history.location;

    expect(pathname).toBe('/meals');
  });
});
