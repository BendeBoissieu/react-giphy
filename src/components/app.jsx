import React, { Component } from 'react';
import giphy from 'giphy-api';


import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT5LMHxhOfscxPfIfm"
    }

    this.search("Homer thinking");
  }

  selectGif = (id) => {
    this.setState({selectedGifId: id});
  }

  search = (query) => {
    giphy('hZqI2I15ieKQIOKo17trbSfbgXDoYoDO').search({
      q: query,
      rating: 'g',
      limit: 20
    }, (err, result) => {
      this.setState({gifs: result.data})
    });
  }

  render() {
    const gifs = [
      { id: "q1mHcB8wOCWf6"},
      { id: "4KkSbPnZ5Skec"},
      { id: "d7g2Wmve71MdUaKrqn"},
      { id: "l2Je66zG6mAAZxgqI"}
    ];
    return(<div>
      <div className = "left-scene">
        <SearchBar searchfunction={this.search}/>
        <div className = "selected-gif">
          <Gif id={this.state.selectedGifId}/>
        </div>
      </div>
      <div className = "right-scene">
        <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
      </div>
    </div>);
  }
}

export default App;
