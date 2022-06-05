import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import renderWithRouter from './renderWithRouter';
import About from '../components/About';

describe('Testa a a rota About', () => {
  test('Testa se meu titulo está definido na tela', () => {
    renderWithRouter(<About />);

    const titulo = screen.getByRole('heading', { name: /about pokédex/i });
    const tituloText = screen.getByText(/about pokédex/i);
    expect(titulo).toBeDefined();
    expect(tituloText).toBeDefined();
  });
  test('Testa se os paragrafos estão sendo carregados na tela', () => {
    renderWithRouter(<About />);

    const p1 = screen.getByText(
      /This application simulates a Pokédex/,
    );
    const p2 = screen.getByText(
      /One can filter Pokémons by type/,
    );
    expect(p1).toBeDefined();
    expect(p2).toBeDefined();
  });

  test('Testa se a imagem está sendo renderizada corretamente', () => {
    renderWithRouter(<About />);

    const imagem = screen.getByAltText(/Pokédex/i);
    expect(imagem).toBeDefined();
    expect(imagem).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
