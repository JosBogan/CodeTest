import React, { useState } from 'react'

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


  return (
    <section className="page_container">
      <div className="basket_container">
        <BasketHeader />
        <OrderTable products={products} setProducts={setProducts}/>
        <BasketTotal products={products}/>
      </div>
    </section>
  )
}

export default App
