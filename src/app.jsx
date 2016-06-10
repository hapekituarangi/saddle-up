import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ShopContainer from './components/shop-container.jsx'
import Navbar from './components/navbar.jsx'
import Home from './home.jsx'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.enterSite = this.enterSite.bind(this)
    this.doLoggingIn = this.doLoggingIn.bind(this)
    this.state = {
      products: [],
      cart: [],
      areThereItemsInCart: false,
      home: true
    }
  }

  addToCart(item) {
    console.log("in the addtocart function")
    let cart = this.state.cart
    cart.push(item)
    this.setState({
      cart: cart,
      areThereItemsInCart: true,
      home: false,
      loggedIn: false
    })
    console.log(this.state.cart)

  }

  removeItem(index) {
    let cart = this.state.cart
    let removed = cart.splice(index, 1)
    this.setState({cart: cart, home: false})
  }

  enterSite() {
    this.setState({cart: [], home: false})
  }

  doLoggingIn () {

    console.log('trying to log in')
  }

  componentWillMount () {
    console.log('app.jsx componentWillMount called')
    $.ajax({
      type: 'GET',
      url: 'api/products',
      async: true,
      success: (response) => {
        console.log('app.jsx componentWillMount ajax response recieved')
        this.setState(response)
      },
      error: (response) => {
        console.log('app.jsx componentWillMount ajax error recieved')
        console.log(response)
      }
    })
  }

  render() {

    return (
      <div>
      {
        this.state.home ?
        <div>
          <Home enterSite={ this.enterSite }/>
        </div> : <div>
          <Navbar
            loggedIn={ this.state.loggedIn }
            doLoggingIn={ this.doLoggingIn }
            numberOfCartItems={ this.state.cart }
            areThereItemsInCart={this.state.areThereItemsInCart}/>
          <ShopContainer
              shopItems={ this.state.products }
              addToCart={ this.addToCart }
              removeItem={ this.removeItem }
              cartItems={ this.state.cart } />
        </div>
      }
      </div>
      )
  }
}

console.log('Saddling up.')
ReactDOM.render(<App />, document.getElementById('app'))
