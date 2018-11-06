import React, { Component } from 'react';

class VideoDisplay extends Component {
  render () {
    const embedUrl = `https://www.youtube.com/embed/${this.props.videoId}`;

    return(
      <div className="videoDisplay">
      <iframe src={embedUrl} />
      </div>
    )
  }
}

export default VideoDisplay
