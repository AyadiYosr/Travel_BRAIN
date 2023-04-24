import {createSlice} from "@reduxjs/toolkit";

const postSlice = createSlice({
name :"post",
initialState:{
    posts:[],
    postCount:null,
    postsCate:[],
    loading:false,
    isPostCreated:false,
    post:null,


},
reducers :{
    setPosts(state,action){
        state.posts=action.payload;
    },
    setPostsCount(state,action){
        state.postCount=action.payload;
    },
    setPostsCate(state,action){
        state.postsCate=action.payload;
    },
    setLoading(state){
        state.loading=true;
    },
    ClearLoading(state){
        state.loading=false;
    },
    setIsPostCreated(state){
        state.isPostCreated=true;
        state.loading = false;
    },
    ClearIsPostCreated(state){
        state.isPostCreated=false;
    },
    setPost(state,action){
        state.post=action.payload;
    },
    setLike(state,action){
    state.post.likes=action.payload.likes;
    },
    deletePost(state,action){
        state.posts=state.posts.filter(p=> p._id !==action.payload);
    },
    addCommentToPost(state,action){
        state.post.comments.push(action.payload);
    },
    updateCommentPost(state,action){
        state.post.comments=state.post.comments.map( comment =>
        comment._id === action.payload._id ? action.payload : comment
        )
    },
    deleteCommentFromPost(state,action){
        const comment=state.post.comment.find(c => c._id === action.payload);
        const commentIndex = state.post.comments.indexOf(comment);
        state.post.comment.splice(commentIndex,1);
    }


}
});
const postReducer=postSlice.reducer;
const postActions=postSlice.actions;

export{ postActions,postReducer};