import React, { useState } from 'react'

import OrderTableDelete from './OrderTableDelete'
import OrderTableQuantity from './OrderTableQuantity'

const OrderTable = () => {

  const [products, setProducts] = useState([
    {
      name: 'Apple',
      price: 0.52,
      quantity: 2,
      id: 0
    },
    {
      name: 'Banana',
      price: 0.67,
      quantity: 3,
      id: 1
    }
  ])

  const updateQuantity = (event) => {
    console.log(event.target.name)
    console.log(event.target.dataset.id)
  }

  return (
    <div className="order_container">
      <h2 className="order_header">Review Your Order</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>£{product.price}</td>
              <td>
                <OrderTableQuantity 
                  quantity={product.quantity} 
                  id={product.id}
                  updateQuantity={updateQuantity}
                />
              </td>
              <td>£{(product.price * product.quantity).toFixed(2)}</td>
              <td>
                <OrderTableDelete />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default OrderTable