import PokedexSelector from "./PokedexSelector";
import React, {useState, useEffect} from "react";
import PokemonDetails from "./PokemonDetails";

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

function PokemonSelector(props) {
  const { pokedexChosen, back } = props;
    const [pokemonList, setPokemonList] = useState([]);
    const [hasError, setErrors] = useState(false);
    const [pokemonSelected, setPokemonSelected] = useState(null);
    const [pokedexSelected, setPokedexSelected] = useState("");

    useEffect(function() {
        fetchData()
        .catch(console.error);
      }, [P, setErrors]);

      async function fetchData() {
        P.resource("/api/v2/pokemon")
          .then( response => {
            setPokemonList(response.results)
        })
    }

    const goBack = () => {
      setPokemonSelected("");
  }
  const pokedexBack = () => {
    setPokedexSelected(null)
  }
    
    if(!hasError) {

      if(pokemonSelected == null && pokedexSelected) {
      return (
        <div>  
          {pokemonList.map(pokemon_species => (
            <div>
                <h2 key={pokemon_species.name}>{pokemon_species.name}</h2>
                <button onClick={() => props.setSelectedPokemon(pokemon_species.name)}>View Details</button>
                <button onClick={() => pokedexBack()}>Back</button>
            </div>
          ))}
        </div>
      )
    } else {
      return (
          <PokemonDetails setErrors={setErrors} pokemonSelected={pokemonSelected} goBack={goBack} />
      )
    }

    } else {
        return (
            <h1>There is an error</h1>
        )
    }

}

export default PokemonSelector;