import React from 'react';
import './Feed.css';

const Feed = ({ posts }) => {
  return (
    <div className="feed">
      <h3>Feed</h3>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <img src={post.imageUrl} alt="Post" />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
