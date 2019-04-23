/**
 * @param {ReduxState} state 
 * @param { type, payload } action the action to be performed on this specific state
 * @param action.payload the user fetched
 */
export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_USER':
      // payload is an object in this case, 
      // so we got to destruct that old state(users[]) and create 
      // a new with this object
      return [...state, action.payload];
    default:
      return state;
  }
};
