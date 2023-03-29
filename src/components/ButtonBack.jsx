import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ButtonBack = () => {
  const navigate= useNavigate()
    return (
        <>  
            <div>
            <button className="btnback"
            onClick={()=>navigate(-1)}><i className='bx bx-arrow-back'></i></button>      
            </div>
            <Outlet />
        </>
    );
}
 
export default ButtonBack;