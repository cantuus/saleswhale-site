import React from 'react';
import logo from './images/logo.png'
import banner from './images/banner.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <ul className="nav-links">
          <li><a href="#">Why Saleswhale</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Company</a></li>
        </ul>
        <ul className="nav-links">
          <li><a href="#">Log in</a></li>
          <li><a href="#">Get a Demo</a></li>
        </ul>
      </nav>

      <main>
        <header>
          <div className="top-banner">
            <img src={banner} alt="fancy-banner"></img>
          </div>
        </header>




      </main>



    </div>
  );
}

export default App;
