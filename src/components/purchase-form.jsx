import React from "react";


console.log("purchase-form is loaded")

export default class PurchaseForm extends React.Component {

  handleSubmit(e) {
    e.preventDefault()
    document.getElementById('confirmation').scrollIntoView(false)
  }

  render() {
    return (
      <div id="purchase-form">

        <form className="form-container" onSubmit={ this.handleSubmit.bind(this) }>
          <h2>Address</h2>

          <label for="street">Street</label>
          <input
              name="address"
              className="purchase-form-input street"
              type="text"
              placeholder="Enter street address" />

          <label for="city">City</label>
          <input
            name="address"
            className="purchase-form-input city"
            type="text"
            placeholder="Enter city" />

          <label for="post-code">Post-code</label>
          <input
            name="address"
            className="purchase-form-input post-code"
            type="text"
            placeholder="Enter post-code" />

          <label for="country">Country</label>
          <input
            name="address"
            className="purchase-form-input country"
            type="text"
            placeholder="Enter country" />

          <label for="email">Email</label>
          <input
            name="address"
            className="purchase-form-input email"
            type="text"
            placeholder="Enter email" />

          <label for="phone-number">Phone</label>
          <input
            name="address"
            className="purchase-form-input phone"
            type="text"
            placeholder="Enter contact phone number" />

           <h2>Give me the money</h2>
           <label for="card-name">Card Name</label>
           <input
             name="money"
             className="purchase-form-input card-name"
             type="text"
             placeholder="Enter name on card" />

            <label for="card-number">Card Number</label>
            <input
              name="money"
              className="purchase-form-input card-number"
              type="text"
              placeholder="Enter card number" />

           <label for="card-secret">That secret number on the back</label>
           <input
             name="money"
             className="purchase-form-input card-secret"
             type="text"
             placeholder="Enter secret number thing" />

           <input id="button" type="submit" value="Purchase" />
        </form>
      </div>
    )
  }
};
