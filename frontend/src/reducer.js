import {configureStore} from"@reduxjs/toolkit"
import {product} from "./reducer/productReducer";
import { user } from "./reducer/userReducer";
import { cart } from "./reducer/cartReducer";

const store=configureStore({
    reducer:{
      user:user,
      product:product,
      cart:cart
    }
})

export default store;