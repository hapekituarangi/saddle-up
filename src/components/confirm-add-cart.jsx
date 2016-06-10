import React, { Component } from 'react'
import ConfirmMessage from './confirm-message.jsx'
import AddOns from './add-ons.jsx'

class ConfirmAddCart extends Component {
  render() {
    return (
      <section id='confirmation'>
        <div id='confirm-add-cart'>
          <ConfirmMessage item={ this.props.item }/>
          <AddOns addOns={ this.props.addOns }/>
          <div id='confirm-btns'>
            <button>Continue shopping</button>
            <button>Go to checkout</button>
          </div>
        </div>
      </section>
      )
  }
}

export default ConfirmAddCart
