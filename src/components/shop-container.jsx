import React, { Component } from 'react'
import Cart from './cart.jsx'
import PurchaseForm from './purchase-form.jsx'
import Shop from './shop.jsx'
import ConfirmAddCart from  './confirm-add-cart.jsx'
import $ from 'jquery'

class ShopContainer extends Component {
  constructor(props) {
    super(props)
    this.updateCurrentItem = this.updateCurrentItem.bind(this)
    this.state = {
      buyAddOns: [],
      rentAddOns: [],
      currentItem: {}
    }
  }

  updateCurrentItem(item) {
    this.setState({currentItem: item})
  }

  componentWillMount () {
    console.log('shop-container.jsx componentWillMount called')
    $.ajax({
      type: 'GET',
      url: 'api/addons',
      async: true,
      success: (response) => {
        console.log('shop-container.jsx componentWillMount ajax response recieved')
        let buy = response.addOns.filter((addOn) => (addOn.rentOrBuy === 'buy'))
        let rent = response.addOns.filter((addOn) => (addOn.rentOrBuy === 'rent'))
        this.setState({
          buyAddOns: buy,
          rentAddOns: rent
        })
      },
      error: (response) => {
        console.log('shop-container.jsx componentWillMount ajax error recieved')
        console.log(response)
      }
    })
  }


  render() {
    return (
      <div>
          <Shop
            shopItems={ this.props.shopItems }
            addToCart={ this.props.addToCart }
            updateCurrentItem={ this.updateCurrentItem } />
          <ConfirmAddCart item={ this.state.currentItem } addOns={ this.state.buyAddOns }/>
          <Cart items={ this.props.cartItems } removeItem={ this.props.removeItem } />
          <PurchaseForm/>
        </div>
      )
  }
}

export default ShopContainer
