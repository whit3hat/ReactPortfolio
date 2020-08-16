import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './assests/Resume.pdf';
import NoMatch from './components/NoMatch';
import './style.css'
import * as ReactStrap from 'react-bootstrap';

function App() {
  return (
   <Router> 
      <ReactStrap.Navbar expand='lg'>
        <ReactStrap.Navbar.Brand>
          <Link to={'/'}>Spencer Wood</Link>
        </ReactStrap.Navbar.Brand>
        <ReactStrap.Navbar.Toggle aria-controls='basic-navbar-nav' />
            <ReactStrap.Navbar.Collapse id='basic-navbar-nav'>

              <ReactStrap.Nav className='mr-auto'>
                  <ReactStrap.Nav.Link href="/Bio" to={'/Bio'}>Profile</ReactStrap.Nav.Link>
                  <ReactStrap.Nav.Link href="/Projects" to={'/Projects'} >Projects</ReactStrap.Nav.Link>
                  <ReactStrap.Nav.Link href="/Contact" to={'/Contact'} >Contact</ReactStrap.Nav.Link>
              </ReactStrap.Nav>
      
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
     
     <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/bio' component={Bio} />
         <Route path='/projects' component={Projects} />
         <Route path='/contact' component={Contact} />
         <Route component={NoMatch} />
       </Switch>
   </Router>
  );
}

export default App;
