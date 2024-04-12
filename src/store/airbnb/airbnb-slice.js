import { createSlice } from "@reduxjs/toolkit";
 export const airbnbSlice = createSlice({
    name:'airbnbSlice',
    initialState:{
        airbnbList:[]
    },
    reducers:{
        setAirbnb:(currentSlice,action)=>{
            currentSlice.airbnbList = action.payload
        }
    },
 });

 export const airbnbReducer = airbnbSlice.reducer;
 export const {setAirbnb} =  airbnbSlice.actions

