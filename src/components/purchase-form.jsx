import React from "react";


console.log("purchase-form is loaded")

export default class PurchaseForm extends React.Component {

  render() {
    return (
      <div className="purchase-form">

        <form className="form-container">
          <h2>Mailing address</h2>

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
           
           <input id="button" type="submit" value="Purchase" />
        </form>
      </div>
    )
  }
};
