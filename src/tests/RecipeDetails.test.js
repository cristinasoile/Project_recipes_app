// import React from 'react';
// import { screen, waitForElement } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import renderWithContext from './renderWithContext';
// import Meals from '../pages/Meals';

// describe('Testar componentes da tela de Login', () => {
//   it('verifica se os inputs e o botão está na tela', async () => {
//     const { history } = renderWithContext(<Meals />);

//     const cardCorba = await waitForElement(screen.getByTestId('0-recipe-card'));
//     expect(screen.getByTestId(cardCorba)).toBeInTheDocument();
//     userEvent.click(cardCorba);

//     const { pathname } = history.location;
//     expect(pathname).toBe('/meals/52977');

//     const recipeTitle = screen.getByTestId('recipe-title');
//     const recipeCateg = screen.getByTestId('recipe-category');
//     const recipeImg = screen.getByTestId('recipe-photo');
//     const recipInstruc = screen.getByTestId('instructions');
//     const startBtn = screen.getByTestId('start-recipe-btn');

//     expect(recipeTitle).toBeInTheDocument();
//     expect(recipeCateg).toBeInTheDocument();
//     expect(recipeImg).toBeInTheDocument();
//     expect(recipInstruc).toBeInTheDocument();
//     expect(startBtn).toBeInTheDocument();
//   });
// });
