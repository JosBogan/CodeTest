import React, { useState } from 'react'

import OrderTableDelete from './OrderTableDelete'
import OrderTableQuantity from './OrderTableQuantity'

const OrderTable = () => {

  const [products, setProducts] = useState([
    {
      name: 'Apple',
      price: 0.52,
      quantity: 2
    },
    {
      name: 'Banana',
      price: 0.67,
      quantity: 3
    }
  ])

  return (
    <div className="order_container">
      <h2 className="order_header">Review Your Order</h2>
    <table>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Cost</th>
      </tr>
      {products.map(product => (
        <tr>
          <td>{product.name}</td>
          <td>£{product.price}</td>
          <td><OrderTableQuantity /></td>
          <td>£{(product.price * product.quantity).toFixed(2)}</td>
          <td><OrderTableDelete /></td>
        </tr>
      ))}

    </table>
    </div>
  )
}


export default OrderTable