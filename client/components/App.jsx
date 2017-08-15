import React, { Component } from 'react';

export default class SpotifyLogin extends Component {
  render() {
    const { children } = this.props;
    return(
      <div>
        <h1>Spotify Login</h1>
        <p>Working authorization</p>
        {children}
      </div>
    );
  }
}
