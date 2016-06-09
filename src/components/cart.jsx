import React, { Component } from 'react'
import CartTable from './cart-table.jsx'
import Title from './title.jsx'
import Shelf from './shelf.jsx'


class Cart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='cart'>
        <Title title='Shopping Cart' />
        <div >
          <CartTable items={ this.props.items } removeItem={ this.props.removeItem }/>
          <Shelf items={ null } />
        </div>
      </div>
      )
  }
}

export default Cart
