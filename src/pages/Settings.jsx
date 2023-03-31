import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setTrainer } from "../store/slices/trainer.slice";
import { useState } from "react";

const Settings = () => {

  const dispatch = useDispatch();

  const name = useSelector((state) => state.trainer);
  const [edit, setEdit] = useState(false)

  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const sumit = (data) => {
    dispatch(setTrainer(data));
    emptyForm();
    navigate("/pokedex");
  };

  const emptyForm = () => {
    reset({
      name: "",
      gender: null,
    });
  };

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
          />
        </div>
        <span className="title-switch-pokedex"><i class='bx bx-moon'></i></span>
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
        <form>
          <input type="range" max="50" min="1"/>
          <button>Set</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
