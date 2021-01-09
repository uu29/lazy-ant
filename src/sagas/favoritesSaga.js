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
  const {payload} = action;
  if (!payload) return;
  try {
    const res = yield call(api._fetchHistoricalData, payload);
    const {status} = res;
    if (status !== 200) {
      return;
    }
    const {data} = res;
    yield put({type: FETCH_HISTORICAL_DATA_SUCCESS, payload: data});
  } catch (error) {
    yield put({type: FETCH_HISTORICAL_DATA_FAILURE, error: error});
    return;
  } finally {
    // 맨 마지막에 실행되는 함수
  }
}
