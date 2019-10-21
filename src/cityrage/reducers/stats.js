
export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
  case 'ADD_USER':
    return extend(clone(state), { [action.uid]: {
      displayName: action.displayName,
      email: action.email,
      photoURL: action.photoURL,      
    }});
  default:
    return state;
  }
}


export default statsReducer(state = {energy: 0,health: 10,points: 0}, action){
  swtich(action.type){
    case 'INCREASE_HEALTH':
      return
    case 'DECREASE_HEALTH':
  }
}




