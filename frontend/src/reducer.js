import {configureStore} from"@reduxjs/toolkit"
import { product, user } from "./reducer/reducer";

const store=configureStore({
    reducer:{
      user:user,
      product:product
    }
})

export default store;