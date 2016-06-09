import React, { Component } from 'react'
import TableRow from './table-row.jsx'

class CartTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {

  let total = 0
  return (
    <div id='cart-table'>
      <table>
        <tr>
          <th>Pony</th>
          <th>Price</th>
          <th></th>
        </tr>
        {
          this.props.items.map( (item, i) => {
            total += item.price
            return <TableRow
                      name={ item.name }
                      price={ item.price }
                      url={ item.url }
                      removeItem={ this.props.removeItem }
                      id={ i } />
          })
        }
        <tr><td>Total: </td><td>${ total }</td><td></td></tr>
      </table>
    </div>
    )
  }
}

export default CartTable
