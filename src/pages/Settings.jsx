import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setTrainer } from "../store/slices/trainer.slice";

const Settings = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.trainer);
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
    <div>
      <div>
      <h6>Pokedex settings!</h6>
      </div>
       <div className="switch-pokedex">
        <span className="title-switch-pokedex"><i className='bx bx-sun'></i></span>
        <div className="form-check form-switch">
          <input
            className="form-check-input input-switch-pokedex"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            // value={checkbox}
            // onChange={() => {
            //   setCheckbox(!checkbox);
            //   setIndexType(null);
            // }}
          />
        </div>
        <span className="title-switch-pokedex"><i class='bx bx-moon'></i></span>
      </div>
      <div>
        <form onSubmit={handleSubmit(sumit)} className="container__input">
          <div className="input">
            <input
              {...register("name", { required: true })}
              name="name"
              type="text"
              placeholder={`name ${name.name}`}
            />
          </div>
          <div>
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
          </div>
          <div>
            <button type="submit">Editar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
