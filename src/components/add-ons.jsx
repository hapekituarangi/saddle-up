import React, { Component } from 'react'
import Shelf from './shelf.jsx'

class AddOns extends Component {
  render() {
    return (
      <div id='add-ons-container'>
        <h3>Perhaps you would also like to add one of these goodies...</h3>
        <div className='add-ons'>
        {
          this.props.addOns.map( (item) => {
            return <div className='addOn'>
                    <img src={ item.url } />
                    <div>
                      <h3>{ item.type }</h3>
                      <p>Price: { item.price }</p>
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
