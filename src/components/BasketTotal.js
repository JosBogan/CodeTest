import React, { useEffect, useState } from 'react'

const BasketTotal = ({ products }) => {

  const [subTotalCost, setTotalCost] = useState(0)
  const [vat, setVat] = useState(0)

  useEffect(() => {
    const calculatedTotal = parseFloat(products.reduce((acc, product) => acc + (product.price * product.quantity), 0).toFixed(2))
    setTotalCost(calculatedTotal)
  }, [products])

  useEffect(()=> {
    const calculatedVat = parseFloat((subTotalCost * 0.2).toFixed(2))
    setVat(calculatedVat)
  }, [subTotalCost])


  return (
    <div className="basket_checkout">
      <div className="basket_total_row basket_subtotal">
        <div className="basket_subtotal_title">Subtotal</div>
        <div className="basket_subtotal_cost">
          £{ subTotalCost }
        </div>
      </div>
      <div className="basket_total_row basket_vat">
        <div className="basket_vat_title">VAT @ 20%</div>
        <div className="basket_vat_cost">
          £{vat}
        </div>
      </div>

      <div className="basket_total_row basket_total">
        <div className="basket_vat_title">Total</div>
        <div className="basket_vat_cost">
          £{(subTotalCost + vat).toFixed(2)}
        </div>
      </div>
      <div>
        {console.log(typeof(products.length))}
        <button 
          type="submit" 
          className="button_submit"
          disabled={!products.length ? true : false}
        >Buy Now</button>
      </div>
    </div>
  )
}

export default BasketTotal