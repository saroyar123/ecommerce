import { createReducer } from "@reduxjs/toolkit"

export const order=createReducer({
    loading:true,
    data:null
},
{
    createOrderRequest:(state)=>{
        state.loading=true
    },

    createOrderSuccess:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

    createOrderFailure:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },
    
})