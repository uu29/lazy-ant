import {put, call, takeLatest} from 'redux-saga/effects';
import {
  FETCH_HISTORICAL_DATA,
  FETCH_HISTORICAL_DATA_SUCCESS,
  FETCH_HISTORICAL_DATA_FAILURE,
} from '../reducers/favoritesReducer';
import * as api from '../utils/favorites';

// 사가 함수 실행
export default function* authSaga() {
  yield takeLatest(FETCH_HISTORICAL_DATA, fetchHistoricalData$);
}

// 사가 함수 만들기
function* fetchHistoricalData$(action) {
  const {myFavorites} = action;
  console.log(myFavorites);
  if (!myFavorites) return;
  try {
    // 새로운 배열 생성
    const historical_data = [];
    // my_favorites 배열의 갯수 만큼 api 호출
    for (const i in myFavorites) {
      console.log(myFavorites[i]);
      let res = yield call(api._fetchHistoricalData, myFavorites[i]);
      let {status} = res;
      if (status !== 200) {
        return;
      }
      let {data} = res;
      let {prices} = data;
      // 가장 최신 주가 정보를 넣어줌
      historical_data.push(prices[0]);
    }
    yield put({type: FETCH_HISTORICAL_DATA_SUCCESS, payload: historical_data});
  } catch (error) {
    yield put({type: FETCH_HISTORICAL_DATA_FAILURE, error: error});
    return;
  } finally {
    // 맨 마지막에 실행되는 함수
  }
}
