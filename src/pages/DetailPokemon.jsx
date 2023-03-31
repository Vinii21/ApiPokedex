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
      })
      .catch((error) => console.error(error));
  }, []);
  
  const pokeImage = () => {
    if (pokemon?.sprites?.other?.home?.front_default != null) {
      return pokemon.sprites.other.home.front_default;
    } else if (pokemon?.sprites?.other?.dream_world?.front_default != null) {
      return pokemon.sprites.other.dream_world.front_default;
    } else if (pokemon?.sprites?.front_default != null) {
      return pokemon.sprites.front_default;
    } else {
      return "/pokeBall.gif";
    }
  };

  return (
    <div className="container-Detailt">
      <div className="container-info">
        <div className="container-img-detailt">
          <img
            className="img-detailt"
            src={pokeImage()}
            alt={pokemon?.name}
          />
        </div>
        <div className="info-card">
          <div className="container-size">
            <div className="container-size-secound">
              <span>Weight: {pokemon.weight}</span>
              <span>Height: {pokemon.height}</span>
            </div>
            <div className="container-name">
              <h3>{pokemon?.name}</h3>
              <p className="id-poki">#{id}</p>
            </div>
          </div>
          <div className="type-abilities">
            <div className="container-type">
              <div className="tipe-title">
                <h3>Type</h3>
              </div>
              <div className="container-span-type">
                {pokemon?.types?.map((type, index) => {
                  return (
                    <span key={index} className="span-type1">
                      {type.type.name}
                    </span>
                  );
                })}
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
        </div>
      </div>

      <div className="container-aside">
        <h3>Movements</h3>
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
