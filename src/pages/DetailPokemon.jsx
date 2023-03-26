import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailPokemon = () => {

  const [pokemon, setPokemon] = useState({})

  const {id} = useParams()

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(resp=>console.log(resp.data))
    .catch(error=>console.error(error))
  },[])

  return ( 

    <div>
      <aside>
        <p>aqui van los Movements</p>
      </aside>
      <div>
        <div>
          <p>aqui va la imagen</p>
        </div>
        <div>
          <div>
            <span>Weight (numero)</span>
            <span>Height (numero)</span>
          </div>
          <div>
            <h3>nombre</h3>
            <p># del pokemon</p>
          </div>
        </div>
        <div>
          <div>
            <h3>Type</h3>
          </div>
          <div>
            <span>types1</span>
            <span>types2</span>
          </div>
        </div>
        <div>
          <div>
            <h3>Abilities</h3>
          </div>
          <div>
          <span>abilities1</span>
            <span>abilities2</span>
          </div>
        </div>
      </div>
    </div>

   );
}
 
export default DetailPokemon;