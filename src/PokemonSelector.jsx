import PokedexSelector from "./PokedexSelector";
import React, {useState, useEffect} from "react"

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

function PokemonSelector(props) {
  const { onSelection } = props;
    const [pokemonList, setPokemonList] = useState([]);
    const [hasError, setErrors] = useState(false);
    const [pokedexSelected, setPokedexSelected] = useState(null);

    useEffect(function() {
        fetchData()
        .catch(console.error);
      }, []);

      async function fetchData() {
        P.resource("/api/v2/pokemon")
          .then( response => {
            setPokemonList(response.results)
        })
    }
    function choosePokedex(selection) {
      setPokedexSelected(selection);

  }
    
    if(!hasError) {

      if(!pokedexSelected) {
      return (
        <div>  
          {(true) ? pokemonList.map(pokemon_species => (
            <div>
                <h2 key={pokemon_species.name}>{pokemon_species.name}</h2>
                <button onClick={() => props.setSelectedPokemon(pokemon_species.name)}>View Details</button>
            </div>
          )) : null}
        </div>
      )
    } else {
      return (
        <div>  
          <PokedexSelector onSelection={choosePokedex}/>
        </div>
      )
    }

    } else {
        return (
            <h1>There is an error</h1>
        )
    }

}

export default PokemonSelector;