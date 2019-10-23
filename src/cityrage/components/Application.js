import React from "react";
import { Link, Route, withRouter, Redirect, Switch } from "react-router-dom";
import styled, { css } from "styled-components";
import Loading from "./Loading";
import Lobby from "../containers/LobbyContainer";
import Home from "../containers/HomeContainer";
import NewGame from "../containers/NewGameContainer";
import SignIn from "../containers/SignInContainer";
import GamesList from "../containers/GamesListContainer";
import Rules from "../components/Rules";
import "../assets/App.css";
import logo from "../assets/media/iconlrg.png";

const renderRoutes = status => {
  if (status === "ANONYMOUS") {
    return (
      <Switch>
        <Route path="/cityrage/signin" component={SignIn}></Route>
        <Redirect to="/cityrage/signin" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route exact path="/cityrage" component={Home} />
        <Route path="/cityrage/newgame" component={NewGame} />
        <Route exact path="/cityrage/games-list" component={GamesList} />
        <Route path="/cityrage/games-list/lobby/:game" component={Lobby} />
        <Route path="/cityrage/rules" component={Rules} />
        <Redirect to="/cityrage" />
      </Switch>
    );
  }
};

const Application = props => {
  const { auth, signOut } = props;

  return (
    <AppContainer
      className="Application"
      style={{ width: "100%", height: "100%" }}
    >
      <NavContainer>
        <Column>
          <img
            style={{
              width: "40px",
              padding: "6px",
              cursor: "pointer"
            }}
            src={logo}
            onClick={() => props.history.push("/cityrage")}
          />
        </Column>
        <Column>
          <NavLink to="/">Home</NavLink>
          {auth.status === "ANONYMOUS" && (
            <NavLink to="/cityrage/signin">Sign In</NavLink>
          )}
          {auth.status === "SIGNED_IN" && (
            <NavLink
              style={{
                alignSelf: "center",
                display: "flex",
                alignItems: "center"
              }}
              onClick={() => {
                auth && signOut(auth.uid);
              }}
            >
              Sign Out
            </NavLink>
          )}
        </Column>
      </NavContainer>
      {auth.status === "AWAITING_AUTH_RESPONSE" && <Loading />}
      {renderRoutes(auth.status)}
    </AppContainer>
  );
};

const Column = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

const NavContainer = styled.div`
  height: 60px;
  box-shadow: grey -1px 3px 12px;
  background: #f6a623;
  display: flex;
  align-items: "center";
  align-content: "center";
  justify-content: space-between;
`;

const NavStyles = css`
  margin: 0 3vw;
  flex: 1;
  align-items: "center";
  justify-content: "center";
  align-self: "center";
  color: black;
  text-align: center;
  cursor: hand;
  :hover {
    color: white;
    font-weight: bold;
  }
`;

const NavLink = styled(Link)`
  ${NavStyles};
`;

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default withRouter(Application);
