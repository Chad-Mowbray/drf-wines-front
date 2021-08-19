import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.js'
import WinePage from './pages/WinePage.js'
import AddWinePage from './pages/AddWinePage.js'

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <HashRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/add-wine" component={AddWinePage} />
            <Route exact path="/wines/:wineID" component={WinePage} />
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default App