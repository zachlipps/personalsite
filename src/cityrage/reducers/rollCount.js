export default function (state = 3, action) {
  switch (action.type) {
    case 'UPDATE_ROLLCOUNT':
      return action.newRollCount;
    default:
      return state;
  }
}

