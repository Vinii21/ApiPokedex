
import PokemonCard from "../components/PokemonCard";
import axios from "axios";
import { useState, useEffect } from "react";

const Pokedex = () => {

  const [types, setTypes] = useState([])
  const [allPokemons, setAllPokemons] = useState([])
  const [inputTypes, setInputTypes] = useState("AllPokemons")
  const [indexType, setIndexType] = useState(null)

  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/type")
    .then((resp)=>{
      setTypes(resp.data.results)
    })
    .catch(error=>console.error(error))

    getAllPokemons()
  },[])

  const getAllPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then(resp=>setAllPokemons(resp.data.results))
    .catch(error=>console.error(error))
  }
 

  const onSubmit = (e) => {
    e.preventDefault()
    if(inputTypes === "AllPokemons"){
      setIndexType(null)
      getAllPokemons()
    } else {
      setIndexType(types.findIndex(type => type.name === inputTypes))
    }
  }

  return (
    <>
    <div className="container-pokedex">
      <h1 className="title-pokedex">Pokedex</h1>
      <div className="welcome-pokedex">
        <p>"Welcome (name), here you can find your favorite pokemon"</p>
      </div>
      <div className="switch-pokedex">
        <span className="title-switch-pokedex">type </span>
        <div className="form-check form-switch">
          <input
            className="form-check-input input-switch-pokedex"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
        <span className="title-switch-pokedex">pokemon</span>
      </div>
      <form onSubmit={onSubmit} className="search-input-pokedex">
        <input type="search" name="types" list="types" className="search-pokedex" value={inputTypes} onChange={(e)=>setInputTypes(e.target.value)}/>
        <button className="btnSearch" type="submit">Search</button>
      </form>
      <PokemonCard 
        types={types}
        indexType={indexType}
        allPokemons={allPokemons}
      />
    </div>
    <datalist id="types">
      <option value="AllPokemons"/>
      {
        types?.map(type=>{
          return(
            <option key={type.url} value={type.name}/>
          )
        })
      }
    </datalist>
    </>
  );
};

export default Pokedex;
