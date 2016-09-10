import React from 'react';

export default ({post}) => {
  const { thumbnail, author, title, num_comments, ups, downs } = post.data;
  const default_image = '/public/images/unknown.png';
  var img_src = thumbnail;

  // Validates missing images.
  if (thumbnail === 'nsfw' || thumbnail === 'self') {
    img_src = default_image;
  }

  return (
    <li className="post-list-item">
      <img className="pls-img" src={img_src} />
      <div className="pls-data">
        <div className="pls-author">{author}</div>
        <div className="pls-title">{title}</div>
          <div className="pls-counters">
            <div className="pls-counter pls-comments">{num_comments} comments</div>
            <div className="pls-counter pls-ups">{ups} ups</div>
            <div className="pls-counter pls-downs">{downs} downs</div>
          </div>
      </div>
    </li>
  );
};