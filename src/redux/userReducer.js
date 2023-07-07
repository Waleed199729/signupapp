import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  PIN_VERIFY_SUCCESS,
  PIN_VERIFY_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from "./Action";

const initialState = {
  loading: true,
  users: [],
  error: null,
  pinVerificationData: null,
  logoutData: null,
};

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        loading: true,
        users: action.payload,
        error: null,
      };
    case SIGNUP_FAIL:
      return {
        loading: false,
        ...state,
        error: action.payload,
      };

    case PIN_VERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        pinVerificationData: action.payload,
        error: null,
      };
    case PIN_VERIFY_FAIL:
      return {
        ...state,
        loading: false,
        pinVerificationData: null,
        error: action.payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        pinVerificationData: action.payload,
        error: null,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        state,
        loading: false,
        logoutData: action.payload,
        error: null,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        logoutData: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
