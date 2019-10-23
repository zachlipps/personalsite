import React, { Component } from "react";
import map from "lodash/map";
import bangYellow from "../assets/media/bang_yellow.png";
import energyYellow from "../assets/media/energy.png";
import healthYellow from "../assets/media/heart_yellow.png";

class DiceBox extends Component {
  showIcon(val) {
    if (val === "health") {
      return (
        <img style={{ width: "25px", height: "25px" }} src={healthYellow} alt='' />
      );
    }
    if (val === "energy") {
      return (
        <img style={{ width: "25px", height: "25px" }} src={energyYellow} alt='' />
      );
    }
    if (val === "attack") {
      return <img style={{ width: "25px", height: "25px" }} src={bangYellow} alt='' />;
    }
    return val;
  }

  showSubmit() {
    const rolled = this.props.diceBox.one.val;
    const roller_uid = this.props.auth.uid;
    const roller = this.props.game.players[roller_uid];

    return rolled !== "?" &&
      this.props.auth.uid === this.props.game.chosenOne.uid ? (
      <div
        style={{
          display: "flex",
          flex: 0.5,
          width: "80px",
          backgroundColor: "#73C217",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
          boxShadow: "grey -1px 3px 10px",
          marginTop: "7px",
          cursor: "pointer"
        }}
      >
        <div
          style={{
            flex: 1,
            textAlign: "center",
            color: "white",
            fontSize: "13px",
            alignSelf: "center",
            alignItems: "center"
          }}
          onClick={
            this.props.game.submitted
              ? null
              : () => {
                  this.props.submitRoll(roller);
                }
          }
        >
          {this.props.game.submitted ? " SUBMITTED" : "SUBMIT"}
        </div>
      </div>
    ) : (
      <div
        style={{
          display: "flex",
          flex: 0.5,
          width: "80px",
          backgroundColor: "transparent"
        }}
      />
    );
  }

  showRollCount() {
    const roller_uid = this.props.auth.uid;
    const roller = this.props.game.players[roller_uid];

    return (
      !(
        this.props.game.chosenOne &&
        this.props.game.chosenOne.uid === this.props.auth.uid &&
        this.props.game.submitted &&
        !this.props.game.kingAttackedOnTurn
      ) && (
        <div
          onClick={() => {
            this.props.rollDice(
              this.props.auth.uid,
              this.props.game.chosenOne.uid,
              roller
            );
          }}
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            marginBottom: "6px",
            width: "80px",
            backgroundColor: "#4990E2",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "6px",
            boxShadow: "grey -1px 3px 10px",
            cursor: "pointer"
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "36px",
              fontWeight: "bold"
            }}
          >
            {this.props.game.rollCount}
          </div>
          <div
            style={{ textAlign: "center", color: "white", fontSize: "16px" }}
          >
            ROLL
          </div>
        </div>
      )
    );
  }

  endYourTurn() {
    return (
      <button
        style={{
          backgroundColor: "red",
          border: "1px solid red",
          borderRadius: "8px",
          color: "white",
          fontSize: "16px",
          width: "70px",
          height: "60px",
          boxShadow: "grey -1px 3px 10px",
          cursor: "pointer"
        }}
        onClick={() => {
          this.props.endTurn();
        }}
      >
        {" "}
        END TURN
      </button>
    );
  }

  render() {
    return (
      <div style={{ display: "flex", flex: 0.8, justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {!this.props.game.submitted && this.showRollCount()}
          {!this.props.game.submitted && this.showSubmit()}
          {this.props.game.submitted &&
            !this.props.game.kingAttackedOnTurn &&
            this.props.auth.uid === this.props.game.chosenOne.uid &&
            this.endYourTurn()}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            flex: 1,
            maxWidth: "250px"
          }}
        >
          {map(this.props.game.diceBox, (item, key) => (
            <div
              className={item.selected ? "dice-toggled" : "dice"}
              onClick={() =>
                this.props.selectDice(
                  key,
                  this.props.auth.uid,
                  this.props.game.chosenOne.uid
                )
              }
              key={key}
            >
              {this.showIcon(item.val)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DiceBox;
