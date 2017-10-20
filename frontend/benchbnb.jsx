import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIController from './util/session_api_util';
import configureStore from './store/store';
import { login, signup, logout } from '../actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.signup = SessionAPIController.signup;
  window.login = SessionAPIController.login;
  window.logout = SessionAPIController.logout;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>benchbnb</h1>, root);
});
