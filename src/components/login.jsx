import React from "react";

console.log("login is loaded")

export default class Login extends React.Component {

    render() {
       return (
        <div>
          {
            (this.props.user)
              ? <a href="#"><button>Logout</button></a>
              : <a href="/auth/fb"><button>Login with Facebook</button></a>
          }
        </div>

        )

    }
};
