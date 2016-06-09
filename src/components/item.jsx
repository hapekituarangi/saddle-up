import React from "react";

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

  render () {
    var itemDetails = this.props.itemDetails

    return (
      <div className="shop-item">
        <img src={itemDetails.url} className='item-img'/>
        <p>{itemDetails.name}</p>
        <p>{ itemDetails.price }</p>
        <p onClick={ this.handleMoredetails }>More details</p>
        {
          this.state.clicked ?
              <p className='pony-details'>{ itemDetails.description }</p>

              : null
          }
        <button onClick={this.handleBuy} >Buy</button>
      </div>
    )
   }
};
