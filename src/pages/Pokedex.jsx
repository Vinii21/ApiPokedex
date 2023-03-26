import { Link } from "react-router-dom";
import PokemonCard from "../componets/PokemonCard";

const Pokedex = () => {
  return (
    <div className="container-pokedex">
      <div className="title-pokedex">
        <h1>Pokedex</h1>
      </div>
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
      <div className="search-input-pokedex">
        <input type="text" className="search-pokedex" />
      </div>
      <div >
        <Link to={`/pokedex/${1}`} className="pokemon-card">
        <PokemonCard/>
        </Link>
      </div>
    </div>
  );
};

export default Pokedex;
