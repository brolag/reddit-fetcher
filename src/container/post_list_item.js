import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActivePost } from '../actions/index';

/**
 * PostListItem Component.
 *
 * Renders a single post list item in the list.
 */
class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.onPostSelect = this.onPostSelect.bind(this);
  }

  onPostSelect() {
    this.props.setActivePost(this.props.post);
  }

  render() {
    const { thumbnail, author, title, num_comments, ups, downs } = this.props.post.data;
    const default_image = '/public/images/unknown.png';
    var img_src = thumbnail;

    // Validates missing images.
    if (thumbnail === 'nsfw' || thumbnail === 'self') {
      img_src = default_image;
    }

    return (
      <li className="post-list-item" onClick={this.onPostSelect}>
        <img className="pls-img" src={img_src} />
        <div className="pls-data">
          <div className="pls-author">{author}</div>
          <div className="pls-title">{title}</div>
          <div className="pls-counters">
            <div className="pls-counter pls-comments">{num_comments} comments</div>
            <div className="pls-counter pls-ups">{ups} ups</div>
            <div className="pls-counter pls-downs">{downs} downs</div>
          </div>
        </div>
      </li>
    );
  }
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActivePost }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostListItem);

