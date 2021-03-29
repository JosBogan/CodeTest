import React, { useEffect, useState } from 'react'

const BasketTotal = ({ products }) => {

  const [totalCost, setTotalCost] = useState(0)

  useEffect(() => {
    const calculatedTotal = products.reduce((acc, product) => acc + (product.price * product.quantity), 0).toFixed(2)
    setTotalCost(calculatedTotal)
  }, [products])

  return (
    <div className="basket_checkout">
      <div className="basket_subtotal">
        <div className="basket_subtotal_title">Subtotal</div>
        <div className="basket_subtotal_cost">
          £{ totalCost }
        </div>
      </div>
      <div className="basket_vat">
        <div className="basket_vat_title">VAT @ 20%</div>
        <div className="basket_vat_cost">
          £{(totalCost * 0.2).toFixed(2)}
        </div>
      </div>
    </div>
  )
}

export default BasketTotal