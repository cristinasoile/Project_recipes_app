import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithContext from './renderWithContext';
import Meals from '../pages/Meals';
import Drinks from '../pages/Drinks';
import ProfilePage from '../pages/ProfilePage';

describe('Testar o componente Footer', () => {
  const footer = 'footer';
  const drinksBtn = 'drinks-bottom-btn';
  const mealsBtn = 'meals-bottom-btn';

  it('verifica se os botões estão no path "/meals"', () => {
    renderWithContext(<Meals />);

    expect(screen.getByTestId(footer)).toBeInTheDocument();
    expect(screen.getByTestId(drinksBtn)).toBeInTheDocument();
    expect(screen.getByTestId(mealsBtn)).toBeInTheDocument();
  });

  it('verifica se os botões estão no path "/drinks"', () => {
    renderWithContext(<Drinks />);

    expect(screen.getByTestId(footer)).toBeInTheDocument();
    expect(screen.getByTestId(drinksBtn)).toBeInTheDocument();
    expect(screen.getByTestId(mealsBtn)).toBeInTheDocument();
  });

  it('verifica se os botões estão no path "/profile"', () => {
    renderWithContext(<ProfilePage />);

    expect(screen.getByTestId(footer)).toBeInTheDocument();
    expect(screen.getByTestId(drinksBtn)).toBeInTheDocument();
    expect(screen.getByTestId(mealsBtn)).toBeInTheDocument();
  });

  it('verifica se no botão Drinks leva para o path "/drinks" ', () => {
    const { history } = renderWithContext(<ProfilePage />);

    const btnDrinks = screen.getByTestId(drinksBtn);

    userEvent.click(btnDrinks);

    const { pathname } = history.location;

    expect(pathname).toBe('/drinks');
  });

  it('verifica se no botão Drinks leva para o path "/meals" ', () => {
    const { history } = renderWithContext(<ProfilePage />);

    const btnMeals = screen.getByTestId(mealsBtn);

    userEvent.click(btnMeals);

    const { pathname } = history.location;

    expect(pathname).toBe('/meals');
  });
});
