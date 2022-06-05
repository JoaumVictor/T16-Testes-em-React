import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa o pokemon.test.js', () => {
  test('teste se o pokemon charmander é renderizado com as informações corretas', () => {
    const { history } = renderWithRouter(<App />);

    const buttonProx = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(buttonProx);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const nome = screen.getByTestId('pokemon-name');
    expect(nome.textContent).toBe('Charmander');

    const tipo = screen.getByTestId('pokemon-type');
    expect(tipo.textContent).toBe('Fire');

    const peso = screen.getByTestId('pokemon-weight');
    expect(peso.textContent).toBe('Average weight: 8.5 kg');

    const image = screen.getByAltText('Charmander sprite');
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png');

    expect(history.location.pathname).toBe('/pokemons/4');

    const favoritar = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(favoritar);

    const estrelinha = screen.getByAltText(/charmander is marked as favorite/i);
    expect(estrelinha)
      .toHaveAttribute('src', '/star-icon.svg');
    expect(estrelinha).toBeDefined();
  });
});
