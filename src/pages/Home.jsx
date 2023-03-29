import iconSend from "../assets/icons/001-valor.png"
import monkey from "../assets/icons/002-mankey.png"
import caterpie from "../assets/icons/009-caterpie.png"
import eevee from "../assets/icons/008-eevee.png"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import { setTrainer } from "../store/slices/trainer.slice"

const Home = () => {

  const dispatch = useDispatch()

  const {register, handleSubmit, reset} = useForm()

  const navigate = useNavigate()

  const sumit = (data) => {
    dispatch(setTrainer(data))
    emptyForm()
    navigate("/pokedex")
  }

  const emptyForm = () => {
    reset({
      name: "",
      gender: null
    })
  }

  return ( 
    <div className="container__home">
      <h1>Hello trainer!</h1>
      <h6>Give me your name and gender to start!</h6>
        <form onSubmit={handleSubmit(sumit)} className="container__input">
          <div className="input">
            <input {...register("name", { required: true })} name="name" type="text" placeholder="write your name"/><button type="submit"><img src={iconSend} alt="Icon send" /></button>
          </div>
          <div>
            <label htmlFor="male"><i className='bx bx-male-sign'></i></label>
            <input {...register("gender", { required: true })} id="male" type="radio" name="gender" value="male"/>
            <label htmlFor="female"><i className='bx bx-female-sign'></i></label>
            <input {...register("gender", { required: true })} id="female" type="radio" name="gender" value="female"/>
          </div>
        </form>
      <div className="container__pokemons">
        <img src={monkey} alt="Icon Monkey" />
        <img src={caterpie} alt="Icon caterpie" />
        <img src={eevee} alt="Icon eevee" />
      </div>
    </div>
   );
}
 
export default Home;