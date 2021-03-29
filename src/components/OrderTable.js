import React from 'react'

import OrderTableDelete from './OrderTableDelete'
import OrderTableQuantity from './OrderTableQuantity'

const OrderTable = ({ products, setProducts }) => {


  const checkQuantityBounds = (event) => {
    if (event.target.value === '') event.target.value = 1
    if (parseInt(event.target.value) > 10) event.target.value = 10
    updateQuantity(event)
  }

  const quantityButtonInputController = (event, inputRef) => {
    switch (event.target.name) {
      case 'increment':
        inputRef.current.stepUp()
        break
      case 'decrement':
        inputRef.current.stepDown()
        break
      default:
        break
    }
  }

  const updateQuantity = (event) => {
    const updatedProducts = products.map(product => {
      if (product.id === parseInt(event.target.dataset.id)) {
        return {
          ...product, 
          quantity: parseInt(event.target.value)
        }
      } else {
        return {...product}
      }
    })
    setProducts(updatedProducts)
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
                  buttonInputController={quantityButtonInputController}
                  checkQuantityBounds={checkQuantityBounds}
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