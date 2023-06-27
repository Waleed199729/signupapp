import axios from "axios";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const signUpSuccess = (user) => {
  return async (dispatch) => {
    const usersData = {
      user: {
        first_name: user.firstname,
        last_name: user.lastname,
        password: user.password,
        password_confirmation: user.confirmpassword,
        country_code: user.country_code,
        phone: user.phone_no,
      },
    };
    try {
      const response = await axios.post(
        "http://demoapi.gharpar.co/api/v8/registrations.json",
        usersData
      );
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: error,
      });
    }
  };
};

export const signUpFail = (error) => {
  debugger;
  return {
    type: SIGNUP_FAIL,
    payload: error,
  };
};
