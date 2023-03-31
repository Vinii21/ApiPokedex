import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setTrainer } from "../store/slices/trainer.slice";
import { useState } from "react";
import { settotalPokemons } from "../store/slices/totalPokemons.slice";
import { setdarkMode } from "../store/slices/darkMode.slice";

const Settings = () => {

  const dispatch = useDispatch();

  const name = useSelector((state) => state.trainer);
  const darkMode = useSelector(state=>state.darkMode)
  const totalPokemons = useSelector( state => state.totalPokemons)
  const [edit, setEdit] = useState(false)
  const [num, setNum] = useState(totalPokemons)

  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const sumit = (data) => {
    dispatch(setTrainer(data));
    emptyForm();
    setEdit(false)
  };

  const emptyForm = () => {
    reset({
      name: "",
      gender: null,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch( settotalPokemons(Number(num)) )
    navigate(-1)
  }

  return (
    <div className="container__settings">
      <div className="container__settings__box">
      <div className="settings__title">
        <h1>Pokedex settings!</h1>
      </div>
       <div className="switch-pokedex">
        <span className="title-switch-pokedex"><i className='bx bx-sun'></i></span>
        <div className="form-check form-switch">
          <input
            className="form-check-input input-switch-pokedex"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            value={darkMode}
            onChange={()=>dispatch(setdarkMode(!darkMode))}
            checked={darkMode}
          />
        </div>
        <span className="title-switch-pokedex"><i className='bx bx-moon'></i></span>
      </div>
      <hr />
      <div className="container__form">
        <form onSubmit={handleSubmit(sumit)} className="container__input__settings">
          <div className="input__settings">
            {
              edit ? <input
              {...register("name", { required: true })}
              name="name"
              type="text"
              placeholder={`Current name is: ${name.name}`}
            /> :
            <span>Current name is: {name.name}</span>
            }
          </div>
          <div className="settings__genre">
            
            {edit ? 
            <>
              <label htmlFor="male">
                <i className="bx bx-male-sign"></i>
              </label>
              <input
                {...register("gender", { required: true })}
                id="male"
                type="radio"
                name="gender"
                value="male"
              />
              <label htmlFor="female">
                <i className="bx bx-female-sign"></i>
              </label>
              <input
                {...register("gender", { required: true })}
                id="female"
                type="radio"
                name="gender"
                value="female"
              /> 
            </>
              : <span>Current gender is: {name.gender}</span>}
          </div>
          <div>
            {
              edit &&
              <button  className="settings__button" type="submit">Update information</button>
            }
          </div>
        </form>
        {
          !edit &&  
          <button className="btn--edit" onClick={()=>setEdit(true)}>Edit</button>
        }
      </div>
      <hr />
        <form className="container__form--range" onSubmit={onSubmit}>
          <label htmlFor="num">POKE X PAGE</label>
          <input className="drag__bar" id="num" required value={num} onChange={(e)=>setNum(e.target.value)} type="range" max="50" min="1"/>
          <span>{num}</span>
          <button className="btn--edit" type="submit">Set</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
