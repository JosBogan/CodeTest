import React from 'react'


const OrderTableQuantity = ({ quantity, id, updateQuantity }) => {
  return (
    <div>
      <input readOnly type="number" value={quantity}/>
      <button name="decrement" data-id={id} onClick={updateQuantity}>-</button>
      <button name="increment" data-id={id} onClick={updateQuantity}>+</button>
    </div>
  )
}

export default OrderTableQuantity