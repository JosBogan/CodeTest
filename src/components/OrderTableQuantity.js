import React, { useRef } from 'react'

import { StyledButton, StyledQuantityInput } from '../styled'


const OrderTableQuantity = ({ quantity, id, checkQuantityBounds, valueChange }) => {

  const inputRef = useRef(null)

  return (
    <div className="quantity_row_container">
      <StyledQuantityInput  
        min="1" 
        max="10"
        value={quantity}
        ref={inputRef}
        onBlur={checkQuantityBounds}
        data-product-id={id}
        id="quantity"
        onChange={valueChange}
      />

      <div className="increment_buttons_container">
        <StyledButton 
          colour="green"
          type="button"
          cssType="input"
          data-product-id={id}
          data-value={-1}
          onClick={(event) => valueChange(event, inputRef)}>
            -
        </StyledButton>
        <StyledButton 
          colour="orange"
          type="button"
          cssType="input"
          data-product-id={id}
          data-value={1}
          onClick={(event) => valueChange(event, inputRef)}>
            +
        </StyledButton>
      </div>
    </div>
  )
}

export default OrderTableQuantity