import React from 'react'

import { StyledButton } from '../styled'

const OrderTableDelete = ({ id, deleteItem }) => {
  return (
    <StyledButton 
      className="button button_delete"
      onClick={deleteItem}
      type="button"
      colour="red"
      cssType="delete"
      data-id={id}>
        Delete
    </StyledButton>
  )
}

export default OrderTableDelete