import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostListItem from '../components/post_list_item';

class PostList extends Component {
  render() {
    return (
      <ul>
      lis
      </ul>
    )
  }
}


function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps)(PostList);
