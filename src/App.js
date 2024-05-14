import React from 'react';
import { LoginSignup } from './components/login-signup/login-signup.jsx';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home.jsx';
import Placeorder from './pages/placeorder/placeorder.jsx';
import Footer from './components/Footer/Footer.jsx';
import Cart from './pages/cart/cart.jsx';


function App() {
  return (
    <>
    <div className='app'>
        <Routes>
          < Route path='/' element={<Home/>} />
          < Route path='/cart' element={<Cart/>} />
          < Route path='/order' element={<Placeorder/>}/>
          < Route path='/signin' element={<LoginSignup/>}/>
        </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
