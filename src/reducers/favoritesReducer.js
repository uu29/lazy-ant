import {createAction, handleActions} from 'redux-actions';

import createRequestSaga, {
  createRequestActionTypes,
} from '../sagas/createRequestSaga';
import {takeLatest} from 'redux-saga/effects';
import * as _api from '../utils/favorites';

export const initialState = {
  my_favorites: [
    {symbol: '005930.KS'},
    {symbol: '005380.KS'},
    {symbol: '051910.KS'},
    {symbol: '006400.KS'},
    {symbol: 'TSLA', region: 'US'},
    {symbol: 'AAPL', region: 'US'},
    {symbol: 'NVDA', region: 'US'},
    {symbol: 'ASML', region: 'US'},
    {symbol: 'AMZN', region: 'US'},
    {symbol: 'WMT', region: 'US'},
    {symbol: 'NKE', region: 'US'},
  ],
  my_favorites_error: null,
};

const [
  FETCH_HISTORICAL_DATA,
  FETCH_HISTORICAL_DATA_SUCCESS,
  FETCH_HISTORICAL_DATA_FAILURE,
] = createRequestActionTypes('favorites/FETCH_HISTORICAL_DATA');

export const getHistoricalData = createAction(
  FETCH_HISTORICAL_DATA,
  ({symbol, region}) => ({
    symbol,
    region,
  }),
);

const _fetchHistoricalData = createRequestSaga(
  FETCH_HISTORICAL_DATA,
  _api.getHistoricalData,
);

export function* authSaga() {
  yield takeLatest(FETCH_HISTORICAL_DATA, _fetchHistoricalData);
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HISTORICAL_DATA_SUCCESS:
      return {...state, my_favorites: action.payload, my_favorites_error: null};
    case FETCH_HISTORICAL_DATA_FAILURE:
      return {...state, my_favorites: null, my_favorites_error: action.payload};
    default:
      return state;
  }
};

export default reducer;
