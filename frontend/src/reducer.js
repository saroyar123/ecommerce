import {configureStore} from"@reduxjs/toolkit"
import {product} from "./reducer/productReducer";
import { user } from "./reducer/userReducer";
import { cart } from "./reducer/cartReducer";
import { order } from "./reducer/orderReducer";

const store=configureStore({
    reducer:{
      user:user,
      product:product,
      cart:cart,
      order:order
    }
})

export default store;