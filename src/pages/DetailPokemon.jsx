import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailPokemon = () => {

  const [pokemon, setPokemon] = useState({})

  const {id} = useParams()

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(resp=>{setPokemon(resp.data)
      console.log(resp.data)
    })
    .catch(error=>console.error(error))
  },[])

  return ( 

    <div>
      <aside>
        <p>aqui van los Movements</p>
      </aside>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <div>
            <span>Weight (numero)</span>
            <span>Height (numero)</span>
          </div>
          <div>
            <h3>{pokemon?.name}</h3>
            <p>#{id}</p>
          </div>
        </div>
        <div>
          <div>
            <h3>Type</h3>
          </div>
          <div>
            <span>{pokemon?.types?.[0].type.name}</span>
            <span>{pokemon?.types?.[1].type.name}</span>
          </div>
        </div>
        <div>
          <div>
            <h3>Abilities</h3>
          </div>
          <div>
          <span>{}</span>
            <span>abilities2</span>
          </div>
        </div>
      </div>
    </div>

   );
}
 
export default DetailPokemon;