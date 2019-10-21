import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./home";
import { CityRage } from "./cityrage";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <Switch>
        <AppContainer>
          <Route path="/cityrage">
            <CityRage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </AppContainer>
      </Switch>
    </Router>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default App;
