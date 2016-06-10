import React from "react";

console.log("login is loaded")

export default class Login extends React.Component {

    render() {
       return (
        <div>
          <a href="/auth/fb"><button>Login as yourself</button></a>
          <a href="#"><button>Login as Guest</button></a>
        </div>

        )

    }
};
