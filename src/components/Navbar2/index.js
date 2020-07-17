import React from 'react';
import Home from '../../pages/Home';
import Bio from '../../pages/Bio';
import Contact from '../../pages/Contact';
import Projects from '../../pages/Projects';
import Resume from '../../assests/Resume.pdf';
import * as ReactStrap from 'react-bootstrap';
import './style.css';


function Nav2 () {
    return (
        <ReactStrap.Navbar bg="light" expand="lg">
  <ReactStrap.Navbar.Brand href="/" component={Home}>Spencer Wood</ReactStrap.Navbar.Brand>
  <ReactStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactStrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactStrap.Nav className="mr-auto">
      <ReactStrap.Nav.Link href="/Bio" component={Bio}>Profile</ReactStrap.Nav.Link>
      <ReactStrap.Nav.Link href="/Projects" component={Projects}>Projects</ReactStrap.Nav.Link>
      <ReactStrap.Nav.Link href="/Contact" component={Contact}>Contact</ReactStrap.Nav.Link>
      <ul className="navbar-nav nav-flex-icons">
     <li className="nav-item">
          <a href = "https://github.com/whit3hat" className="nav-link"><i className="fab fa-github fa-lg"></i></a>
         </li>
           <li className="nav-item">
          <a href="https://www.linkedin.com/in/spencer-wood-73158b61/" className="nav-link"><i className="fab fa-linkedin fa-lg"></i></a>
           </li>
           <li className="nav-item">
             <a href={Resume} target='_blank' className="nav-link"><i className="far fa-file-pdf fa-lg"></i></a>
           </li>
       </ul>
    </ReactStrap.Nav>

  </ReactStrap.Navbar.Collapse>
</ReactStrap.Navbar>
    )
}

export default Nav2;