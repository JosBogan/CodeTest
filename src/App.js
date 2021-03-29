import React, { useState } from 'react'
import axios from 'axios'

import './App.css'

import BasketHeader from './components/BasketHeader'
import BasketTotal from './components/BasketTotal'
import OrderTable from './components/OrderTable'

const App = () => {

  const [products, setProducts] = useState([
    {
      name: 'Apple',
      price: 0.52,
      quantity: 2,
      id: 0
    },
    {
      name: 'Banana',
      price: 0.67,
      quantity: 3,
      id: 1
    }
  ])

  const sumbitPurchaseData = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('', products)
      window.alert('Your order has been sent!')
      // In a real application I would probably do something with this response and the post request may require some headers.
    } catch (err) {
      console.log(err)
      // Similarly in a real application I'd do more than just console log my errors!
      window.alert('Your order has been sent!')
      // The request will always throw an error so this alert also has to be in the catch block.
    }
  }


  return (
    <section className="page_container">
      <form className="basket_container" onSubmit={sumbitPurchaseData}>
        <BasketHeader />
        <OrderTable products={products} setProducts={setProducts}/>
        <BasketTotal products={products}/>
      </form>
    </section>
  )
}

export default App
