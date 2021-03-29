import React from 'react'

import OrderTableDelete from './OrderTableDelete'
import OrderTableQuantity from './OrderTableQuantity'

const OrderTable = ({ products, setProducts }) => {


  const checkQuantityBounds = ({ target }) => {
    if (target.value === '') target.value = 1
    if (parseInt(target.value) > 10) target.value = 10
    updateQuantity({ target })
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
    updateQuantity({ target: inputRef.current })
  }

  const updateQuantity = ({ target }) => {
    if (parseInt(target.value) > 10 || parseInt(target.value) < 0) return
    const updatedProducts = products.map(product => {
      if (product.id === parseInt(target.dataset.id)) {
        return {
          ...product, 
          quantity: parseInt(target.value) || ''
        }
      } else {
        return {...product}
      }
    })
    setProducts(updatedProducts)
  }

  const deleteItem = ({ target }) => {
    const filteredProducts = products.filter(product => product.id !== parseInt(target.dataset.id))
    setProducts(filteredProducts)
  }

  return (
    <div className="order_container">
      <h2 className="order_header">Review Your Order</h2>
      <div className="order_products_table_container">
        <table className="order_products_table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Cost</th>
              <th></th>
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
                    quantityButtonInputController={quantityButtonInputController}
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
    </div>
  )
}


export default OrderTable