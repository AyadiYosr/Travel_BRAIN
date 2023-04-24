import "./posts.css";
import PostItem from "./PostItem";
import Masonry from 'react-masonry-css';
const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};


const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((item, index) => (
  <PostItem key={item._id} post={item} className={index % 2 === 0 ? 'small' : ''} />
))}

    </div>
  );
};

export default PostList;
