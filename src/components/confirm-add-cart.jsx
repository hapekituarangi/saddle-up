import React, { Component } from 'react'
import ConfirmMessage from './confirm-message.jsx'
import AddOns from './add-ons.jsx'

class ConfirmAddCart extends Component {

  handleGoShop() {
    document.getElementById('shop').scrollIntoView()
  }

  handleGoCheckout() {
    document.getElementById('cart').scrollIntoView()
  }

  render() {
    return (
      <section id='confirmation'>
        <div id='confirm-add-cart'>
          <ConfirmMessage item={ this.props.item }/>
          <AddOns addOns={ this.props.addOns } addToCart={ this.props.addToCart }/>
          <div id='confirm-btns'>
            <button onClick={ this.handleGoShop.bind(this) }>Continue shopping</button>
            <button onClick={ this.handleGoCheckout.bind(this) }>Go to checkout</button>
          </div>
        </div>
      </section>
      )
  }
}

export default ConfirmAddCart
