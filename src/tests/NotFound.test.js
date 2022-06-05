import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import renderWithRouter from './renderWithRouter';
import NotFound from '../components/NotFound';

describe('Testa a rota NotFound', () => {
  test('Testa se a mensagem está sendo renderizada', () => {
    renderWithRouter(<NotFound />);
    const msg = screen
      .getByRole('heading', { name: /page requested not found crying emoji/i });
    expect(msg).toBeDefined();
  });

  test('Testa se o emoji está sendo renderizado', () => {
    renderWithRouter(<NotFound />);
    const emoji = screen.getByRole('img', { name: /crying emoji/i });
    expect(emoji).toBeDefined();
  });

  test('Testa se a imagem está sendo renderizada com o src correto', () => {
    renderWithRouter(<NotFound />);
    const img = screen.getByAltText(/Pikachu crying/);
    expect(img).toBeDefined();
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
