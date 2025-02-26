import React from 'react';
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';
import Home from './Pages/Home';
import TechData from './Pages/TechData';
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/techData' element={<TechData />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
