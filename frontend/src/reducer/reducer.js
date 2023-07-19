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