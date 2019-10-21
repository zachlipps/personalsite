import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './home';
import { CityRage } from './cityrage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/cityrage">
            <CityRage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
