import React, { Component } from "react";


class MoreDetails extends Component {

  handleCloseDetails() {
    this.props.noDetails()
  }

  handleAdd () {
    this.props.addToCart(this.props.item)
    this.props.updateCurrentItem(this.props.item)
    this.props.noDetails()
  }

  render() {

    return (
      <div className='pony-details'>
        <p id='no-details' onClick={ this.handleCloseDetails.bind(this) }>X</p>
        <p>BREED: { this.props.details.breed }</p>
        <p>AGE: { this.props.details.age }</p>
        <p>{ this.props.details.description }</p>
        <div id='add-cart-btn'>
          <button onClick={ this.handleAdd.bind(this) } >Add to cart</button>
        </div>
      </div>
    )
  }
}

export default MoreDetails
