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
      const response = axios.post('', products)
      window.alert('Your order has been sent!')
    } catch (err) {
      console.log(err)
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
