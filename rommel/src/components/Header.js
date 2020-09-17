import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    this.props;
  }
  render() {
    const { title, subtitle, content } = this.props;
    return (
      <div>
        <h2>Header</h2>
      </div>
    );
  }
}

export default Header;
