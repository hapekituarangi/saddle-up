import React from "react";


console.log("purchase-form is loaded")

export default class PurchaseForm extends React.Component {

  render() {
    return (
      <div id="purchase-form">

        <form className="form-container">
          <h2>Address</h2>
          
          <input
              name="address"
              className="purchase-form-input street"
              type="text"
              placeholder="Enter street address" />
              
          <input
            name="address"
            className="purchase-form-input city"
            type="text"
            placeholder="Enter city" />

          <input
            name="address"
            className="purchase-form-input post-code"
            type="text"
            placeholder="Enter post-code" />
                 
          <input
            name="address"
            className="purchase-form-input country"
            type="text"
            placeholder="Enter country" />

          <input
            name="address"
            className="purchase-form-input email"
            type="text"
            placeholder="Enter email" />

          <input
            name="address"
            className="purchase-form-input phone"
            type="text"
            placeholder="Enter contact phone number" />

           <h2>Give me the money</h2>  
           <input
             name="money"
             className="purchase-form-input card-name"
             type="text"
             placeholder="Enter name on card" />

            <input
              name="money"
              className="purchase-form-input card-number"
              type="text"
              placeholder="Enter card number" />

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
