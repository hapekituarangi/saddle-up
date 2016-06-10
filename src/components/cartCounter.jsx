import React from "react";


console.log("cartCounter is loaded")

export default class CartCounter extends React.Component {

    render() {
      console.log(this.props.areThereItemsInCart, "should be false")

       return (
        <div id="cart-counter">
          { this.props.areThereItemsInCart ?
              <div id="cart-counter-counter"> {this.props.numberOfCartItems.length} </div> : null
          }

          <img id="cart-icon" src="https://openclipart.org/image/2400px/svg_to_png/229937/shoppingbag3.png"/>

        </div>

        )


    }
};
