import { createReducer } from "@reduxjs/toolkit"

export const cart=createReducer({
    loading:true,
    data:null
},
{
    careateCartRequest:(state)=>{
        state.loading=true
    },

    careateCartcartSuccess:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

    careateCartFailure:(state,action)=>{
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


    

})