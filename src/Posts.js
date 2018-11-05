import React, { Component } from 'react'
import Post from './Post'

class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount = () => {
    fetch('https://www.reddit.com/r/analog/top/.json')
      .then(response => response.json())
      .then(JSONresponse => this.setState({posts: JSONresponse.data.children}))
  }

  render() {
    const { posts } = this.state
    return(
      <React.Fragment>
        {posts.map(post => <Post key={post.data.id} post={post.data} icon={"heart"} addToFavorites={this.props.addToFavorites}/>)}
      </React.Fragment>
    )
  }
}

export default Posts
