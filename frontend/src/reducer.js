import {configureStore} from"@reduxjs/toolkit"
import { user } from "./reducer/reducer";

const store=configureStore({
    reducer:{
      user:user
    }
})

export default store;