import React, { Component } from 'react'
import TableRow from './table-row.jsx'

class CartTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='cart-table'>
        <table>
          {
            this.props.items.forEach( (item, i) => {
              return <TableRow
                        name={ item.name }
                        price={ item.price }
                        removeItem={ this.props.removeItem }
                        id={ i } />
            })
          }
        </table>
      </div>
      )
  }
}

export default CartTable
