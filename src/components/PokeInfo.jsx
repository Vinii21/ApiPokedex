import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PokeInfo = ({url}) => {
    const [pokeInfo, setPokeInfo] = useState({})

    useEffect(()=>{
        axios.get(url)
        .then((resp)=>setPokeInfo(resp.data))
        .catch(error=>console.error(error))
  },[])

    return (  
        <Link to={`/pokedex/${pokeInfo?.id}`} className="container-pokecard">
              <div>
                <h5>{pokeInfo.name}</h5>
              </div>
              <div className="container-info-pokecard">
                <span>Types: {pokeInfo?.types?.[0].type?.name}</span>
                <span>hp: {pokeInfo?.stats?.[0].base_stat}</span>
                <span>attack: {pokeInfo?.stats?.[1].base_stat}</span>
                <span>defense: {pokeInfo?.stats?.[2].base_stat}</span>
                <span>speed: {pokeInfo?.stats?.[5].base_stat}</span>
              </div>
              <div>
                <img src={pokeInfo?.sprites?.front_default} alt={pokeInfo.name} />
              </div>
        </Link>
    );
}
 
export default PokeInfo;