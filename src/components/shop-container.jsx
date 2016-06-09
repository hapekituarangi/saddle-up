import React, { Component } from 'react'
import Cart from './cart.jsx'

import Shop from './shop.jsx'
import ConfirmAddCart from  './confirm-add-cart.jsx'

const buyAddOns = [
                {type: 'Chocolate',
                price: 5.00,
                url: 'http://www.mexatk.com/wp-content/uploads/2016/03/%D8%B5%D9%88%D8%B1-%D8%B4%D9%88%D9%83%D9%88%D9%84%D8%A7%D8%AA%D9%87-3.jpg'},
                {type: 'Champagne',
                price: 90.00,
                url: 'http://www.pd4pic.com/images/-champagne-sparkling-wine-bottle-wine-feast-festive.png'}
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
