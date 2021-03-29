import React from 'react'


const OrderTableQuantity = ({ quantity, id, updateQuantity, checkQuantityBounds }) => {
  return (
    <div>
      <input  
        min="1" 
        max="10"
        type="number"
        value={quantity}
        onBlur={checkQuantityBounds}
        data-id={id}
        name="inputControl"
        onChange={updateQuantity}/>
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