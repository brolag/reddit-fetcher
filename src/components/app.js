import React, { Component } from 'react';
import SearchBar from '../container/search_bar';
import PostList from '../container/post_list';
import Overlay from '../container/overlay';

export default class App extends Component {
  render() {
    return (
      <div>
        <Overlay />
        <SearchBar />
        <PostList />
      </div>
    );
  }
}
