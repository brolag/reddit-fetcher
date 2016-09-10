import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts, setActivePost } from '../actions/index';

/**
 * SearchBar Component.
 *
 * Allows user to change the Reddit posts category.
 */
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
      <section className="search-bar">
        <div className="col">
          <div className="search-title">
            <h1>Reddit</h1>
          </div>

          <div className="search-form">
            <form onSubmit={this.onFormSubmit} >
              <input
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);