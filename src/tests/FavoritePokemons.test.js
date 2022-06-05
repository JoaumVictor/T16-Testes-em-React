import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from './renderWithRouter';
import App from '../App';
// import Fav from '../components/FavoritePokemons';

describe('Testando a rota FavoritePokemons', () => {
  test(
    'Testa se a mensagem No favorite pokemon found é exibida',
    () => {
      // se não tiver pokemon ( No favorite pokemon found)
      renderWithRouter(<App />);

      const favoritos = screen.getByRole('link', { name: /favorite pokémons/i });
      userEvent.click(favoritos);
      const texto = screen.getByText(/no favorite pokemon found/i);
      expect(texto).toBeDefined();
    },
  );
  test('Testa se o pokemon favoritado é renderizado', () => {
    const { history } = renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: /more details/i });
    expect(details).toBeDefined();
    userEvent.click(details);

    expect(history.location.pathname).toBe('/pokemons/25');
    const favoritar = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(favoritar);
    const testeFav = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(testeFav).toBeDefined();

    const buttonFav = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(buttonFav);
    expect(history.location.pathname).toBe('/favorites');
    const pikachuFav = screen
      .getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(pikachuFav).toBeDefined();
  });
  // testa se meus pokemons favoritos tão lá ( Teste se é exibido todos os cards de pokémons favoritados. )
});
