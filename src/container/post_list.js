import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostListItem from './post_list_item';


class PostList extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      // Show spinner while loading posts.
      if(this.props.posts.length === 0) {
        return (
          <section className="post-list loading">
            <div className="col">
              <img src="../../public/images/loader.gif" />
            </div>
          </section>
        )
      }

      const postListItems = this.props.posts.data.children.map((post) => {
        return (
          <PostListItem
            key={post.data.id}
            post={post}
          />
        );
      });

      return (
        <div>
          <section className="post-list">
            <div className="col">
              <ul>
                {postListItems}
              </ul>
            </div>
          </section>
        </div>
      );
  }
}

function mapStateToProps(props) {
  return props;
}

export default connect(mapStateToProps)(PostList);

