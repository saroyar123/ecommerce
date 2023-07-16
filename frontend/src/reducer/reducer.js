import { createReducer } from "@reduxjs/toolkit";


export const user=createReducer({
    loading:true,
    data:null
},
{
    userRequest:(state)=>{
        state.loading=true
    },

    userSuccess:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

    userFailure:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

})