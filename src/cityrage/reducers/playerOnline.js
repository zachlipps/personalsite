export default function (state = [], action) {
  switch (action.type) {
    case 'UPDATE_PLAYERS' :
      return action.players;
    default:
      return state;
  }
}

