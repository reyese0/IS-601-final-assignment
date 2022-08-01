import PokedexSelector from "./PokedexSelector";
import PokemonSelector from "./PokemonSelector";
import React, {useState, useEffect} from "react"

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

function PokemonDetails(props) {
    const {pokemonChosen, back, home} = props;
    const [pokemonInfo, setPokemonInfo] = useState();
    const [pokemonName, setPokemonName] = useState('');
    const [hasError, setErrors] = useState(false);

    useEffect(function() {
        fetchData()
        .catch(console.error);
      }, []);

      async function fetchData() {
        P.resource(`/api/v2/pokemon/${pokemonChosen}`)
          .then( response => {
            setPokemonInfo(response.results)
        })
    }

    var abilities;
    var baseStats;
    var types;
    var imageUrl;

    if (pokemonInfo != undefined) {
        abilities = pokemonInfo.abilities;
        baseStats = pokemonInfo.stats;
        types = pokemonInfo.types;
        imageUrl = pokemonInfo.sprites.front_default;
    }

    if (!hasError) {
    return (
        <div>
            <h1>Pokemon Details</h1>
            {pokemonInfo ? 
                <div>
                    <button onClick={() => home()}>Home</button>
                    <h1>Name: {pokemonChosen}</h1>
                    <img src = {imageUrl} />
                    <h2>Stats: </h2>
                    <ul>
                        {baseStats.map((stat, i) => {
                            return (
                                <li key={i}>
                                    <p>{stat.stat.name}: {stat.base_stat}</p>
                                </li>
                            )
                        })}
                    </ul>
                    <h2>Type: </h2>
                    <ul>
                        {types.map((type, i) => {
                            return (
                                <li key={i}>
                                    <p>{type.type.name}</p>
                                </li>
                            )
                        })}
                    </ul>
                    <h2>Abilities: </h2>
                    <ul>
                        {abilities.map((ability, i) => {
                            return (
                                <li key={i} >
                                    <p>{ability.ability.name}</p>
                                </li>
                            )
                        })}
                    </ul>
                   
                </div>
            : null}
            <button onClick={() => back()}>Back</button>
        </div>
    )
} else {
    return (
        <h1>There is an error</h1>
    )
}

}

export default PokemonDetails;