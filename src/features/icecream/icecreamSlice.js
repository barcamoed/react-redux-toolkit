import { createSlice } from '@reduxjs/toolkit';
import {ordered as cakeOrdered} from '../cake/cakeSlice'


const initialState = {
    numberOfIcecreams:20
}

const icecreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numberOfIcecreams--; // redux toolkit uses immer.js under the hood to handle state, hence we can mutate state directly here
        },
        reStocked:(state,action)=>{
            state.numberOfIcecreams += action.payload;
        }
    },
    // extraReducers:{
    //     ['cake/ordered']:(state,action)=>{
    //         state.numberOfIcecreams--;
    //     }
    // }

    // OR using builder (recommended)
    extraReducers:(builder)=>{
        builder.addCase(cakeOrdered,(state)=>{
            state.numberOfIcecreams--;
        })
    }


})

export default icecreamSlice.reducer
export const {ordered,reStocked} = icecreamSlice.actions