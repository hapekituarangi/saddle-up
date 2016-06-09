import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ShopContainer from './components/shop-container.jsx'
import Home from './home.jsx'

const products = [
              {id: 0,
              name: 'Optimus Prime',
              price: 10000,
              url: 'http://tfwiki.net/mediawiki/images2/thumb/3/37/Optimusg1.jpg/350px-Optimusg1.jpg',
              age: '6 million years',
              breed: 'Truck',
              description: 'Optimus Prime is the leader of all the ponies. He is wise and kind, but ruthless when he needs to be. He is great with children.'},
              {id: 1,
              name: 'Megatron',
              price: 8000,
              url: 'http://img11.deviantart.net/a55f/i/2011/025/b/5/megatron_g1_by_alexdobson-d380thy.jpg',
              age: 'Millions and millions of years',
              breed: 'Evil',
              description: 'Megatron can be a bit temperatmental so is only recommended for experienced riders. In saying that, if you give him a good scratch then he will destroy the world for you.'},
              {id: 2,
              name: 'Bumblebee',
              price: 4000,
              url: 'http://vignette2.wikia.nocookie.net/transformers/images/b/bf/Wfc-bumblebee-1.jpg/revision/latest?cb=20111031135557',
              age: 'Young at heart',
              breed: 'Beetle',
              description: 'Bumblebee has a delightful personality and can always be relied upon to go the extra mile for you. Which is really good when travelling by pony.'},
              {id: 3,
              name: 'Starscream',
              price: 4000,
              url: 'http://static.zerochan.net/Starscream.full.636078.jpg',
              age: '30 years',
              breed: 'Fighter Jet',
              description: 'Starscream is a real handful. You will need to be extrememly firm with him if you are to control him. Also thinks he can fly, which is mildly terrifying.'}]

class App extends Component {
  constructor(props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.enterSite = this.enterSite.bind(this)
    this.state = {
      cart: [],
      home: true
    }
  }

  addToCart(item) {
    console.log("in the addtocart function")
    let cart = this.state.cart
    cart.push(item)
    this.setState({cart: cart, home: false})
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

  render() {
    var shopItems = products

    return (
      <div>
      {
        this.state.home ?
        <div>
          <Home enterSite={ this.enterSite }/>
        </div> :
        <div>
          <ShopContainer
              shopItems={ shopItems }
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
