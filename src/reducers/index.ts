import { combineReducers } from 'redux';
import userReducers from './user';

const RootReducer = combineReducers({
  user: userReducers,
});
export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
