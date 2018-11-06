import React, { Component } from 'react';
import VideoFilter from "./VideoFilter"
import VideoDisplay from "./VideoDisplay"
import VideoIndex from "./VideoIndex"

class VideoContainer extends Component {

  state = {
    youtubeData: [],
    searchTerm: '',
    videoId: ''
  }

  componentDidMount() {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAFW49cAa-FH_f2-zW2qkbD8lv5ie40Ccw&q=cupcake&type=video`)
    .then(res => res.json())
    .then(youtubeData => this.setState({
      youtubeData: youtubeData.items
    })
  )
}

  handleSubmit = (e, obj) => {
    e.preventDefault();
    console.log(obj.searchTerm)
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAFW49cAa-FH_f2-zW2qkbD8lv5ie40Ccw&q=${obj.searchTerm}&type=video`)
    .then(res => res.json())
    .then(youtubeData => this.setState({
      youtubeData: youtubeData.items
    })
    )
  }

  clickHandler = (e, videoId) => {
    this.setState({
      videoId: videoId
    })
  }

  render () {
    return (
      <div className="container">
      <VideoFilter handleSubmit={this.handleSubmit}/>
      <div className="indexAndDisplay">
      <VideoDisplay videoId={this.state.videoId}/>
      <VideoIndex
        youtubeData={this.state.youtubeData}
        clickHandler={this.clickHandler}/>
      </div>
      </div>
    )
  }
}

export default VideoContainer
