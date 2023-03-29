import { Outlet } from 'react-router-dom'
const Backgroud = () => {
  return (
    <div>
      <div className='container__balls'>
        <img className='img-background' src="/pokeball.png" alt="/pokeball.png" />
        <img className='img-background' src="/pokeball.png" alt="/pokeball.png" />
      </div>  
     
      <Outlet />
    </div>
  );
};

export default Backgroud;
