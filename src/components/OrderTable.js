import React from 'react'

import OrderTableDelete from './OrderTableDelete'
import OrderTableQuantity from './OrderTableQuantity'

const OrderTable = ({ products, setProducts }) => {

  const checkQuantityBounds = ({ target }) => {
    let newQuantity = target.value
    if (target.value === '') newQuantity = 1
    else if (parseInt(target.value) > 10) newQuantity = 10
    updateQuantity(newQuantity, target.dataset.productId)
  }

  const valueChange = ({ target }, inputRef) => {
    const newQuantity = !inputRef ? parseInt(target.value) : parseInt(inputRef.current.value) + parseInt(target.dataset.value)
    if (newQuantity > 10 || (!inputRef && newQuantity < 0) || (!!inputRef && newQuantity < 1)) return
    updateQuantity(newQuantity, target.dataset.productId)
  }

  const updateQuantity = (newQuantity, id) => {
    const updatedProducts = products.map(product => {
      if (product.id === parseInt(id)) {
        return {
          ...product, 
          quantity: parseInt(newQuantity) || ''
        }
      } else {
        return { ...product }
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
                    valueChange={valueChange}
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