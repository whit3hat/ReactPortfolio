import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import NoMatch from './pages/NoMatch';

function App() {
  return (
   <Router>
     <div>
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/bio' component={Bio} />
         <Route exact path='/projects' component={Projects} />
         <Route exact path='/contact' component={Contact} />
         <Route component={NoMatch} />
       </Switch>
     </div>
   </Router>
  );
}

export default App;
