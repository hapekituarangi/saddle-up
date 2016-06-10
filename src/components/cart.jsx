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
      <section id='shopping-cart'>
        <div id='cart'>
          <Title title='Shopping Cart' />
          <div >
            <CartTable items={ this.props.items } removeItem={ this.props.removeItem }/>
          </div>
          <button onClick={ this.handleClick }>Confirm Purchase</button>
        </div>
      </section>
      )
  }
}

export default Cart
