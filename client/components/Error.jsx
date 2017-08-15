import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    const { errorMsg } = this.props.params;
    return(
      <div>
        <h2>An error occured</h2>
        <p>{errorMsg}</p>
      </div>
    );
  }
}
