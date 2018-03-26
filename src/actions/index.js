import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

const routeUrl = 'http://localhost:3090';


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}


export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER,
  };
}

export function signinUser({ email, password }) {
  return (dispatch) => {
    // sub email to server
    axios.post(`${routeUrl}/signin`, { email, password })
      .then((response) => {
        // good
        // - update state to say authenticated
        dispatch({ type: AUTH_USER });
        // - savr jwt token
        localStorage.setItem('token', response.data.token);
        // - redirect
        browserHistory.push('/feature');
      })
      .catch(() => {
        // bad
        // - show error
        dispatch(authError('Bad login info'));
      });
  };
}

