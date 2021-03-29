import React from 'react'


const OrderTableQuantity = ({ quantity, id, updateQuantity }) => {
  return (
    <div>
      <input readOnly type="number" value={quantity}/>
      <button 
        className="button button_decrement"
        name="decrement" 
        data-id={id} 
        onClick={updateQuantity}>-
        </button>
      <button 
        className="button button_increment"
        name="increment" 
        data-id={id} 
        onClick={updateQuantity}>+
        </button>
    </div>
  )
}

export default OrderTableQuantity