import { combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './weather';
import marketReducer from './market';

export default combineReducers({
  weather: weatherReducer,
  market: marketReducer,
});
