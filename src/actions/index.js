import axios from 'axios';

const routeUrl = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function (dispatch) {
    // sub email to server
    axios.post(`${routeUrl}/signin`, { email, password });


    // good
    // - update state to say authenticated
    // - savr jwt token
    // - redirect


    // bad
    // - show error
  };
}

export function test() {}
