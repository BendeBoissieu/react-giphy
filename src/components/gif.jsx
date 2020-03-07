import React, { Component } from 'react';
import App from './app.jsx';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif){this.props.selectGif(this.props.id)}
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.id != this.props.id; //don t call render is props not changed
  }

  render(){
    console.log("GIF RENDER"+ this.props.id);
    if (!this.props.id) {
      return null;
    }
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return(
      <img src={src} alt="" className="gif" id={this.props.id} onClick={this.handleClick}/>
    );
  }
}

export default Gif;
