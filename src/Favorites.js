import React, { Component } from 'react'
import Post from './Post'
import { Message } from 'semantic-ui-react'

class Favorites extends Component {

  mapFavorites = () => {
    return (
      <React.Fragment>
        {this.props.favorites.map(post => <Post key={post.id} post={post} icon={"trash alternate outline"} removeFromFavorites={this.props.removeFromFavorites}/>)}
      </React.Fragment>
    )
  }

  noFavoritesAdded = () => {
    return (
      <React.Fragment>
        <Message centered style={{textAlign: 'center', backgroundColor: '#FFFACD', width: "50%", marginLeft: "25%"}}>No favorites yet.</Message>
      </React.Fragment>
    )
  }

  render() {
    console.log(this.props.favorites);
    return (
      <React.Fragment>
        {this.props.favorites.length > 0 ? this.mapFavorites() : this.noFavoritesAdded()}
      </React.Fragment>
    )
  }
}

export default Favorites
