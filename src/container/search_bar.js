import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'funny' }
    this.props.fetchPosts(this.state.term);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchPosts(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} >
        <input
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <button type="submit">Submit</button>
      </form>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);