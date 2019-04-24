/**
 * @param {ReduxState} state 
 * @param { type, payload } the action to be performed on this specific state
 * @param action.payload the array of posts fetched
 */
export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      // payload is an array in this case
      return action.payload;
    default:
      return state;
  }
};
