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
        <td>
          <div className='checkout-item'>
            <p>{ this.props.name }</p>
            <img className='checkout-img' src={ this.props.url } />
          </div>
        </td>
        <td className='cart-price'>${ this.props.price }</td>
        <td onClick={ this.handleClick } id='remove'>X</td>
      </tr>
      )
  }
}

export default TableRow
