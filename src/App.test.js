import { render, screen, waitFor } from '@testing-library/react';
import { Pokedex } from 'pokeapi-js-wrapper';
import App from './App';

const {setPokedexs} = App;
 
jest.mock('pokeapi-js-wrapper');
 
beforeEach(() => {
  Pokedex.mockReturnValue({
    resource: jest.fn().mockResolvedValue(
      {results:[{name:'national'}]}
    )
  })
})
 
afterEach(() => {
  jest.clearAllMocks();
})
 
test('the list of pokedexes are rendered', async () => {
 
  render(<App setPokedexs={jest.mock()} />);

  await waitFor(() => {
    const searchElement = screen.getByText("national");
    expect(searchElement).toBeInTheDocument();
  });

});
