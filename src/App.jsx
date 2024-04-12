import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './Components/Aboutus';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import OurFood from './Components/OurFood';
import SignIn from './Components/SignIn';

function App() {

  const [count,Setcount] = useState(0);

  const handleAdd=() => {
    Setcount(count+1);
  }
  return (
    <>
      <BrowserRouter>
      <Header count={count}/>
      <Routes>

        <Route path="/" element={<Home handleAdd={handleAdd}/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/ourfood" element={<OurFood handleAdd={handleAdd}/>}/>
        <Route path="/signin" element={<SignIn />}/>

    </Routes>  
    <Footer />
    </BrowserRouter>
    </>
  )
}


export default App;
