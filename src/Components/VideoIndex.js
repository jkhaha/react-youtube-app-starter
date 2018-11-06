import React, { Component } from 'react';
import SingleVideo from "./SingleVideo"

class VideoIndex extends Component {

  render(){
    let searchResults = this.props.youtubeData.map(singleVideo => (
      <SingleVideo
      key={singleVideo.id.videoId}
      singleVideo={singleVideo}
      clickHandler={this.props.clickHandler}
      />
    ))
    return(
      <div className="videoIndex">
        {searchResults}
      </div>
    )
  }
}

export default VideoIndex
