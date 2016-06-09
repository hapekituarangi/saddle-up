import React, { Component } from 'react'

class CartTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='cart-table'>
        <table>
          {
            this.props.items.forEach( (item) => {
              return (<tr>
                      <td>{ item.name }</td>
                      <td>{ item. price }</td>
                     </tr>)
            })
          }
        </table>
      </div>
      )
  }
}

export default CartTable
