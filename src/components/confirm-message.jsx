import React, { Component } from 'react'

class ConfirmMessage extends Component {
  render() {
    return (
      <h2>Congratulations! {this.props.item.name } has been added to your cart</h2>
      )
  }
}

export default ConfirmMessage
