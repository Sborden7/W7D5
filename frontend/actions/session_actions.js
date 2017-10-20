import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (user) => {
  return { type: RECEIVE_CURRENT_USER, user: user };
};

export const receiveErrors = (errors) => {
  return { type: RECEIVE_SESSION_ERRORS, errors: errors };
};

export const login = (user) => (dispatch) => {
  SessionAPIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ));
};

export const signup = (user) => (dispatch) => {
  SessionAPIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ));
};

export const logout = () => (dispatch) => {
  SessionAPIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ));
};
