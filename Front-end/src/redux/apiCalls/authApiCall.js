import { authActions } from "../slices/authSlice";
import request from "../../utils/request";
import {toast} from "react-toastify";
const mongoose = require('mongoose');

//Login User 
export function loginUser(user){
    return async(dispatch)=> {
try {
    const {data}= await request.post("/api/auth/login",user);
    dispatch(authActions.login(data));
    localStorage.setItem("userInfo",JSON.stringify(data));
}catch(error){
    toast.error(error.response.data.message);   
}

    }
}

// Logout User 
export function logoutUser(){
    return (dispatch)=>{
        dispatch(authActions.logout());
        localStorage.removeItem("userInfo");  
    }
}

//Register User 
export function registerUser(user){
    return async(dispatch)=> {
try {
    const {data}= await request.post("/api/auth/register",user);
    dispatch(authActions.register(data.message));
   
}catch(error){
    toast.error(error.response.data.message);
    
}

    }
}



export function verifyEmail(userId, token) {
    return async (dispatch) => {
      try {
        // Check if userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
          throw new Error("Invalid user ID");
        }
  
        await request.get(`/api/auth/${userId}/verify/${token}`);
        dispatch(authActions.setIsEmailVerified());
        console.log("userId:", userId);
        console.log("token:", token);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  }
  