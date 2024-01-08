import React from "react";
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import Experience from './experience';
import Contacts from './contacts';
import Gallery from './gallery';
import NavBar from "./navBar"; 
import Home from "./home";
import Footer from "./footer";


 function App(){
   return(
    <Router>
             <div className="App">
                 <div><NavBar /> </div>
                <div className="Content">
                    <Routes>
                       <Route  path="/Experience"element={<Experience />}/ >
                               
                       <Route  path="/Contacts" element={<Contacts />}  />
                        
                      <Route  path="/Gallery" element={<Gallery />}  />
    
                       <Route  path="/"  element={<Home />}  />
                     </Routes>
                   </div>
                    <Footer />
            </div>   
        </Router>       
  )
 }




export default App;

