import React from "react";
import Lobby from "../containers/LobbyContainer";
import "../assets/gamesList.css";
import styled from 'styled-components';

export default class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gid: "",
      joined: false,
      nickName: ""
    };

    this.changeGid = this.changeGid.bind(this);
  }
  componentWillMount() {
    this.props.grabListOfGames();
  }

  changeGid(gid) {
    this.setState({
      gid
    });
  }

  updateNickName = (e) => {
    this.setState({
      nickName: e.target.value
    })
  };

  renderLobbyTiles() {
    return (
      <div className="lobby_tiles_container" style={{ padding: "20px" }}>
        {this.props.gamesList.map(gameItem => (
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div style={{ flex: 1 }} />
            <div
              className="lobby_tile"
              style={{ flex: 1 }}
              key={gameItem.gid}
              onClick={() => {
                this.changeGid(gameItem.gid);
                this.props.joinGame(this.props.auth.uid, gameItem.gid, this.state.nickName);
                this.setState({ joined: true });
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  flex: 1,
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center"
                }}
              >
                <div style={{ flex: 1, display: "flex", fontSize: "30px" }}>
                  {gameItem.name}
                </div>
              </div>
              <div
                style={{
                  width: "100px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <div
                  style={{
                    flex: 1,
                    alignContent: "center",
                    textAlign: "center",
                    cursor: "pointer"
                  }}
                >
                  JOIN GAME
                </div>
              </div>
            </div>
            <div style={{ flex: 1 }} />
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        {!this.state.joined ? (
          <div>
            <div
              style={{
                fontSize: "35px",
                textAlign: "center",
                fontWeight: "bold",
                paddingTop: "25px",
                paddingBottom: "-10px",
                marginBottom: "10px"
              }}
            >
              GAME LIST
            </div>
            <MaxWidth>
              
              <InputContainer><Label>Player NickName</Label><Input name="nickname" onChange={this.updateNickName}></Input></InputContainer>
            </MaxWidth>
            <div>{this.renderLobbyTiles()}</div>
          </div>
        ) : (
          <div>{this.state.gid !== "" && <Lobby gid={this.state.gid} />}</div>
        )}
      </div>
    );
  }
}



const MaxWidth = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 40%;
  align-items: center;
`;

const Input = styled.input`
  flex: 2;
  border-radius: 6px;
  padding: 10px 5px;
`;

const Label = styled.label`
  flex: 1;
`;
