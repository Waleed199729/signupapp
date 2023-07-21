import axios from "axios";
import Swal from "sweetalert2";
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
        password: user.password,
        password_confirmation: user.confirmpassword,
        country_code: user.country_code,
        phone: user.phone_no,
      },
    };

    localStorage.setItem("Home Verification", JSON.stringify(usersData.user));

    try {
      const response = await axios.post(
        "http://demoapi.gharpar.co/api/v8/registrations.json",
        usersData
      );
      // console.log("Response ka data", response);

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response,
      });

      Swal.fire({
        icon: "success",
        title: "Successfully Registered",
        text: "Please verify your pin ",
        showConfirmButton: true,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "Please register again ",
        showConfirmButton: true,
      });
      dispatch({
        type: SIGNUP_FAIL,
        payload: error,
      });
    }
  };
};

export const pinVerify = (user, navigate) => {
  return async (dispatch) => {
    const registerData = localStorage.getItem("Home Verification");
    const parseData = JSON.parse(registerData);
    console.log("register Data for Cell no", parseData.phone);

    const usersPin = {
      user: {
        phone: parseData.phone,
        phone_pin: user.phone_pin,
      },
      user_session: {
        device_type: "ios/android",
        device_token: "xxx",
      },
    };

    try {
      const response = await axios.post(
        "http://demoapi.gharpar.co/api/v8/user_sessions/pin_verification.json",
        usersPin
      );
      localStorage.setItem("PINN Verification", JSON.stringify(response.data));

      if (response.status === 200) {
        localStorage.setItem("LoginAuthToken", response.data.auth_token);
        // console.log("Pin user token", response.data.auth_token);

        dispatch({
          type: PIN_VERIFY_SUCCESS,
          payload: response.data, // Access the response data directly
        });
        navigate("/");

        Swal.fire({
          icon: "success",
          title: "Successfully Verified",
          text: "Welcome to your Dashboard",
          showConfirmButton: true,
        });
        // console.log("API Pin response:", response.data);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Verification Failed",
        text: "Please enter the valid pin no",
        showConfirmButton: true,
      });
      dispatch({
        type: PIN_VERIFY_FAIL,
        payload: error,
      });
      // console.log("API Pin error:", error);
    }
  };
};

export const loginSuccess = (user) => {
  // console.log("userssssssssssdata", user);
  return async (dispatch) => {
    const usersLogin = {
      user: {
        country_code: user.country_code,
        phone: user.phone_no,
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

      if (response.status === 200) {
        localStorage.setItem("LoginAuthToken", response.data.auth_token);

        const userObject = {
          id: response.data.id,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          user_status: response.data.user_status,
          country_code: response.data.country_code,
          phone: response.data.phone,
        };

        const userObjectString = JSON.stringify(userObject);
        localStorage.setItem("PINN Verification", userObjectString);

        dispatch({
          type: LOGIN_SUCCESS,
          payload: response,
        });
        Swal.fire({
          icon: "success",
          title: "Successfully Logged In",
          text: "welcome to our dashboard",
          showConfirmButton: true,
        });
        // alert("Are you sure you want to log in?");
        // console.log("API Login response:", response.data);
        // console.log("API Login response:", response.status);
      }
    } catch (error) {
      if (error.response.status === 400) {
        // alert("Invalid credential");
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Please enter the valid credentials",
          showConfirmButton: true,
        });

        dispatch({
          type: LOGIN_FAIL,
          payload: error,
        });
      }

      // console.log("API Login error:", error.response.status);
    }
  };
};

export const logout = (navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://demoapi.gharpar.co/api/v8/user_sessions/logout.json",
        {},
        {
          headers: {
            "AUTH-TOKEN": localStorage.getItem("LoginAuthToken"),
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
        Swal.fire({
          icon: "success",
          title: "Successfully Logged Out",
          text: "login again to visit the site",
          showConfirmButton: true,
        });
        // alert("Are you sure you want to logout.");
        localStorage.clear();
        sessionStorage.clear();
        navigate("/login");
      }
      console.log("Logout Response: ", response.status); //it will give response 200 (Successful )
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Already LoggedOut",
        text: "Enter credentials to login",
        showConfirmButton: true,
      });
      dispatch({
        type: LOGOUT_FAIL,
        payload: error,
      });
      console.log("API Logout error:", error);
    }
  };
};
