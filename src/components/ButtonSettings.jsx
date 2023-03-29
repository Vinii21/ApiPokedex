import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ButtonSettings = () => {
    return (
        <>  
            <Link to="/settings" className="sttings"><i className='bx bx-cog'></i></Link>
            <Outlet />
        </>
    );
}
 
export default ButtonSettings;