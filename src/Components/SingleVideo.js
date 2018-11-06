import React, { Component } from 'react';

class SingleVideo extends Component {

  render () {
    let imgUrl = this.props.singleVideo.snippet.thumbnails.medium.url
    let videoId = this.props.singleVideo.id.videoId
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return(
      <div onClick={e=> this.props.clickHandler(e, videoId)}>
        <img src={imgUrl} />
        <h3>{this.props.singleVideo.snippet.title}</h3>
        <h4>{this.props.singleVideo.snippet.description}</h4>
      </div>
    );
  }
}

export default SingleVideo
