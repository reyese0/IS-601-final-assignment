import React, {useState, useEffect} from "react";
import PokedexSelector from "./PokedexSelector";
import PokemonSelector from "./PokemonSelector";

function App() {
  const [selectedPokedex, setSelectedPokedex] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState('');

  const pokedexBack = () => {
    setSelectedPokedex(null)
  }

  return (
    <div>
      <h1>Select a pokedex:</h1>
      <h2>{selectedPokedex}</h2>
      <PokedexSelector setSelectedPokedex={setSelectedPokedex}/>
      <PokemonSelector selectedPokedex={selectedPokedex} setSelectedPokemon={setSelectedPokemon} pokedexBack={pokedexBack}/>
    </div>
  );
}

export default App;
