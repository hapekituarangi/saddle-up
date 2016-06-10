import React, { Component } from "react";


class MoreDetails extends Component {

  handleCloseDetails() {
    this.props.noDetails()
  }

  handleAdd () {
    this.props.addToCart(this.props.item)
    this.props.updateCurrentItem(this.props.item)
    this.props.noDetails()
    document.getElementById('confirmation-of-add').scrollIntoView(false)
  }

  render() {

    return (
      <div className='pony-details'>
        <div>
          <p>BREED: { this.props.details.breed }</p>
          <p>AGE: { this.props.details.age }</p>
        </div>
        <div className='description'>
          <p>{ this.props.details.description }</p>
        </div>
        <div>
          <div id='add-cart-btn'>
            <button onClick={ this.handleAdd.bind(this) }>Add to cart</button>
          </div>
          <p id='no-details' onClick={ this.handleCloseDetails.bind(this) }>X</p>
        </div>
      </div>
    )
  }
}

export default MoreDetails
