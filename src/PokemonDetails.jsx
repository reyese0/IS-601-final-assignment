import PokedexSelector from "./PokedexSelector";
import PokemonSelector from "./PokemonSelector";
import React, {useState, useEffect} from "react"

function PokemonDetails() {
    const [pokemonInfo, setPokemonInfo] = useState(null);
    const [pokemonName, setPokemonName] = useState('');

    useEffect(function() {
        fetchData()
        .catch(console.error);
      }, []);

      async function fetchData() {
        P.resource(`/api/v2/pokemon/${pokemonName}`)
          .then( response => {
            setPokemonInfo(response.results)
        })
    }

}