import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('testa o app.js', () => {
  test('Testa se o topo da aplicação contém um conjunto de links de navegação', () => {
    renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: /home/i });
    const sobre = screen.getByRole('link', { name: /about/i });
    const favoritos = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(home).toBeDefined();
    expect(sobre).toBeDefined();
    expect(favoritos).toBeDefined();

    const homeText = screen.getByText(/home/i);
    const sobreText = screen.getByText(/about/i);
    const favoritosText = screen.getByText(/favorite pokémons/i);
    expect(homeText).toBeDefined();
    expect(sobreText).toBeDefined();
    expect(favoritosText).toBeDefined();
  });

  test('Testa se ao clicar no link Home é redirecionado pra página Home', () => {
    const { history } = renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: /home/i });
    userEvent.click(home);
    expect(history.location.pathname).toBe('/');
  });

  test('Testa se ao clicar no link About é redirecionado pra página About', () => {
    const { history } = renderWithRouter(<App />);

    const sobre = screen.getByRole('link', { name: /about/i });
    userEvent.click(sobre);
    expect(history.location.pathname).toBe('/about');
  });

  test('Testa se ao clicar no link favs é redirecionado pra página de favs', () => {
    const { history } = renderWithRouter(<App />);

    const favoritos = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(favoritos);
    expect(history.location.pathname).toBe('/favorites');
  });
});
