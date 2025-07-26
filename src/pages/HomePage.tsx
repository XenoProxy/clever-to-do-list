import React from 'react';

const HomePage: React.FC = () => {
  return (
  <>
  <h1>Clever to-do list</h1>
  <div className="container">
    <a href="#"><span className="bright sign-in">Sign in</span></a>
    <p className="simpe-text">or</p>
    <a href="#"><span className="bright register">Register</span></a>
  </div>
  </>
  );
}

export default HomePage;