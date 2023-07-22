import { createReducer } from "@reduxjs/toolkit";


export const product=createReducer({
    loading:true,
    data:null
},
{
    allProductRequest:(state)=>{
        state.loading=true
    },

    allProductSuccess:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

    allProductFailure:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

})

