import { Link } from "react-router-dom";

const PostItem = ({ post, username, userId }) => {
  const profileLink = userId ? `/profile/${userId}` : `/profile/${post?.user?._id}`;

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-item" style={{border: '1px solid #ccc'}}>
      <div className="post-item-image-wrapper" style={{height: '300px'}}>
        <Link to={`/posts/details/${post?._id}`} className="post-item-link" style={{display: 'block', height: '100%'}}>
          <img src={post?.image.url} alt="" className="post-item-image" style={{height: '100%', objectFit: 'cover'}}/>
          <div className="post-item-overlay" style={{backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: '10px'}}>
            <div className="post-item-info">
              <div className="post-item-author">
                <strong>Author: </strong>
                <Link className="post-item-username" to={profileLink} style={{color: '#fff'}}>
                  {username ? username : post?.user?.username}
                </Link>
              </div>
              <div className="post-item-date">
                {new Date(post?.createdAt).toDateString()}
              </div>
              <div className="post-item-category">
                {post?.category}
              </div>
            </div>
          </div>
        </Link>
      </div>
   
    </div>
  );
};

export default PostItem;
