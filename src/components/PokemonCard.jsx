import axios from "axios";
import { useEffect, useState } from "react";
import PokeInfo from "./PokeInfo";

const PokemonCard = ({types, indexType, allPokemons}) => {

  const [pokemons, setPokemons] = useState([])
  const [alls, setAlls] = useState([])

  useEffect(()=>{
    if(indexType === null){
      setAlls(allPokemons)
    } else {
      axios.get(types[indexType].url)
      .then(resp=>setPokemons(resp.data.pokemon))
      .catch(error=>console.error(error))
    }
  },[indexType, allPokemons])

  return ( 
    <div className="pokemon-card">
      {
        indexType === null ?
          alls?.map((all, index)=>{
            return(
              <PokeInfo key={index} url={all.url}/>
            )
          })
          :
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