import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProfilePage from '../pages/ProfilePage';
import RenderWithContext from './renderWithContext';

describe('Testa o componente SearchBar', () => {
  it('Testa se os data-test-ids existem', () => {
    RenderWithContext(<ProfilePage />);
    const donebtn = screen.getByTestId('profile-done-btn');
    const logoutbtn = screen.getByTestId('profile-logout-btn');
    const favbtn = screen.getByTestId('profile-favorite-btn');
    const emailid = screen.getByTestId('profile-email');

    expect(donebtn).toBeInTheDocument();
    expect(logoutbtn).toBeInTheDocument();
    expect(favbtn).toBeInTheDocument();
    expect(emailid).toBeInTheDocument();
  });

  it('Testa se redireciona ao clicar em Logout', () => {
    const { history } = RenderWithContext(<ProfilePage />);
    const logoutbtn = screen.getByTestId('profile-logout-btn');
    userEvent.click(logoutbtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
});
