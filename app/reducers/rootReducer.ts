import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import imageReducer from './imageSlice';
import postReducer from './postSlice';

const rootReducer = combineReducers({
  user: userReducer,
  image: imageReducer,
  post: postReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
