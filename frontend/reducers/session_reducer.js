import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash/merge';

const initialState = {
  currentUser: null,
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge(state, {currentUser: action.user});
    default:
      return state;
  }
};

export default sessionReducer;
