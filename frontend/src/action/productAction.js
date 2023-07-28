import axios from "axios";
import Cookies from "js-cookie";
const cookie = Cookies.get("token");

export const getAllProductAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "allProductRequest",
    });

    console.log("get all product api is call");

    const { data } = await axios.get("http://localhost:4000/api/v1/product");

    dispatch({
      type: "allProductSuccess",
      playload: data,
    });
    console.log("get all product api is call2");
  } catch (error) {
    dispatch({
      type: "allProductFailure",
      playload: error.response.data,
    });
  }
};

// create product action

export const createProductAction = (name, description, price, totalQuantity, brand, catagory, avatar) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "createProductRequest",
      });

      console.log("get all product api is call");

      const { data } = await axios.post(
        "http://localhost:4000/api/v1/product",
        {
          name,
          description,
          price,
          totalQuantity,
          brand,
          catagory,
          avatar,
        },
        {
          headers: {
            token: cookie,
          },
        }
      );

      dispatch({
        type: "createProductSuccess",
        playload: data,
      });
      console.log("get all product api is call2");
    } catch (error) {
      dispatch({
        type: "createProductFailure",
        playload: error.response.data,
      });
    }
  };
