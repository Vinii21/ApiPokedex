
import PokemonCard from "../components/PokemonCard";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import { useSelector } from "react-redux"
import ButtonClose from "../components/ButtonClose";
import Profile from "../components/profile";

const Pokedex = () => {

  const trainer = useSelector( state=> state.trainer)
  const totalPokemons = useSelector( state => state.totalPokemons)

  const [types, setTypes] = useState([])
  const [allPokemons, setAllPokemons] = useState([])
  const [inputTypes, setInputTypes] = useState("AllPokemons")
  const [indexType, setIndexType] = useState(null)

  const [checkbox, setCheckbox] = useState(false)
  const [inputPokeName, setInputPokeName] = useState("")

  const [currentPage, setCurrentPage] = useState(1)

  const [totalPages, setTotalPages] = useState(0)

  const [pokemons, setPokemons] = useState([])
  const [alls, setAlls] = useState([])

  const lastIndex = currentPage * totalPokemons
  const firstIndex = lastIndex - totalPokemons


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

  useEffect(()=>{
    let total = 0

    if(indexType === null){
       total = alls.length
    } else {
        total = pokemons.length
    }

    for(let i = 1; i <= Math.ceil(total / totalPokemons); i++){
        setTotalPages(i)
    }
})
 

  const onSubmit = (e) => {
    e.preventDefault()
    if(checkbox){
      if(inputPokeName === "") {
        setIndexType(null)
      } else {
        let findPonkemon = allPokemons.findIndex(poke => poke.name === inputPokeName)
        if(findPonkemon === -1){
          Swal.fire('This is not a pokemon')
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
          Swal.fire('This is not a pokemon type')
        } else {
          setIndexType(index)
        }
      }
    }
  }

  return (
    <>
    <ButtonClose />
    <div className="container-pokedex">
      <div className="container__welcome">
        <img className="pokedex" src="/Pokedex_logo.png" alt="Logo pokedex" />
        <div className="welcome-pokedex">
          <p>"Welcome <span className="color--name">{trainer.name}</span>, here you can find your favorite pokemon"</p>
          < Profile />
        </div>
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
            <input className="search-pokedex" list="names" name="names" type="text" placeholder="Searh Pokemon" value={inputPokeName} onChange={(e)=>setInputPokeName(e.target.value)}/>
          :
            <input type="search" name="types" list="types" className="search-pokedex" value={inputTypes} onChange={(e)=>setInputTypes(e.target.value)}/>
        }
        <button className="btnSearch" type="submit"><i className='bx bx-search-alt'></i></button>
      </form>
      <PokemonCard 
        types={types}
        indexType={indexType}
        allPokemons={allPokemons}
        checkbox={checkbox}
        inputPokeName={inputPokeName}
        lastIndex={lastIndex}
        firstIndex={firstIndex}
        setAlls={setAlls}
        alls={alls}
        setPokemons={setPokemons}
        pokemons={pokemons}
      />
      <div className="container__pagination">
      <Pagination
          currentPage={currentPage}
          changeCurrentPage={page => setCurrentPage(page)}
          theme="bottom-border"
          totalPages={totalPages}
        />
      </div>
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
