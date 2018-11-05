import React, { Component } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

class Post extends Component {

  getAgeOfPost = (createdUTC) => {
    const currentTime = new Date()
    const ageOfPostInSeconds = (currentTime.getTime() / 1000) - createdUTC
    const ageOfPostInMinutes = Math.round(ageOfPostInSeconds / 60)
    const ageOfPostInHours = Math.round(ageOfPostInMinutes / 60)

    if (ageOfPostInMinutes < 60) {
      return `${ageOfPostInMinutes} minutes ago`
    } else if (ageOfPostInHours < 24) {
      return `${ageOfPostInHours} hours ago`
    } else if (ageOfPostInHours < 48) {
      return `a day ago`
    } else {
      const postDate = new Date(createdUTC)
      return postDate.toLocaleString().split(',')[0]
    }
  }

  handleIconClick = (event) => {
    const classList = Array.from(event.target.classList)
    if (classList.includes('heart') && !classList.includes('icon-clicked')) {
      event.target.classList.add('icon-clicked')
      this.props.addToFavorites(this.props.post)
    } else if (classList.includes('trash')) {
      this.props.removeFromFavorites(this.props.post)
    }
  }

  render() {
    const post = this.props.post
    const icon = this.props.icon

    return (
      <React.Fragment>
        <Card centered className="post-card" style={{width: '500px'}}>
          <Image src={post.url} style={{maxHeight: '350px', objectFit: 'scale-down', backgroundColor: 'black'}} />
          <Icon name={icon} className="icon-unclicked" onClick={this.handleIconClick}/>
          <Card.Header className="post-header">
            {post.title}
          </Card.Header>
          <Card.Content extra className="post-extra">
            <Icon name="user" />
            {`u/${post.author} `}
            <span>&bull;</span>
            <Icon name="clock outline" />
            {`${this.getAgeOfPost(post.created_utc)} `}
            <span>&bull;</span>
            <Icon name="lightning" />
            {post.ups}
          </Card.Content>
        </Card>
      </React.Fragment>
    )
  }
}

export default Post
