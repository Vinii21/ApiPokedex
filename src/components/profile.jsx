import he from "../assets/001-man.png"
import she from "../assets/002-woman.png"
import { useSelector } from "react-redux";

const Profile = () => {

    const trainer = useSelector(state => state.trainer)

    return (
        <div className="profile__container">
            <img src={trainer.gender === "male" ? he : she} alt="Icono trainer" />
        </div>
    );
}
 
export default Profile;