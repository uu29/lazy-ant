export const initialState = {
  is_logged_in: false,
  error: null,
};

// 타입 만들기
export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const REQUEST_SIGNUP_SUCCESS = 'REQUEST_SIGNUP_SUCCESS';
export const REQUEST_SIGNUP_FAILURE = 'REQUEST_SIGNUP_FAILURE';

// 리듀서 만들기
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SIGNUP_SUCCESS:
      return {...state, is_logged_in: true};
    case REQUEST_SIGNUP_FAILURE:
      return {...state, is_logged_in: false, error: action.error};
    default:
      return state;
  }
};

export default reducer;
