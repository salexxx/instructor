import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Profile from './Profile';
import Whatsapp from './Whatsapp';
import NavBar from './NavBar';
import Teaching from './Teaching';
import FisRules from './FisRules';
import Technical from './Technical';
import Footer from './Footer';


function App() {

  return (
    
    <> 
    <BrowserRouter >
     < Header />
     <NavBar /> 
     <Routes> 
       <Route path="/" element={ < Profile />} />
       <Route path='/teaching' element={ <Teaching />} />
       <Route path='/fisrules' element={ <FisRules />} /> 
       <Route path='/technical' element={ <Technical />} />  
     </Routes>
     
     < Footer />
    
     </BrowserRouter>

     < Whatsapp />
    </>
  );
}

export default App;
