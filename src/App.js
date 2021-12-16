import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import './App.scss';

import Nav from './components/Nav.js';
import Home from './pages/Home.js';
import Menu from './pages/Menu.js';
import Contact from './pages/Contact.js';
import OpeningHours from './pages/OpeningHours.js';
import Gallery from './pages/Gallery.js';


class App extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speisekarte" element={<Menu />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/oeffnungszeiten" element={<OpeningHours />} />
            <Route path="/galerie" element={<Gallery />} />
          </Routes>
        </Router>

      </div>
    );
  }
}

export default App;
