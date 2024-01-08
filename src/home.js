import React from 'react'
import blog from './images/blog.jpeg'
import { Link } from 'react-router-dom';
const Home  = () => {
  return (
    <div className='main'>
        <div className="container">
        <div className="home">
                <div className='img'>
                <img src={blog}  alt="blog" />

                </div>
              <div className="objective">
                <h3>HAKIM SSEMBATYA</h3>
                   <h5> Coffeeshop|Restaurant manager</h5>
              <p>Hi, I'm Hakim an outlet-manager with 6 years of experience supporting well-attended events and caffè operations.
               Adept at creating innovative drink recipes, inventory manager and brewer. Thoughtful and detail-oriented theme
                and event planner, coordinating staffing and providing guidance for employees when necessary. Seeking to
                 leverage my passion for coffee and managerial abilities to continue enhancing the reputation and success of
                  a dynamic coffee establishment. </p>

                  <button>
                  <Link to='/contacts'>CONTACT <i class="fa-solid fa-arrow-right"></i></Link>
                  </button>
              </div>
        </div>

         <div className="expertise">
               <h1>EXPERTISE</h1>
         <div className="expert">
          <div className="no2">
         
            <h3>I'M A BARISTA</h3>
            <p>Restaurant|caffè setup for example menu formation, recipe, equipment purchase.</p>
            <p>Cordial & great customer service, upselling & suggestive selling.</p>
            <p>Creative and beautiful latte art skills.</p>
            <p>Recipe formation for both hot and cold beverages.</p>
            <p>Espresso machine callibration.</p>
            <p>Manual coffee brewing. </p>
            
          </div>
          <div className="no2">
            <h3>I'M A LEADER</h3>
            <p>I manage my team with a great skill to provide an elevated great atmosphere at work.</p>
            <p>Scheduling and allocating staff to work-stations. </p>
            <p>I train new staff and ensure they follow the outlet's SOP.</p>
            <p>Planning for the outlet and ensuring continous supply of food and beverages to customers.</p>
            <p>Inventory management and purchasing stock required for the operation.</p>
            <p>Decision making. </p>
          </div>
        </div>
         </div>

        
        
        <div className="skills">
            <div className='head'>  <h6>SKILLS</h6></div>
          <div className="skill">
            <div className="no1">
              <div>Team leadership</div>
              <div>Inventory management & control</div>
              <div>Menu development</div>
              <div>Recipe development</div>
              <div>Customer service</div>
              <div>POS operation</div>
              <div>Coffee knowledge</div>
              <div>Coffee brewing</div>
            </div>
            <div className="no1">
              <div>English-fluent</div>
              <div>Arabic-beginner</div>
              <div>Proactive</div>
              <div>Latte art</div>
              <div>Proffessional demeanour</div>
              <div>Espresso machine operation</div>
              <div>Food safety and hygiene</div>
              <div>Restaurant|caffè setup</div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Home;