import React, { Component } from 'react'

class ConfirmMessage extends Component {
  render() {
    return (
      <div>
        <h2 id='confirm-message'>Congratulations!</h2>
        <h2>{this.props.item.name } has been added to your cart</h2>
      </div>
      )
  }
}

export default ConfirmMessage
