import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';



const MarketPlaceLayout = () => {
  return (
    <div>
      <div className='flex gap-7 m-6 font-medium' style={{textDecoration: "none"}}>
        <NavLink to="/marketplace">Return to Market</NavLink> 
        <NavLink to="/marketpalce/reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default MarketPlaceLayout;