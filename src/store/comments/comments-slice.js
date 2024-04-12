import { createSlice } from "@reduxjs/toolkit";
 export const commentSlice = createSlice({
    name:'commentSlice',
    initialState:{
        commentList:[]
    },
    reducers:{
        setComment:(currentSlice,action)=>{
            currentSlice.commentList = action.payload
        },
        addComment:(currentSlice,action)=>{
            currentSlice.commentList.push(action.payload);
        }
    },
 });

 export const commentReducer = commentSlice.reducer;
 export const {setComment,addComment} =  commentSlice.actions

