import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favorites: []
    }
  }

  addToFavorites = (post) => {
    this.setState({favorites: [...this.state.favorites, post]})
  }

  removeFromFavorites = (post) => {
    const favorites = this.state.favorites
    const index = favorites.indexOf(post)
    const updatedFavorites = [...favorites.slice(0, index), ...favorites.slice(index + 1)]
    this.setState({favorites: updatedFavorites})
  }

  render() {
    return (
      <React.Fragment>
        <Navbar favorites={this.state.favorites} addToFavorites={this.addToFavorites} removeFromFavorites={this.removeFromFavorites} />
      </React.Fragment>
    );
  }
}

export default App;
