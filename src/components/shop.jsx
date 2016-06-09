import React from "react";
import Shelf from "./shelf.jsx";

console.log("shop-shelf is loaded")

export default class Shop extends React.Component {

  render() {
    return (
      <div className="shop">
        <Shelf addToCart={this.props.addToCart} theseItems={this.props.shopItems}/>
      </div>

    )
  }
};
