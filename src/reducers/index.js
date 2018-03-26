import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  form,
  authReducer,
});

export default rootReducer;
