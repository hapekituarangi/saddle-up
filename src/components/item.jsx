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
        <div className='item-deets'>
          <div>NAME: <p>{itemDetails.name}</p></div>
          <div>PRICE: <p>${ itemDetails.price }</p></div>
          <div className='more-details'><p onClick={ this.handleMoredetails }>More details</p></div>
          {
            this.state.clicked ?
              <div className='pony-details'>
                <div>BREED: <p>{ itemDetails.breed }</p></div>
                <div>AGE: <p>{ itemDetails.age }</p></div>
                <p>{ itemDetails.description }</p>
              </div>
                : null
            }
        </div>
        <div>
          <button onClick={this.handleBuy} >Buy</button>
        </div>
      </div>
    )
   }
};
