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
    this.state = {
      products: [],
      cart: [],
      areThereItemsInCart: false,
      home: true,
      user: null
    }
  }

  addToCart(item) {
    console.log("in the addtocart function")
    let cart = this.state.cart
    cart.push(item)
    this.setState({
      cart: cart,
      areThereItemsInCart: true,
      home: false
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

  componentWillMount () {
    console.log('app.jsx componentWillMount called')
    $.ajax({
      type: 'GET',
      url: 'api/user',
      async: true,
      success: (response) => {
        console.log('app.jsx componentWillMount ajax user response recieved')
        console.log(response)
        this.setState({
          user: (response.user) ? response.user : null,
          home: (response.user) ? false : true
        })
      },
      error: (response) => {
        console.log('app.jsx componentWillMount ajax user error recieved')
        console.log(response)
      }
    })
    $.ajax({
      type: 'GET',
      url: 'api/products',
      async: true,
      success: (response) => {
        console.log('app.jsx componentWillMount ajax products response recieved')
        this.setState(response)
      },
      error: (response) => {
        console.log('app.jsx componentWillMount ajax products error recieved')
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
            user={ this.state.user }
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
