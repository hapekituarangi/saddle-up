import React, { Component } from 'react'

class Home extends Component {



  handleClick() {
    this.props.enterSite()
  }

  render() {
    return (
      <div id='homepage'>
        <h1>Shop Unicorns!</h1>
        <button id='home-btn' onClick={ this.handleClick.bind(this) }>ENTER</button>
      </div>
      )
  }
}

export default Home
