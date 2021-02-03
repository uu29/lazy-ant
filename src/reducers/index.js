import {combineReducers} from 'redux';
import favorites from './favoritesReducer';
import auth from './authReducer';

export default combineReducers({
  favorites,
  auth,
  // 여기에 리듀서들을 넣어준다.
});
