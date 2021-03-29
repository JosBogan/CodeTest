import React from 'react'


const OrderTableDelete = ({ id, deleteItem }) => {
  return (
    <button 
      className="button button_delete"
      onClick={deleteItem} 
      data-id={id}>Delete
    </button>
  )
}

export default OrderTableDelete