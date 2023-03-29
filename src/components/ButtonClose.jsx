import { Link } from "react-router-dom";

const ButtonClose = () => {
    return (
        <div className="container__buttons">
            <Link to="/" className="close"><i className='bx bx-log-out'></i></Link>
        </div>
    );
}
 
export default ButtonClose;