export default function (state = [], action) {
  switch (action.type) {
    case 'UPDATE_GAMESLIST':
      return action.gamesList;
    default:
      return state;
  }
}
