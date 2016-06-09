import React from "react";
import Item from "./item.jsx";

console.log("shelf is loaded")

export default class Shelf extends React.Component {

  render() {

    var shopItems = this.props.theseItems
    console.log(shopItems, "shopitems in shelf")

    return (
      <div className="shop-shelf">
        {
          shopItems.map((item, i) => {
            return <Item addToCart={this.props.addToCart} itemDetails={item} index={i}/>
          })
        }

      </div>

    )

  }
};
