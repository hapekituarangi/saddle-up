import React from "react";
import Shelf from "./shelf.jsx"
import Title from './title.jsx'

console.log("shop-shelf is loaded")

export default class Shop extends React.Component {

  render() {
    return (
      <div className="shop">
        <Title title='A most grand selection of ponies' />
        <Shelf addToCart={this.props.addToCart} theseItems={this.props.shopItems}/>
      </div>

    )
  }
};
