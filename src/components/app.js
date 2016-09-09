import React, { Component } from 'react';
import SearchBar from '../container/search_bar';
import PostList from '../container/post_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PostList />
      </div>
    );
  }
}
