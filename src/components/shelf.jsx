import React from "react";
import Item from "./item.jsx";

console.log("shelf is loaded")

export default class Shelf extends React.Component {

  render() {



    return (
      <div className="shop-shelf">
        {
          this.props.theseItems.map((item, i) => {
            return <Item addToCart={this.props.addToCart}
                          updateCurrentItem={ this.props.updateCurrentItem }
                          itemDetails={item}
                          index={i}/>
          })
        }

      </div>

    )

  }
};
