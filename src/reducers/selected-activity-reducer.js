export default (state = {}, action) => {
  switch (action.type) {
  case 'SELECT_ACTIVITY':
    return action.activityId;
  default:
    return state;
  }
};