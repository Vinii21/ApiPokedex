import axios from "axios";
import { useEffect } from "react";
import PokeInfo from "./PokeInfo";

const PokemonCard = ({types, indexType, allPokemons, checkbox, firstIndex, lastIndex, pokemons, setPokemons, alls, setAlls}) => {

  useEffect(()=>{
    if(checkbox){
      if(indexType === null){
        setAlls(allPokemons)
      } else {
       setPokemons([allPokemons[indexType]])
      }
    } else if(indexType === null){
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
            }).slice(firstIndex, lastIndex)
            :
            pokemons?.map((pokemon)=> {
              return(
                <PokeInfo key={checkbox ? pokemon.url : pokemon.pokemon.url} url={checkbox ? pokemon.url : pokemon.pokemon.url}/>
              )
            }).slice(firstIndex, lastIndex)
      }
    </div>
   );
}
 
export default PokemonCard;