export default function (state = [], action) {
  switch (action.type) {
    case 'JOIN_GAME':
      return action.newPlayers;
    case 'LEAVE_GAME':
      return action.playerArr;
    default:
      return state;
  }
}
