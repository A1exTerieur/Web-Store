import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/Header'
import Home from './components/pages/Home';
import Todos from './components/pages/Todos';
import NotFound from './components/pages/NotFound';
import Jeuxvideo from './components/pages/Jeuxvideo'
import Informatique from './components/pages/Informatique'
import Produit from './components/pages/Produit'
import Panier from './components/pages/Panier'
import Profil from './components/pages/Profil'
const App = () => {


  return (
    <div className="container">
      <BrowserRouter>
      <Header />

      <div className='row'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Jeuxvideo" element={<Jeuxvideo />} />
          <Route path="/Informatique" element={<Informatique />} />
          <Route path="/Produit/" element={<Produit />} />
          <Route path="/Produit/:name" element={<Produit />} />
          <Route path="/Panier" element={<Panier />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
