import {call, put} from 'redux-saga/effects';

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* (action) {
    try {
      const {payload} = action;
      const response = yield call(request, payload);
      const {status, data, error} = response;
      if (status === 200) {
        yield put({
          type: SUCCESS,
          payload: data,
        });
      } else {
        throw error;
      }
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
      });
    } finally {
      console.log('finally');
      // 마지막으로 실행할 리듀서
    }
  };
}
