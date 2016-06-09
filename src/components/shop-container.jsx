import React, { Component } from 'react'
import Cart from './cart.jsx'
import Navbar from './navbar.jsx'
import Shop from './shop.jsx'
import ConfirmAddCart from  './confirm-add-cart.jsx'

const buyAddOns = [
                {type: 'Chocolate',
                price: 5.00,
                url: ''},
                {type: 'Champagne',
                price: 90.00,
                url: ''}
                ]
const rentAddOns = [
                {type: 'Reins',
                price: 50.00,
                url: ''},
                {type: 'hay',
                price: 15.00,
                url: ''}
                ]

class ShopContainer extends Component {
  constructor(props) {
    super(props)
    this.updateCurrentItem = this.updateCurrentItem.bind(this)
    this.state = {
      currentItem: {}
    }
  }

  updateCurrentItem(item) {
    this.setState({currentItem: item})
  }


  render() {
    return (
      <div>
          <Navbar/>
          <Shop
            shopItems={ this.props.shopItems }
            addToCart={ this.props.addToCart }
            updateCurrentItem={ this.updateCurrentItem } />
          <ConfirmAddCart item={ this.state.currentItem } addOns={ buyAddOns }/>
          <Cart items={ this.props.cartItems } removeItem={ this.props.removeItem } />
        </div>
      )
  }
}

export default ShopContainer
