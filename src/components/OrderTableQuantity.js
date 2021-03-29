import React, { useRef } from 'react'


const OrderTableQuantity = ({ quantity, id, checkQuantityBounds, valueChange }) => {

  const inputRef = useRef(null)

  return (
    <div className="quantity_row_container">
      <input  
        min="1" 
        max="10"
        type="number"
        value={quantity}
        ref={inputRef}
        onBlur={checkQuantityBounds}
        data-product-id={id}
        id="quantity"
        onChange={valueChange}
      />

      <div className="increment_buttons_container">
        <button 
          className="button button_decrement"
          name="decrement" 
          type="button"
          data-product-id={id}
          data-value={-1}
          onClick={(event) => valueChange(event, inputRef)}>
            -
        </button>
        <button 
          className="button button_increment"
          name="increment"
          type="button"
          data-product-id={id}
          data-value={1}
          onClick={(event) => valueChange(event, inputRef)}>
            +
        </button>
      </div>
    </div>
  )
}

export default OrderTableQuantity