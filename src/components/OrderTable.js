import React from 'react'

import OrderTableDelete from './OrderTableDelete'
import OrderTableQuantity from './OrderTableQuantity'

const OrderTable = ({ products, setProducts }) => {

  const updateQuantity = (event) => {
    const updatedProducts = products.map(product => {
      if (product.id === parseInt(event.target.dataset.id)) {
        return {
          ...product, 
          quantity: event.target.name === 'increment' ? product.quantity+1 : product.quantity-1
        }
      } else {
        return {...product}
      }
    })
    const filteredProducts = updatedProducts.filter(product => product.quantity > 0)
    setProducts(filteredProducts)
  }

  const deleteItem = (event) => {
    const filteredProducts = products.filter(product => product.id !== parseInt(event.target.dataset.id))
    setProducts(filteredProducts)
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
                <OrderTableDelete
                  deleteItem={deleteItem} 
                  id={product.id}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default OrderTable