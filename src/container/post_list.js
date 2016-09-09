import React, { Component } from 'react';

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
  }

  render() {
    return (
      <ul>
        HERE IS THE LIST
      </ul>
    )
  }
}
