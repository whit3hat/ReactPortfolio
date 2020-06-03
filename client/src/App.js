import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

import NoMatch from './pages/NoMatch';

function App() {
  return (
   <Router>
     <div>
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/projects' component={Projects} />
         <Route component={NoMatch} />
       </Switch>
     </div>
   </Router>
  );
}

export default App;
