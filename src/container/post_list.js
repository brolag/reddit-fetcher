import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostListItem from '../components/post_list_item';

class PostList extends Component {
  render() {
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
      return <PostListItem key={post.data.title} post={post} />;
    });

    return (
      <section className="post-list">
        <div className="col">
          <ul>
            {postListItems}
          </ul>
        </div>
      </section>
    )
  }
}


function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps)(PostList);
