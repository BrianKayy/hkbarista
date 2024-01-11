import React from 'react';
import { Link } from 'react-router-dom';
import gallery from './gallery';
const Home  = () => {
  return (
    <div className='main'>
      
        <div className="container">
        <div className="home">
              
              <div className="objective">
                <h3>HAKIM SSEMBATYA</h3>
                   <h5>coffee Connoisseur| Head-Barista |Assistant-manager </h5>
              <p>Experienced Outlet F&B Assistant Manager with a demonstrated history 
                of working in the restaurant and Cafe industry. Skilled in Management,
                 Rostering, Employee Training, Leadership and Team Building. 
                 Strong operations professional with a SVQ Level 3 focused
                  in Business Management from Institution of Higher
                   Education for Business.
                  </p>

                  <button>
                  <Link to='/contacts'>CONTACT <i class="fa-solid fa-arrow-right"></i></Link>
                  </button>
              </div>
        </div>
        <div className="component">
            <gallery />{gallery}
      </div>
        <div className="education">
          <h1>EDUCATION</h1>
          <p>SVQ LEVEL 3: Business Management YMCA,Kampala,Uganda 2017</p>
         </div>

         <div className="expertise">
               <h1>EXPERTISE</h1>
         <div className="expert">
          <div className="no2">
         
            <h3>I'M A COFFEE CONNOISSEUR</h3>
            <p>Cafè setup for example menu formation, recipe, equipment purchase.</p>
            <p>Cordial & great customer service, upselling & suggestive selling.</p>
            <p>Creative and beautiful latte art skills.</p>
            <p>Recipe formation for both hot and cold beverages.</p>
            <p>Espresso machine callibration.</p>
            <p>Manual coffee brewing. </p>
            
          </div>
          <div className="no2">
            <h3>I'M A LEADER</h3>
            <p>I manage my team with  great skills to provide an elevated working atmosphere.</p>
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
  );
};

export default Home;