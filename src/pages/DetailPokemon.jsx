import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailPokemon = () => {
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((resp) => {
        setPokemon(resp.data);
        console.log(resp.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container-Detailt">
      <div className="container-info">
        <div className="container-img-detailt">
          <img
            className="img-detailt"
            src={pokemon?.sprites?.other?.dream_world?.front_default}
            alt={pokemon?.name}
          />
        </div>
        <div className="container-size">
          <div className="container-size-secound">
            <span>Weight {pokemon.weight}</span>
            <span>Height {pokemon.height}</span>
          </div>
          <div className="container-name">
            <h3>{pokemon?.name}</h3>
            <p className="id-poki">#{id}</p>
          </div>
        </div>
        <div className="container-type">
          <div className="tipe-title">
            <h3>Type</h3>
          </div>
          <div className="container-span-type">
            <span className="span-type1">{pokemon?.types?.[0]?.type?.name}</span>
            <span className="span-type2">{pokemon?.types?.[1]?.type?.name}</span>
          </div>
        </div>
        <div className="container-abilities">
          <div className="abilities-title">
            <h3>Abilities</h3>
          </div>
          <div className="container-span-abilite">
            <span className="spana-abilities">
              {pokemon?.abilities?.[0]?.ability?.name}
            </span>
            <span className="spana-abilities">
              {pokemon?.abilities?.[1]?.ability?.name}
            </span>
          </div>
        </div>
      </div>

      <div className="container-aside">
        <h3 >Movements</h3>
        {pokemon?.moves?.map((poke) => {
          return (
            <aside className="aside-detailt" key={poke?.move?.url}>
              <p>{poke?.move?.name}</p>
            </aside>
          );
        })}
      </div>
    </div>
  );
};

export default DetailPokemon;
