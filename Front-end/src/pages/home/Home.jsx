import PostList from "../../components/posts/PostList";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import "./home.css";

import {useDispatch ,useSelector} from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../../redux/apiCalls/postApiCall";
import Header from "../../components/header/Header";

const Home = () => {
  const dispatch =useDispatch();
  const {posts}=useSelector(state => state.post);

  useEffect(()=>{
dispatch(fetchPosts(1))
  },[]);
  return (
    
    <section className="home">
   
      <div className="home-latest-post">Latest Posts</div>
      <div className="home-container">
        <PostList posts={posts} />
       
      </div>
      <div className="home-see-posts-link">
        <Link className="home-link" to="/posts">
          See All Posts
        </Link>
      </div>
    </section>
  );
};

export default Home;
