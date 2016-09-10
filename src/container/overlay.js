import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActivePost } from '../actions/index';

class Overlay extends Component {
  constructor(props) {
    super(props);

    this.exitOverlay = this.exitOverlay.bind(this);
  }

  exitOverlay() {
    this.props.setActivePost({});
  }

  render() {

    if(!this.props.activePost.data) {
      return <div></div>;
    }
    else {
      const { thumbnail, author, title, num_comments, ups, permalink } = this.props.activePost.data;
      const default_image = '/public/images/unknown.png';
      const link = `https://www.reddit.com/${permalink}`;
      var img_src = thumbnail;

      // Validates missing images.
      if (thumbnail === 'nsfw' || thumbnail === 'self') {
        img_src = default_image;
      }

      return(
        <section className="overlay">
          <div className="smoke-screen" onClick={this.exitOverlay}></div>

          <div className="o-item post-item">
            <img className="pls-img" src={img_src} />
            <div className="o-pls pls-data">
              <div className="pls-author">{author}</div>
              <div className="pls-title">{title}</div>
              <div className="o-pls pls-counters">
                <div className="o-pls pls-counter pls-comments">{num_comments}</div>
                <div className="o-pls pls-counter pls-ups">{ups}</div>
              </div>
            </div>
          </div>

          <div className="o-item instructions">
            Click on to the desired action.
          </div>

          <div className="o-item actions">
            <div className="open">
              <a href={link} target="_blank">
                <img src="/public/images/reddit-logo.png" />
              </a>
              <p>Open On Reddit</p>
            </div>

            <div className="email">
              <a href={`mailto:?subject=Awesome Reddit Post: ${title}&body=Hey buddy! %0D%0A %0D%0A Check this out! ${link} %0D%0A %0D%0A Cheers!`}>
                <img src="/public/images/mail-logo.png" />
              </a>
              <p>Open On Reddit</p>
            </div>
          </div>



        </section>
      );
    }

  }
};

function mapStateToProps(props) {
  return props ;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActivePost }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
