import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import SignIn from './SignIn';
import Loading from './Loading';
import Lobby from '../containers/LobbyContainer';
import Home from '../containers/HomeContainer';
import NewGame from '../containers/NewGameContainer';
import GamesList from '../containers/GamesListContainer';
import Rules from '../components/Rules';
import '../assets/App.css';
import logo from '../assets/media/iconlrg.png';

const Application = ({ auth, signIn, signOut }) => (
  <Router>
    <main className="Application">
      <div>
        <NavContainer>
          <div><img style={{ width: '40px', padding: '6px', marginLeft: '6px', marginRight: '-10px' }} src={logo} /></div>
          <div style={{ alignSelf: 'center', fontWeight: 'bold', flex: 1, fontSize: '25px' }} ><Link className="nav-link" to="/">CITYRAGE</Link></div>
          <div style={{ alignSelf: 'center', float: 'left', flex: 1 }} ><Link className="nav-link" to="/">Home</Link></div>
          <div style={{ flex: 7 }} />
          { auth.status === 'ANONYMOUS' && <div style={{ alignSelf: 'center', display: 'flex', alignItems: 'center', float: 'left' }} className="nav-link"><SignIn signIn={signIn} /></div> }
          { auth.status === 'SIGNED_IN' && <div style={{ alignSelf: 'center', display: 'flex', alignItems: 'center' }} className="nav-link" onClick={() => { auth && signOut(auth.uid) }}>Sign Out</div>}
        </NavContainer>
        { auth.status === 'AWAITING_AUTH_RESPONSE' && <Loading /> }

        <Route exact path="/" component={Home} />
        <Route path="/newgame" component={NewGame} />
        <Route exact path="/games-list" component={GamesList} />
        <Route path="/games-list/lobby/:game" component={Lobby} />
        <Route path="/rules" component={Rules} />
      </div>
    </main>
  </Router>
);

const NavContainer = styled.div`
  height: 60px;
  box-shadow: grey -1px 3px 12px; 
  background: #F6A623;   
  display: flex;
  margin-top: -8px;
  margin-left: -8px;
  margin-right: -8px;
  align-items: 'center';
  align-content: 'center';
  justify-content: 'center';
`;


export default Application;

