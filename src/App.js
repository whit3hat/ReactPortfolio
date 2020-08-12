import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './components/Home';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Contact from './components/Contact';

import NoMatch from './components/NoMatch';

function App() {
  return (
   <Router> 
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <ul className='navbar-nav mr-auto'>
       <li><Link to={'/'} className='nav-link'> Home </Link></li>
       <li><Link to={'/bio'} className='nav-link'> Bio </Link></li>
       <li><Link to={'/projects'} className='nav-link'> Projects </Link></li>
       <li><Link to={'/contact'} className='nav-link'> Contact </Link></li>
     </ul>
     </nav>
     {/* <Nav /> */}
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
