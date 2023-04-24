import { postActions} from "../slices/postSlice";
import request from "../../utils/request";
import {commentActions} from "../slices/commentSlice";
import {toast} from "react-toastify";
const mongoose = require('mongoose');

//create comment
export function createComment(newComment){
    return async(dispatch,getState)=> {
try {
    const {data}= await request.post("/api/comments",newComment,{
        headers:{
            Authorization: "Bearer "+getState().auth.user.token,
        }

    });
    dispatch(postActions.addCommentToPost(data));
}catch(error){
    toast.error(error.response.data.message);
    
}

    }
}

//Update Comment 

export function updateComment(CommentId,comment){
    return async(dispatch,getState)=> {
try {
    const { data }= await request.put(`/api/comments/${CommentId}`,comment,{
        headers:{
            Authorization: "Bearer "+getState().auth.user.token,
        }

    });
    dispatch(postActions.updateCommentPost(data));
}catch(error){
    toast.error(error.response.data.message);
    
}

    }
}

//delete Comment 

export function deleteComment(CommentId,comment){
    return async(dispatch,getState)=> {
try {
    await request.delete(`/api/comments/${CommentId}`,{
        headers:{
            Authorization: "Bearer "+getState().auth.user.token,
        }

    });
    dispatch(commentActions.deleteComment(CommentId));
    dispatch(postActions.deleteCommentFromPost(CommentId));
    
}catch(error){
    toast.error(error.response.data.message);
    
}

    }
}
//Fetch All Comments
export function fetchAllComments(){
    return async(dispatch,getState)=> {
try {
   const{data}= await request.get(`/api/comments`,{
        headers:{
            Authorization: "Bearer "+getState().auth.user.token,
        }

    });
    
    dispatch(commentActions.setComments(data));
}catch(error){
    toast.error(error.response.data.message);
    
}

    }
}