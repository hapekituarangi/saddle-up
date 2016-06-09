import React from "react";


console.log("cartCounter is loaded")

export default class CartCounter extends React.Component {

    render() {
      console.log(this.props.areThereItemsInCart, "should be false")

       return (
        <div className="cart-counter">
          { this.props.areThereItemsInCart ?
              <p> {this.props.numberOfCartItems.length} Cart </p> : null
          }

        </div>

        )


    }
};
