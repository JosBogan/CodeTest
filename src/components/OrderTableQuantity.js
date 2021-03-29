import React, { useRef } from 'react'


const OrderTableQuantity = ({ quantity, id, updateQuantity, checkQuantityBounds, quantityButtonInputController }) => {

  const inputRef = useRef(null)

  return (
    <div>
      <input  
        min="1" 
        max="10"
        type="number"
        value={quantity}
        ref={inputRef}
        onBlur={checkQuantityBounds}
        data-id={id}
        name="inputControl"
        onChange={updateQuantity}/>
      <button 
        className="button button_decrement"
        name="decrement" 
        // data-id={id} 
        type="button"
        onClick={(event) => quantityButtonInputController(event, inputRef)}>
          -
        </button>
      <button 
        className="button button_increment"
        name="increment" 
        // data-id={id} 
        type="button"
        onClick={(event) => quantityButtonInputController(event, inputRef)}>
          +
        </button>
    </div>
  )
}

export default OrderTableQuantity