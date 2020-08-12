import React from 'react';
import { Link } from 'react-router-dom';
import Resume from '../../assests/Resume.pdf';
import * as ReactStrap from 'react-bootstrap';
import './style.css';


function Nav () {
    return (
        <ReactStrap.Navbar expand="lg">
  <ReactStrap.Navbar.Brand>
     <Link to={"/"} >Spencer Wood</Link>
     </ReactStrap.Navbar.Brand>
  <ReactStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactStrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactStrap.Nav className="mr-auto">
      <ReactStrap.Nav.Link href="/Bio" to={'/Bio'}>Profile</ReactStrap.Nav.Link>
      <ReactStrap.Nav.Link href="/Projects" to={'/Projects'} >Projects</ReactStrap.Nav.Link>
      <ReactStrap.Nav.Link href="/Contact" to={'/Contact'} >Contact</ReactStrap.Nav.Link>
    </ReactStrap.Nav>
    {/* <ReactStrap.Form inline>
      <ReactStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactStrap.Button variant="outline-success">Search</ReactStrap.Button>
    </ReactStrap.Form> */}

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
  </ReactStrap.Navbar.Collapse>
</ReactStrap.Navbar>
    )
}

export default Nav;