import React from 'react'

import './App.css'

import BasketHeader from './components/BasketHeader'
import OrderTable from './components/OrderTable'

const App = () => {
  return (
    <section className="page_container">
      <div className="basket_container">
      <BasketHeader />
      <OrderTable />
      </div>
    </section>
  )
}

export default App
