import initialState from '../initial-state.js';


export default function (state = initialState.diceBox, action) {
  switch (action.type) {
    case 'DEFAULT_DICE':
      return action.payload;
    case 'CHANGE_SELECTED_DICE':
      return action.die;
    case 'ROLL_DICE' :
      return 'ROLL DICE';
    case 'UPDATE_DICEBOX':
      return action.listOfDice;
    default:
      return state;
  }
}
