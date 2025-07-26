import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './App.css'

const App: React.FC = () => {
  return (
    <>
      <nav className="container">
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
      </nav>
      <hr />      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
