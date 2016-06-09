import React, { Component } from 'react'
import Cart from './cart.jsx'
import Navbar from './navbar.jsx'
import Shop from './shop.jsx'

class ShopContainer extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <Shop
            shopItems={ this.props.shopItems }
            addToCart={ this.props.addToCart } />
          <Cart items={ this.props.cartItems } removeItem={ this.props.removeItem } />
        </div>
      )
  }
}

export default ShopContainer
