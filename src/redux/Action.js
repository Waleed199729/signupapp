import axios from "axios";

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const PIN_VERIFY_SUCCESS = "PIN_VERIFY_SUCCESS";
export const PIN_VERIFY_FAIL = "PIN_VERIFY_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export const signUpSuccess = (user) => {
  return async (dispatch) => {
    const usersData = {
      user: {
        first_name: user.firstname,
        last_name: user.lastname,
        email: user.email,
        password: user.password,
        password_confirmation: user.confirmpassword,
        country_code: user.country_code,
        phone: user.phone_no,
      },
    };

    console.log("user ka data ", usersData);
    localStorage.setItem("usersData", JSON.stringify(usersData.user));

    try {
      const response = await axios.post(
        "http://demoapi.gharpar.co/api/v8/registrations.json",
        usersData
      );
      console.log("Response ka data", response);

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

export const pinVerify = (user) => {
  return async (dispatch) => {
    const usersPin = {
      user: {
        phone: user.phone_no,
        phone_pin: user.phone_pin,
      },
      user_session: {
        device_type: "ios/android",
        device_token: "xxx",
      },
    };
    localStorage.setItem("PinStorage", JSON.stringify(usersPin.user));

    try {
      const response = await axios.post(
        "http://demoapi.gharpar.co/api/v8/user_sessions/pin_verification.json",
        usersPin
      );

      dispatch({
        type: PIN_VERIFY_SUCCESS,
        payload: response.data, // Access the response data directly
      });

      console.log("API Pin response:", response.data);
    } catch (error) {
      dispatch({
        type: PIN_VERIFY_FAIL,
        payload: error,
      });
      console.log("API Pin error:", error);
    }
  };
};

export const loginSuccess = (user) => {
  return async (dispatch) => {
    const usersLogin = {
      user: {
        email: user.email,
        password: user.password,
      },
      user_session: {
        device_type: "ios/android",
        device_token: "xxx",
      },
    };
    localStorage.setItem("LoginStorage", JSON.stringify(usersLogin.user));

    try {
      const response = await axios.post(
        "http://demoapi.gharpar.co/api/v8/user_sessions.json",
        usersLogin
      );
      localStorage.setItem("LoginAuthToken", response.data.auth_token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response,
      });
      console.log("API Login response:", response.data);
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error,
      });
      console.log("API Login error:", error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      await axios.post(
        "http://demoapi.gharpar.co/api/v8/user_sessions/logout.json",
        {},
        {
          headers: {
            "AUTH-TOKEN": localStorage.getItem("LoginAuthToken"),
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: LOGOUT_SUCCESS,
      });

      localStorage.clear();
      sessionStorage.clear();
      alert("Successfully logged out.");
    } catch (error) {
      dispatch({
        type: LOGOUT_FAIL,
        payload: error,
      });
      console.log("API Logout error:", error);
    }
  };
};

// export const logout = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post(
//         "http://demoapi.gharpar.co/api/v8/user_sessions/logout.json",
//         {},
//         {
//           headers: {
//             "AUTH-TOKEN": localStorage.removeItem("LoginAuthToken"),
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       dispatch({
//         type: LOGOUT_SUCCESS,
//         payload: response,
//       });

//       localStorage.clear();
//       sessionStorage.clear();

//       console.log("API Logout response:", response.data);
//     } catch (error) {
//       dispatch({
//         type: LOGOUT_FAIL,
//         payload: error,
//       });
//       console.log("API Logout error:", error);
//     }
//   };
// };
