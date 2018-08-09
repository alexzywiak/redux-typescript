import { combineReducers } from 'redux';
import counter from './counter';

const reducers = {
  counter,
};

export type RootState = {
  [K in keyof typeof reducers]: ReturnType<typeof reducers[K]>
}

export default combineReducers(reducers);