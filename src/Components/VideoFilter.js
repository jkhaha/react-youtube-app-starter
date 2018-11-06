import React, { Component } from 'react';

class VideoFilter extends Component {

  state = {
    searchTerm: ''
  }

  changeHandler = e => {
    console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <form className="videoFilter" onSubmit={e => this.props.handleSubmit(e, this.state)}>
        <input
          type="text"
          placeholder="Search Youtube..."
          value={this.state.searchTerm}
          onChange={this.changeHandler}
          name="searchTerm"/>
        <button>Search</button>
      </form>
    )
  }
}

export default VideoFilter
