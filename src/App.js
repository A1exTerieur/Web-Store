import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/Header'
import Home from './components/pages/Home';
import Todos from './components/pages/Todos';
import NotFound from './components/pages/NotFound';
import Jeuxvideo from './components/pages/Jeuxvideo'
import Informatique from './components/pages/Informatique'

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
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
