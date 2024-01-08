import { Link } from 'react-router-dom';
import React from "react";
import { useState } from "react";

const NavBar = () => {

  const [hiddenMenu, setHiddenMenu] = useState(true);
  return (

    <div className="nav">
      <nav className='navbar'>
    <div className="myNavbar">
    <Link className="hk" to="/">Hakim Ssembatya  <i class="fa-solid fa-mug-saucer"></i></Link>
     <i onClick={()=>setHiddenMenu(!hiddenMenu)} class="fa-solid fa-bars"></i>
    </div>

     <div className="links">
    <div className= {(hiddenMenu ? 'hidden' : '' )+ " menu"}>
    <Link to='/'>HOME</Link>
    <Link to='/Experience'>EXPERIENCE</Link>
    <Link to='/Contacts'>CONTACTS</Link>
    </div>
  </div>
          
    </nav>
    </div>
    
  )
}

export default NavBar;