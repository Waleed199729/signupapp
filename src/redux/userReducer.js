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
  user: {
    error: null,
    pinVerificationData: null,
  },
};

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      // debugger;
      return {
        users: action.payload,
      };

    case SIGNUP_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case PIN_VERIFY_SUCCESS:
      // debugger;
      return {
        ...state,
        pinVerificationData: action.payload,
      };
    case PIN_VERIFY_FAIL:
      return {
        ...state,
        pinVerificationData: null,
        error: action.payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,

        pinVerificationData: action.payload,
      };

    case LOGIN_FAIL:
      return {
        ...state,

        error: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        state,

        logoutData: action.payload,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
