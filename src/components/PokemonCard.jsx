import axios from "axios";
import { useEffect, useState } from "react";
import PokeInfo from "./PokeInfo";

const PokemonCard = ({types, indexType}) => {

  const [pokemons, setPokemons] = useState([])

  useEffect(()=>{
    if(indexType === null){
      console.log("soy un null", indexType)
    } else {
      axios.get(types[indexType].url)
      .then(resp=>setPokemons(resp.data.pokemon))
      .catch(error=>console.error(error))
    }
  },[indexType])

  return ( 
    <div className="pokemon-card">
      {
        pokemons?.map((pokemon)=> {
          return(
            <PokeInfo key={pokemon.pokemon.url} url={pokemon.pokemon.url}/>
          )
        })
      }
    </div>
   );
}
 
export default PokemonCard;