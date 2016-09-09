import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostListItem from '../components/post_list_item';

class PostList extends Component {
  render() {
    if(this.props.posts.length === 0) {
      return <div>Loading...</div>
    }

    console.log(this.props.posts);

    const postListItems = this.props.posts.data.children.map((post) => {
      return <PostListItem />;
    });

    return (
      <ul>
        {postListItems}
      </ul>
    )
  }
}


function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps)(PostList);
