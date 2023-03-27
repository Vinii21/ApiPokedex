import iconSend from "../assets/icons/001-valor.png"
import monkey from "../assets/icons/002-mankey.png"
import caterpie from "../assets/icons/009-caterpie.png"
import eevee from "../assets/icons/008-eevee.png"
import { Link } from "react-router-dom"

const Home = () => {
  return ( 
    <div className="container__home">
      <h1>Hello trainer!</h1>
      <h6 htmlFor="name">Give me your name and gender to start!</h6>
      <div className="container__input">
        <div className="input">
          <input type="text" placeholder="write your name"/><Link to="/pokedex" type="submit" onClick={()=>console.log("sirvo pa")}><img src={iconSend} alt="Icon send" /></Link>
        </div>
        <div className="switch-pokedex border__home">
        <span className="title-switch-pokedex"><i className='bx bx-male-sign'></i></span>
        <div className="form-check form-switch">
          <input
            className="form-check-input input-switch-pokedex"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
        <span className="title-switch-pokedex"><i className='bx bx-female-sign'></i></span>
      </div>
      </div>
      <div className="container__pokemons">
        <img src={monkey} alt="Icon Monkey" />
        <img src={caterpie} alt="Icon caterpie" />
        <img src={eevee} alt="Icon eevee" />
      </div>
    </div>
   );
}
 
export default Home;