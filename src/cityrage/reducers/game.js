export default function (state = [], action) {
  switch (action.type) {
    case 'UPDATE_GAME_DATA':
      return action.gameData;
    default:
      return state;
  }
}
