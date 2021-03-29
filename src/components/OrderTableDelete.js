import React from 'react'


const OrderTableDelete = ({ id, deleteItem }) => {
  return (
    <button onClick={deleteItem} data-id={id}>Delete</button>
  )
}

export default OrderTableDelete