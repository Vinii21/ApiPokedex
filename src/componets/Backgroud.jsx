import { Outlet } from 'react-router-dom'
const Backgroud = () => {
  return (
    <div className='background'>
      
        <img className='img-background float-end' src="/public/pokeball.png" alt="/pokeball.png" />
     
      <Outlet />
    </div>
  );
};

export default Backgroud;
