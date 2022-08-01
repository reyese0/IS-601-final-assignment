import React, {useState, useEffect} from "react";
import PokemonSelector from "./PokemonSelector";

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

function PokedexSelector(props){
    const [hasError, setErrors] = useState(false);
    const [pokedexList, setPokedexList] = useState([]);
    
    useEffect(function() {
        fetchData()
        .catch(console.error);
      }, []);

      async function fetchData() {
        P.resource("/api/v2/pokedex")
          .then( response => {
            setPokedexList(response.results)
        })
    }

    if(!hasError) {
      return (
        <div>  
          {pokedexList.map(listItem => (
            <div>
                <h2 key={listItem.name}>{listItem.name}</h2>
                <button key={listItem.url} onClick={() => props.setSelectedPokedex(listItem.name)}>View</button>
            </div>
          ))}
        </div>
      )
    } else {
        return (
            <h1>There is an error with the pokedexes</h1>
        )
    }

}

export default PokedexSelector;