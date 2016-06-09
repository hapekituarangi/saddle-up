import React, { Component } from "react";


class MoreDetails extends Component {

  handleClick() {
    this.props.noDetails()
  }

  render() {

    return (
      <div className='pony-details'>
        <p id='no-details' onClick={ this.handleClick.bind(this) }>X</p>
        <p>BREED: { this.props.details.breed }</p>
        <p>AGE: { this.props.details.age }</p>
        <p>{ this.props.details.description }</p>
      </div>
    )
  }
}

export default MoreDetails