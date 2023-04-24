import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { postReducer } from "./slices/postSlice";
import {profileReducer} from "./slices/profileslice";
import { categoryReducer } from "./slices/categorySlice";
import { commentReducer } from "./slices/commentSlice";
const store = configureStore({
    reducer: {
        auth:authReducer,
        post:postReducer,
        profile:profileReducer,
        category:categoryReducer,
        comment:commentReducer,
    }
});

export default store;