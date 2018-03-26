import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';


export default function (state = {
  authenticated: false,
  error: '',
}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, error: '' };

    case UNAUTH_USER:
      return { ...state, authenticated: false, error: '' };

    case AUTH_ERROR:
      return { ...state, authenticated: false, error: action.payload };

    default:
    //   console.log('actions don match');
  }
  return state;
}
