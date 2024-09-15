import React from 'react';
import { useState } from 'react';
import { LOGO_URL } from '../utils/contants'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
function Header() {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  //when i click the login button complete header component refresh again
  const onlineStatus=useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50"> 
    {/*if my screen is greater then sm use yellow otherwise pink colour */}
      <div className='logo-container'>
        <img className="w-27 h-20" src={LOGO_URL} />
      </div>
      <div className='flex items-center'>
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "🔴" :"✅"}</li>
          <li className="px-4"><Link to='/'>Home</Link></li>
          <li className="px-4"> <Link to="/about">About us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4">Card</li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <button className='login' onClick={() => {
            btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login")
          }}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
