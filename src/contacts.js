import React from 'react'
import { Link } from 'react-router-dom';
const contacts = () => {
  return (
  <div className="contacts">
    <div className="cont">
       <div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="name">Enter your name</label>
          <input type="text" id="name" name="name" required=""/>
        </div>
        <div class="form-group">
          <label for="email">Company Email</label>
          <input type="text" id="email" name="email" required=""/>
        </div>
        <div class="form-group">
          <label for="textarea"> Enter your message here</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
        </div>
        <button class="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>
    </div>
         <div className="media">
          <h3>INSTAGRAM</h3>
          <Link to="https://www.instagram.com/hkbrista?igsh=MWo0MXJ2MGw2cGNlaQ=="><i class="fa-brands fa-instagram"></i></Link>
          <h3>LINKED IN</h3>
          <Link to="https://www.linkedin.com/in/hakim-ssembatya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i class="fa-brands fa-linkedin"></i></Link>
          <h3>PINTEREST</h3>
          <Link to="https://pin.it/73GjjYD"><i class="fa-brands fa-pinterest"></i></Link>
          <h3>YOUTUBE </h3>
          <Link to="https://youtube.com/@hkbrista?si=sk7xs9B7NAr-T92w"><i class="fa-brands fa-youtube"></i></Link>
          <h3>THREADS</h3>
          <Link to="https://www.threads.net/@hkbrista"><i class="fa-brands fa-threads"></i></Link>
            <h3>Mobile No</h3>
              <h4>+971562341357</h4>
         </div>
         
         

  </div>
   
  )
}

export default contacts