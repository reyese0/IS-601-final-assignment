import React, {useState, useEffect} from "react";
import PokedexSelector from "./PokedexSelector";
import PokemonSelector from "./PokemonSelector";

function App() {
  const [selectedPokedex, setSelectedPokedex] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState('');


  return (
    <div>
      <h1>Select a pokedex:</h1>
      <PokedexSelector setSelectedPokedex={setSelectedPokedex}/>
      <PokemonSelector setSelectedPokemon={setSelectedPokemon}/>
    </div>
  );
}

export default App;
