import React, { Component } from 'react';
import App from './app.jsx';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif){this.props.selectGif(this.props.id)}
  }
  render(){
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return(
      <img src={src} alt="" className="gif" id={this.props.id} onClick={this.handleClick}/>
    );
  }
}

export default Gif;
