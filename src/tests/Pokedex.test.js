import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testando a rota da Pokedex', () => {
  test('Testa se o titulo está sendo renderizado', () => {
    renderWithRouter(<App />);

    const titulo = screen.getByRole('heading', { name: /encountered pokémons/i });
    expect(titulo).toBeDefined();
  });

  test('Testa se o próximo pokemon é renderizado quando pressiona o botão', () => {
    renderWithRouter(<App />);

    const prox = screen.getByRole('button', { name: /próximo pokémon/i });
    const proxText = screen.getByText(/próximo pokémon/i);
    expect(proxText).toBeDefined();
    userEvent.click(prox);
    const charmander = screen.getByRole('img', { name: /charmander sprite/i });
    expect(charmander).toBeDefined();
    const pikachu = screen.queryByRole('img', { name: /pikachu sprite/i });
    expect(pikachu).toBe(null);
  });

  test('Testa os botões de filtro', () => {
    renderWithRouter(<App />);
    const types = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    const buttonNextPage = screen.getByRole('button', { name: /próximo pokémon/i });
    const buttons = screen.getAllByTestId(/pokemon-type-button/i);

    buttons.forEach((each, i) => {
      expect(each).toBeDefined();
      expect(each).toHaveTextContent(types[i]);
      userEvent.click(each);

      const pokemonType = screen.getByTestId('pokemon-type');
      expect(pokemonType).toHaveTextContent(types[i]);
      userEvent.click(buttonNextPage);
      expect(pokemonType).toHaveTextContent(types[i]);
      userEvent.click(buttonNextPage);
      expect(pokemonType).toHaveTextContent(types[i]);
      userEvent.click(buttonNextPage);
    });
  });

  test('verifica se o botão all está na tela', () => {
    renderWithRouter(<App />);
    const all = screen.getByRole('button', { name: /all/i });
    expect(all).toBeDefined();
    userEvent.click(all);
  });
});
