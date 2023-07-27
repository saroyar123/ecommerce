import { createReducer } from "@reduxjs/toolkit"

export const cart=createReducer({
    loading:true,
    data:null
},
{
    createCartRequest:(state)=>{
        state.loading=true
    },

    createCartSuccess:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

    createCartFailure:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },


    addToCartRequest:(state)=>{
        state.loading=true
    },

    addToCartSuccess:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

    addToCartFailure:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },



    deleteFromCartRequest:(state)=>{
        state.loading=true
    },

    deleteFromCartSuccess:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

    deleteFromCartFailure:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },


    

})