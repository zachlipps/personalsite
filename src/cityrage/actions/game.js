import { database } from "../../database";
import market from "../Cards/cards";
import { startListeningForUsers } from "./users";
import { gameSettings } from "../initial-state";
import { playersInLobby } from "./lobby";

const startGameAction = gameData => ({
  type: "UPDATE_GAME_DATA",
  gameData
});

const initializePlayer = (uid, idx, displayName) => {
  debugger;
  return database
    .ref(`/users/${uid}`)
    .once("value")
    .then(user => {
      const playerObj = Object.assign({}, user.val(), {
        turnOrder: idx,
        kingOnTurnStart: false,
        stats: {
          energy: gameSettings.initialEnergy,
          health: gameSettings.initialHealth,
          points: gameSettings.initialPoints
        },
        triggers: {
          coolAf: true
        },
        hand: [],
        character: "none",
        displayName
      });
      return [uid, playerObj];
    });
  }

export const startGame = () => (dispatch, storeState) => {
  const gid = storeState().auth.gid;
  const game = database.ref(`games/${gid}`);

  const playerArr = [];
  let promises = [
    game.child("/playerPosition").once("value"),
    game.child("/nameMap").once("value")
  ];
  Promise.all(promises)
    .then(([userIDS, nameMap]) => {
      if (userIDS.val() && userIDS.val().length >= gameSettings.minPlayers) {
        userIDS.val().forEach((userID, idx) => {
          playerArr.push(initializePlayer(userID, idx, nameMap.val()[userID]));
        });
        return playerArr;
      }
    })
    .then(players => Promise.all(players))
    .then(resolvedPlayerArray => {
      const playerObj = {};
      resolvedPlayerArray.forEach(el => {
        playerObj[el[0]] = el[1];
      });
      game.child("players").set(playerObj);
    })
    .then(() => {
      dispatch(initalizeOnGameStart());
      dispatch(setFirstPlayer());
      // dispatch(startListeningForUsers());
    })
    .then(() => {
      game.once("value").then(data => {
        dispatch(startGameAction(data.val()));
      });
    });
};

export const heyListen = () => dispatch => {
  dispatch(startListeningForUsers());
  dispatch(startListeningGameChanges());
};

const setFirstPlayer = () => (dispatch, storeState) => {
  const gid = storeState().auth.gid;
  const game = database.ref(`games/${gid}`);

  game
    .child("/playerPosition")
    .once("value")
    .then(playersArray => {
      const gameSize = playersArray.val().length;
      const firstPlayerIdx = Math.floor(Math.random() * gameSize);

      game.child("/currentTurn").set(firstPlayerIdx);
      game.child("/gameSize").set(gameSize);
      return playersArray.val()[firstPlayerIdx];
    })
    .then(firstPlayer => {
      game
        .child("/players")
        .once("value")
        .then(players => {
          game.child("/chosenOne").set({ uid: players.val()[firstPlayer].uid });
        });
    })
    .then(() => {
      game.child("started").set(true);
    });
};

const initalizeOnGameStart = () => (dispatch, storeState) => {
  const gid = storeState().auth.gid;
  const game = database.ref(`games/${gid}`);

  game.child("started").set(true);
  game.child("gid").set(gid);
  game.child("market").set(market);
  game.child("/rollCount").set(gameSettings.initialRolls);
  game.child("/king").set("none");
  game.child("/diceBox").set({
    one: { val: "?", selected: false },
    two: { val: "?", selected: false },
    three: { val: "?", selected: false },
    four: { val: "?", selected: false },
    five: { val: "?", selected: false },
    six: { val: "?", selected: false }
  });
  game.child("messages").set([{ id: "intialize the messages", text: "" }]);
};

export const startListeningGameChanges = () => (dispatch, storeState) => {
  const gid = storeState().auth.gid;
  const game = database.ref(`games/${gid}`);

  game.on("value", snapshot => {
    dispatch(startGameAction(snapshot.val()));
    dispatch(playersInLobby(snapshot.val()));
  });
};
