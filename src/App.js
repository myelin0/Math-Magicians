import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './Home';
import Quotes from './Quotes';

const App = () => (
  <>
    <div className="header">
      <div style={{
        fontSize: '3rem',
        fontWeight: '600',
      }}
      >
        Math Magicians
      </div>
      <nav style={{
        margin: '0.2rem',
      }}
      >
        <Link to="/">Home </Link>
        {' '}
        |
        {' '}
        <Link to="/Calculator">Calculator </Link>
        {' '}
        |
        {' '}
        <Link to="/Quotes">Quotes |</Link>
      </nav>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Quotes" element={<Quotes />} />
    </Routes>
  </>

);

export default App;
