import React, { Component } from 'react'
import { Tab, Icon, Menu } from 'semantic-ui-react'
import Posts from './Posts'
import Favorites from './Favorites'


  class Navbar extends Component {

    render() {
      const panes = [
          { menuItem:
            (<Menu.Item key={'subreddit'} className="navbar-tab"><Icon name="reddit alien" /> r/analog </Menu.Item>),
            render: () => <Tab.Pane attached={true}> <Posts addToFavorites={this.props.addToFavorites}/></Tab.Pane>
            },
          { menuItem:
            <Menu.Item key={'favorites'} className="navbar-tab"><Icon name="heart" /> favorites {`(${this.props.favorites.length})`}</Menu.Item>,
            render: () => <Tab.Pane attached={true}><Favorites favorites={this.props.favorites} removeFromFavorites={this.props.removeFromFavorites}/></Tab.Pane>
          },
          ]

      return (
        <Tab menu={{borderless: true, attached: true, tabular: false }} panes={panes} />
      )
    }

  }

  export default Navbar
