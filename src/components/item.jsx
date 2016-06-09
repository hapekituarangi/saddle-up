import React from "react"
import MoreDetails from './more-details.jsx'

console.log("item is loaded")

export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.handleBuy = this.handleBuy.bind(this)
    this.handleMoredetails = this.handleMoredetails.bind(this)
    this.state = {clicked: false}
  }

  handleBuy () {
    this.props.addToCart(this.props.itemDetails)
  }

  handleMoredetails() {
    this.setState({clicked: true})
    console.log('More DEEEEEEETAILS')
  }

  noDetails() {
    this.setState({clicked: false})
  }

  render () {
    var itemDetails = this.props.itemDetails

    return (
      <div className="shop-item">
        <div className='img-deets'>
          <img src={itemDetails.url} className='item-img'/>
          <div className='item-deets'>
            <div>NAME: <p>{itemDetails.name}</p></div>
            <div>PRICE: <p>${ itemDetails.price }</p></div>
            <div className='more-details'><p onClick={ this.handleMoredetails }>More details</p></div>
          </div>
        </div>
        <div>
          <button onClick={this.handleBuy} >Add to cart</button>
        </div>
          {
            this.state.clicked ?
              <MoreDetails details={ itemDetails } noDetails={ this.noDetails.bind(this) }/>
                : null
            }
      </div>
    )
   }
};
