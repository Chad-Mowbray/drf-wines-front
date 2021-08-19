import React, { Component } from 'react'
import WineList from '../components/WineList/WineList.js'
import {fetchWines} from '../api/WineApi'

class HomePage extends Component {
  state = {
    wines: []
  }

  componentDidMount(){
    fetchWines()
      .then((apiResponseJSON) => {
        this.setState({
          wines: apiResponseJSON
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h1> All Wines </h1>
        <WineList wines={this.state.wines} />
      </div>
    )
  }
}

export default HomePage