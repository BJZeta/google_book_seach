import React from 'react';
import Search from './pages/Search';
import Save from './pages/Save';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/404Page';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Search}/>
          <Route exact path='/saved' component={Save}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
