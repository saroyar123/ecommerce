import { createReducer } from "@reduxjs/toolkit";


export const user=createReducer({
    loading:true,
    data:{
        success:false,
        message:null
    }
},
{
    userRegisterRequest:(state)=>{
        state.loading=true
    },

    userRegisterSuccess:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

    userRegisterFailure:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },



    userLoginRequest:(state)=>{
        state.loading=true
    },

    userLoginSuccess:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

    userLoginFailure:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },


    userGetRequest:(state)=>{
        state.loading=true
    },

    userGetSuccess:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

    userGetFailure:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },


})