import React from 'react';
import '../assets/home.css';
import { Link, Route } from 'react-router-dom';
import NewGame from '../containers/NewGameContainer';
import GamesList from '../containers/GamesListContainer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joined: false,
      cont: false,
      new: false,
    };
  }

  joinedClick() {
    this.setState({ joined: true });
  }

  render() {
    return (
      <div className="reception-container">
        <div
          style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}
        >

          <Link className="nav-link-btn" to="cityrage/newgame">
            <div style={{ alignSelf: 'center', border: '2px solid black', padding: '15px', borderRadius: '3px' }}>
              New Game
              </div>
          </Link>


          <Link className="nav-link-btn" to="cityrage/games-list">
            <div style={{ alignSelf: 'center', border: '2px solid black', padding: '15px', borderRadius: '3px' }}>
              Games List
            </div>
          </Link>


          <Route path="cityrage/newgame" component={NewGame} />
          <Route exact path="cityrage/games-list" component={GamesList} />


          <div style={{ flex: 1, margin: '50px' }}>
            <div className="rules">
            Game Rules
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
