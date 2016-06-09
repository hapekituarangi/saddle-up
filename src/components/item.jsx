import React from "react";

console.log("item is loaded")

export default class Item extends React.Component {

  handleClick () {
    this.props.addToCart

  }

  render () {
    var itemDetails = this.props.itemDetails

    return (
      <div className="shop-item">
        <img src={itemDetails.url}/>
        <p>{itemDetails.name}</p>
        <button handleClick={this.handleClick} >Buy</button>
      </div>
    )
   }
};
