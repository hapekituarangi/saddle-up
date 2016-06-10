import React from "react";
import Shelf from "./shelf.jsx"
import Title from './title.jsx'

console.log("shop is loaded")

export default class Shop extends React.Component {

  render() {
    return (
      <section id='shop' ref='shop'>
        <div className="shop">
          <Title id='shop-title' title='A most grand selection of ponies' />
          <Shelf addToCart={this.props.addToCart}
                 updateCurrentItem={ this.props.updateCurrentItem }
                 theseItems={this.props.shopItems} />
        </div>
      </section>
    )
  }
};
