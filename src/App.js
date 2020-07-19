import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import NoMatch from './pages/NoMatch';

function App() {
  return (
   <Router> 
     <Nav />
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
