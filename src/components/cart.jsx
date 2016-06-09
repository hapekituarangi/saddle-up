import React, { Component } from 'react'
import CartTable from './cart-table.jsx'

class Cart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='cart'>
        <Title />
        <div >
          <CartTable items={ this.props.items } />
          <Upsell />
        </div>
      </div>
      )
  }
}

export default Cart
