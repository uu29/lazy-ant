import {put, call, takeLatest} from 'redux-saga/effects';
import {
  REQUEST_SIGNUP,
  REQUEST_SIGNUP_SUCCESS,
  REQUEST_SIGNUP_FAILURE,
} from '../reducers/authReducer';
import * as api from '../utils/auth';

// 사가 함수 실행
export default function* saga() {
  yield takeLatest(REQUEST_SIGNUP, requestSignup$);
}
// 사가 함수 만들기
function* requestSignup$(action) {
  const {payload} = action;
  console.log(payload);
  if (!payload) return;
  try {
    const res = yield call(api._signupRequest, payload);
    const {status} = res;
    if (status !== 200) {
      console.log(res.data);
      console.log('fail to signup!');
      return;
    }
    yield put({type: REQUEST_SIGNUP_SUCCESS});
  } catch (error) {
    console.log(error);
    yield put({type: REQUEST_SIGNUP_FAILURE, error: error});
    return;
  } finally {
  }
}
