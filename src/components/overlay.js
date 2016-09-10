import React from 'react';

export default ({post}) => {
  return(
    <section className="overlay">
      <div className="post-item">
        {post.data.title}
      </div>

      <div className="actions">
        <div>
          Drag the card on the left to the desired action.
        </div>

        <div>
          Open on Reddit.
        </div>

        <div>
          Email to a friend.
        </div>
      </div>
    </section>
  );
};
