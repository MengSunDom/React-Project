import React from 'react';
import {HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

import NotFound from '../home/notfound'; 
import Home from '../home/home';
import About from '../home/about';
import Contact from '../home/contact';
import Profile from '../home/profile';

const routeConfig: React.FC = () => {
  return (
    <div>
      <h2>Hello</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/profile">profile</Link></li>
        </ul>
      </nav>

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:id" element={<Profile />} /> {/* Dynamic route */}
          <Route path="*" element={<NotFound />} /> {/* Catch-all for unmatched routes */}
        </Routes>
    </div>
  );
};

export default routeConfig;