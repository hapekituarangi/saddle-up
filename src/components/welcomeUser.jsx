import React from "react";

console.log("WelcomeUser is loaded")

export default class WelcomeUser extends React.Component {

    render() {
      return (
        <div id="welcome-user">
          <p>Welcome {this.props.userName}</p>
        </div>
      )


    }
};
