import React from "react";
import Login from "./login.jsx"
import WelcomeUser from "./welcomeUser.jsx"
import CartCounter from "./cartCounter.jsx"

console.log("navbar is loaded")

export default class Navbar extends React.Component {

    render() {
        return(
            <div className="navbar" >
              <WelcomeUser
                userName={ (this.props.user) ? this.props.user.name : 'Guest' }/>
              <CartCounter
                numberOfCartItems={ this.props.numberOfCartItems }
                areThereItemsInCart={this.props.areThereItemsInCart} />
              <Login
                user={ this.props.user }  />
            </div>
        )
    }
};














