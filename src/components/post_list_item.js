import React from 'react';

export default ({post}) => {
  return (
    <li>
      <img src={post.data.thumbnail} />
      <div>{post.data.author}</div>
      <div>{post.data.title}</div>
      <div>{post.data.num_comments} comments</div>
      <div>{post.data.ups} ups</div>
      <div>{post.data.downs} downs</div>
    </li>
  );
};