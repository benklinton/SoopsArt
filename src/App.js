import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path = '/' component={Home}/>
          <Route exact path = '/contact' component={Contact}/>
          <Route exact path = '/about' component={About}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
