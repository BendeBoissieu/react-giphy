import React, { Component } from 'react';
import App from './app.jsx';

class Gif extends Component {
  render(){
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return(
      <img src={src} alt="" className="gif"/>

    );
  }
}

export default Gif;
