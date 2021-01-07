import {combineReducers} from 'redux';
import favorites from './favoritesReducer';

export default combineReducers({
  favorites,
  // 여기에 리듀서들을 넣어준다.
});
