import React, { Component } from 'react'
import Shelf from './shelf.jsx'

class AddOns extends Component {

  handleClick(e) {
    console.log(e.target.id)
    console.log(this.props.addOns[e.target.id])
    this.props.addToCart(this.props.addOns[e.target.id])
  }

  render() {
    return (
      <div id='add-ons-container'>
        <h3>Perhaps you would also like to add one of these goodies...</h3>
        <div className='add-ons'>
        {
          this.props.addOns.map( (item, i) => {
            return <div className='addOn'>
                    <img src={ item.url } />
                    <div className='text'>
                      <h3>{ item.type }</h3>
                      <p>Price: { item.price }</p>
                      <button onClick={ this.handleClick.bind(this) } id={ i }>Add to cart</button>
                    </div>
                  </div>
                })
        }
        </div>
      </div>
      )
  }
}

export default AddOns
