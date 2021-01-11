export const initialState = {
  is_fetching: true,
  my_favorites: [
    {symbol: '005930.KS'},
    // {symbol: '005380.KS'},
    // {symbol: '051910.KS'},
    // {symbol: '006400.KS'},
    {symbol: 'TSLA', region: 'US'},
    {symbol: 'AAPL', region: 'US'},
    {symbol: 'NVDA', region: 'US'},
    // {symbol: 'ASML', region: 'US'},
    // {symbol: 'AMZN', region: 'US'},
    // {symbol: 'WMT', region: 'US'},
    // {symbol: 'NKE', region: 'US'},
  ],
  my_favorites_error: null,
  historical_data: [],
  historical_data_error: null,
  symbol_profiles: [],
  symbol_profiles_error: null,
};

// 타입 만들기
export const FETCH_HISTORICAL_DATA = 'FETCH_HISTORICAL_DATA';
export const FETCH_HISTORICAL_DATA_SUCCESS = 'FETCH_HISTORICAL_DATA_SUCCESS';
export const FETCH_HISTORICAL_DATA_FAILURE = 'FETCH_HISTORICAL_DATA_FAILURE';
export const FETCH_SYMBOL_PROFILES = 'FETCH_SYMBOL_PROFILES';
export const FETCH_SYMBOL_PROFILES_SUCCESS = 'FETCH_SYMBOL_PROFILES_SUCCESS';
export const FETCH_SYMBOL_PROFILES_FAILURE = 'FETCH_SYMBOL_PROFILES_FAILURE';
export const IS_FETCHING_COMPLETE = 'IS_FETCHING_COMPLETE';

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
    case FETCH_SYMBOL_PROFILES_SUCCESS:
      return {
        ...state,
        symbol_profiles: action.payload,
        symbol_profiles_error: null,
      };
    case FETCH_SYMBOL_PROFILES_FAILURE:
      return {
        ...state,
        symbol_profiles: null,
        symbol_profiles_error: action.error,
      };
    case IS_FETCHING_COMPLETE:
      return {
        ...state,
        is_fetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
