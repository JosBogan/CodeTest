import React, { useRef } from 'react'


const OrderTableQuantity = ({ quantity, id, updateQuantity, checkQuantityBounds, quantityButtonInputController }) => {

  const inputRef = useRef(null)

  return (
    <div className="quantity_row_container">
      <input  
        min="1" 
        max="10"
        type="number"
        value={quantity}
        onInput={(event) => event.target.validity.valid ? '' : event.target.value = ''}
        ref={inputRef}
        onBlur={checkQuantityBounds}
        data-id={id}
        name="inputControl"
        onChange={updateQuantity}/>
      <div className="increment_buttons_container">
        <button 
          className="button button_decrement"
          name="decrement" 
          type="button"
          onClick={(event) => quantityButtonInputController(event, inputRef)}>
            -
        </button>
        <button 
          className="button button_increment"
          name="increment"
          type="button"
          onClick={(event) => quantityButtonInputController(event, inputRef)}>
            +
        </button>
      </div>
    </div>
  )
}

export default OrderTableQuantity