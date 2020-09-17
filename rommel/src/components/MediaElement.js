import React, { Component } from "react";

class MediaElement extends Component {
  constructor(props) {
    this.props;
  }
  render() {
    const { time, author, title, imageNumber } = this.props;
    return (
      <div>
        <img src={`../../public/images/tiles-image-${imageNumber}`}></img>
        <div>
          <h3>{author}</h3>
          <h3>{title}</h3>
        </div>
      </div>
    );
  }
}

export default MediaElement;
