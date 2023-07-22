import axios from "axios";
import Cookies from "js-cookie";

const cookie = Cookies.get("token");

export const registerAction = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "userRegisterRequest",
    });

    console.log("user api is call");

    const { data } = await axios.post(
      "http://localhost:4000/api/v1/user",
      { name, email, password }
    );
    Cookies.set("token", data.token, { expires: 7 });
    console.log(data);

    dispatch({
      type: "userRegisterSuccess",
      playload: data,
    });
  } catch (error) {
    dispatch({
      type: "userRegisterFailure",
      playload: error.response.data,
    });
  }
};

export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "userLoginRequest",
    });

    console.log("user api is call");

    const { data } = await axios.post(
      "http://localhost:4000/api/v1/loginUser",
      { email, password }
    );
    Cookies.set("token", data.token, { expires: 7 });
    console.log(data);
    console.log("user api is call");

    dispatch({
      type: "userLoginSuccess",
      playload: data,
    });
  } catch (error) {
    dispatch({
      type: "userLoginFailure",
      playload: error.response.data,
    });
  }
};

export const getUserAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "userGetRequest",
    });

    console.log("user api is call");

    const { data } = await axios.get("http://localhost:4000/api/v1/user", {
      headers: {
        token: cookie,
      },
    });

    dispatch({
      type: "userGetSuccess",
      playload: data,
    });
  } catch (error) {
    dispatch({
      type: "userGetFailure",
      playload: error.response.data,
    });
  }
};
