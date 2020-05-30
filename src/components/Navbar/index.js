import React from 'react';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import './style.css';

function Nav() {
    return (
        <header>
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
    <a className="navbar-brand"><strong>Spencer Wood</strong></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/Home" component={Home}>Profile</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/Projects" component={Projects}>Portfolio <span className="sr-only">(current)</span></a>
        </li>
      </ul>
      <ul className="navbar-nav nav-flex-icons">
        <li className="nav-item">
          <a href = "https://github.com/whit3hat" className="nav-link"><i className="fab fa-github fa-lg"></i></a>
        </li>
          <li className="nav-item">
         <a href="https://www.linkedin.com/in/spencer-wood-73158b61/" className="nav-link"><i className="fab fa-linkedin fa-lg"></i></a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link"><i className="far fa-file-pdf fa-lg"></i></a>
          </li>
      </ul>
    </div>
  </nav>
</header>
    );
}

export default Nav;
