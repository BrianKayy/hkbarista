import React from 'react'
import logo from './images/LOGO.jpeg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="main-footer">
         <img src={logo}  alt='logo'/>
                <div className="name">
                <h3>HAKIM SSEMBATYA</h3>
                {/* <h5><i class="fa-regular fa-envelope"></i>movicbanks18@gmail.com</h5> */}
                <h5>  <i class="fa-solid fa-location-dot"></i>+971562341357</h5>
                </div>

       
         <div className="socials">
         <Link to="https://www.instagram.com/hkbrista?igsh=MWo0MXJ2MGw2cGNlaQ=="><i class="fa-brands fa-instagram"></i></Link>
         <Link to="https://www.facebook.com/movicbanks?mibextid=LQQJ4d"><i class="fa-brands fa-facebook"></i></Link>
         <Link to="https://wa.me/+971562341357"><i class="fa-brands fa-whatsapp"></i></Link>
         <Link to=""><i class="fa-solid fa-phone"></i></Link>
         <Link to="https://www.linkedin.com/in/hakim-ssembatya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> <i class="fa-brands fa-linkedin"></i></Link>
         </div>
         
         
      </div>
      <span>Copyright @ 2024 by HKBarista</span>
    </div>
  )
}

export default Footer;