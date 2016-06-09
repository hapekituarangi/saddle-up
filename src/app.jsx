import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Cart from './components/cart.jsx'
import Navbar from ''

const products = [
              {id: 0,
              name: 'Optimus Prime',
              price: 10000,
              url: 'http://tfwiki.net/mediawiki/images2/thumb/3/37/Optimusg1.jpg/350px-Optimusg1.jpg'},
              {id: 1,
              name: 'Megatron',
              price: 8000,
              url: 'http://img11.deviantart.net/a55f/i/2011/025/b/5/megatron_g1_by_alexdobson-d380thy.jpg'},
              {id: 2,
              name: 'Bumblebee',
              price: 4000,
              url: 'http://vignette2.wikia.nocookie.net/transformers/images/b/bf/Wfc-bumblebee-1.jpg/revision/latest?cb=20111031135557'},
              {id: 3,
              name: 'Starscream',
              price: 4000,
              url: 'http://static.zerochan.net/Starscream.full.636078.jpg'}]

class App extends Component {
  constructor(props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.state = {
      cart: []
    }
  }

  addToCart(item) {
    let cart = this.state.cart
    cart.push(item)
    this.setState({cart: cart})
  }

  removeItem(index) {
    let cart = this.state.cart
    let removed = cart.splice(index, 1)
    this.setState({cart: cart})
  }

  render() {
    var shopItems = products

    return (
      <div>
        <Navbar/>
        <Shop
          shopItems={ shopItems }
          addToCart={ this.addToCart.bind(this) } />
        <Cart items={ this.state.cart } removeItem={ this.removeItem } />
      </div>
      )
  }
}

console.log('Saddling up.')
ReactDOM.render(<App />, document.getElementById('app'))
