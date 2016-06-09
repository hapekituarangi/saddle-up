import React, { Component } from 'react'

class TableRow extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.removeItem(this.props.id)
  }

  render() {
    return (
      <tr>
        <td>{ this.props.name }</td>
        <td>{ this.props.price }</td>
        <td onClick={ this.handleClick }>Remove</td>
      </tr>)
      )
  }
}

export default TableRow
