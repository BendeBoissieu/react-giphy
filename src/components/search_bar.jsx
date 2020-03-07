import React, { Component } from 'react';

class SearchBar extends Component {
  //constructor(props) {
  //  super(props);
  //  this.state = { term: '' };
  //}

  handleChange = (event) => {
    //this.setState({ term: event.target.value });
    this.props.searchfunction(event.target.value)
  }

  shouldComponentUpdate(){

  }

  render(){
    //return( <input value={this.state.term} className="form-control form-search" onChange={this.handleChange.bind(this)} />);
    //return( <input value={this.state.term} className="form-control form-search" onChange={this.handleChange} />);
    console.log("serach bar method");
    return(
      <input
        text="text"
        className="form-control form-search"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
