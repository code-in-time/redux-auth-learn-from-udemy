import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

const routeUrl = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return (dispatch) => {
    // sub email to server
    axios.post(`${routeUrl}/signin`, { email, password })
      .then((response) => {
        // good
        // - update state to say authenticated
        dispatch({ type: AUTH_USER });
        // - savr jwt token
        // - redirect
        browserHistory.push('/feature');
      })
      .catch(() => {

        // bad
        // - show error
      });
  };
}

export function test() {}
