import React, { Component } from 'react';
import { connect } from 'react-redux';

class Hello extends Component {

  render() {
    return (
      <div className="hello-container">
        Hello!
        <img src="/static/media/tictactoe.png" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, { })(Hello);
