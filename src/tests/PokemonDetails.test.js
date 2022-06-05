import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('requisito 7', () => {
  test('Verifica se os detalhes do pokemon selecionado aparecem', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/151');
    const details = screen.getByRole('heading', { name: /mew details/i });
    expect(details).toBeDefined();
    const sumario = screen.getByRole('heading', { name: /summary/i });
    expect(sumario).toBeDefined();
    const desc = screen.getByText(/apparently, it appears only to those people who/i);
    expect(desc).toBeDefined();
    const locationTitle = screen.getByRole('heading', { name: /game locations of mew/i });
    expect(locationTitle).toBeDefined();
    const image = screen.getByAltText(/mew location/i);
    expect(image).toBeDefined();
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/e/e4/Hoenn_Faraway_Island_Map.png');
    const location = screen.getByText(/faraway island/i);
    expect(location).toBeDefined();
    const check = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    expect(check).toBeDefined();
    userEvent.click(check);
  });
});
