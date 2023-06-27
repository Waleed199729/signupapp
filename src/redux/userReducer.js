import { SIGNUP_SUCCESS, SIGNUP_FAIL } from "./Action";

const initialState = {
  users: [],
  error: null,
};

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        users: action.payload,
        error: null,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
