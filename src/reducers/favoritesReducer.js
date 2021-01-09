// 최초 상태값 지정해주기
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
  historical_data: [],
  historical_data_error: null,
};

// 타입 만들기
export const FETCH_HISTORICAL_DATA = 'FETCH_HISTORICAL_DATA';
export const FETCH_HISTORICAL_DATA_SUCCESS = 'FETCH_HISTORICAL_DATA_SUCCESS';
export const FETCH_HISTORICAL_DATA_FAILURE = 'FETCH_HISTORICAL_DATA_FAILURE';

// 리듀서 만들기
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HISTORICAL_DATA_SUCCESS:
      return {
        ...state,
        historical_data: action.payload,
        historical_data_error: null,
      };
    case FETCH_HISTORICAL_DATA_FAILURE:
      return {
        ...state,
        historical_data: null,
        historical_data_error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
