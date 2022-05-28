import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import MainPageCatalog from './Menu/MainPageCatalog';
import Contacts from "./Menu/Contacts";
import Home from "./Menu/Home";
import Cart from "./Components/Cart/Cart";
import MainPageSale from "./Menu/MainPageSale";
import bw from "./Menu/BW.png"
import Testimonials from "./Menu/Testimonials";








function App() {

 
  return <Router>
    <div className="head">
      <p className="tel"> 8-800-900-110-99</p>
      <h3><img src={bw} width={40} alt='bw' /> the beauty shop</h3>

      <Link to='./cart' className="link" >
    <img className="buy"  src="https://www.emojiall.com/images/240/twitter/1f6d2.png" width={30} height={30}  alt='' />
    </Link>
  

    </div >
    <div className="top">
    
    </div>

  <nav>
    <Link to='./home' className="link" >Главная</Link>
    <Link to='./mainPageCatalog' className="link" > Каталог</Link>
    <Link to='./sale' className="link" >Акции <img className="fire" src="https://img.icons8.com/emoji/48/000000/fire.png" width={20} alt=''/></Link>
    <Link to='./testimonials' className="link" > Отзывы</Link>
    <Link to='./contacts' className="link" >Контакты</Link>
  </nav>
  
  <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/mainPageCatalog' element={<MainPageCatalog />} />
    <Route path='/cart' element ={<Cart /> } />
    <Route path='/contacts' element={<Contacts /> } />
    <Route path='/cart' element ={<Cart /> } />
    <Route path='/sale' element ={<MainPageSale /> } />
    <Route path='/testimonials' element = {<Testimonials/>} />
    


    


  </Routes>
 
  </Router> 
 ;

}

export default App;
