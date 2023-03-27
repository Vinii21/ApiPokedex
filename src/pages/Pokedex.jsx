
import PokemonCard from "../components/PokemonCard";
import axios from "axios";
import { useState, useEffect } from "react";

const Pokedex = () => {

  const [types, setTypes] = useState([])
  const [allPokemons, setAllPokemons] = useState([])
  const [inputTypes, setInputTypes] = useState("AllPokemons")
  const [indexType, setIndexType] = useState(null)

  const [checkbox, setCheckbox] = useState(false)
  const [inputPokeName, setInputPokeName] = useState("")


  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/type")
    .then((resp)=>{
      setTypes(resp.data.results)
    })
    .catch(error=>console.error(error))

    getAllPokemons()
  },[])

  const getAllPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281")
    .then(resp=>setAllPokemons(resp.data.results))
    .catch(error=>console.error(error))
  }
 

  const onSubmit = (e) => {
    e.preventDefault()
    if(checkbox){
      if(inputPokeName === "") {
        setIndexType(null)
      } else {
        let findPonkemon = allPokemons.findIndex(poke => poke.name === inputPokeName)
        if(findPonkemon === -1){
          Swal.fire('Esa vara no existe!')
        } else {
          setIndexType(findPonkemon)
        }
      }
    } else {
     if(inputTypes === "AllPokemons"){
        setIndexType(null)
        getAllPokemons()
      } else {
        let index = types.findIndex(type => type.name === inputTypes)
        if(index === -1){
          Swal.fire('Esa vara no existe!')
        } else {
          setIndexType(index)
        }
      }
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
        <span className="title-switch-pokedex">type</span>
        <div className="form-check form-switch">
          <input
            className="form-check-input input-switch-pokedex"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            value={checkbox}
            onChange={()=>{
              setCheckbox(!checkbox)
              setIndexType(null)
            }}
          />
        </div>
        <span className="title-switch-pokedex">pokemon</span>
      </div>
      <form onSubmit={onSubmit} className="search-input-pokedex">
        {
          checkbox ?
          <div>
            <input className="search-pokedex" list="names" name="names" type="text" placeholder="Searh Pokemon" value={inputPokeName} onChange={(e)=>setInputPokeName(e.target.value)}/>
            <i className='bx bx-search-alt'></i>
          </div>
          :
          <input type="search" name="types" list="types" className="search-pokedex" value={inputTypes} onChange={(e)=>setInputTypes(e.target.value)}/>
        }
        <button className="btnSearch" type="submit">Search</button>
      </form>
      <PokemonCard 
        types={types}
        indexType={indexType}
        allPokemons={allPokemons}
        checkbox={checkbox}
        inputPokeName={inputPokeName}
      />
    </div>
    {
      checkbox ? 
      <datalist id="names">
        {
          allPokemons?.map((pokemon, index)=>{
            return(
              <option key={index} value={pokemon.name}/>
            )
          })
        }
      </datalist>
      :
      <datalist id="types">
        <option value="AllPokemons"/>
        {
          types?.map((type)=>{
            return(
              <option key={type.url} value={type.name}/>
            )
          })
        }
      </datalist>
    }
    
    </>
  );
};

export default Pokedex;
