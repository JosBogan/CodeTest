import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

import { ThemeProvider } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import { StyledPageContainer, StyledForm } from './styled' 

import BasketHeader from './components/BasketHeader'
import BasketTotal from './components/BasketTotal'
import OrderTable from './components/OrderTable'

const theme = {
  green: '#4dc09a',
  orange: '#ee9600',
  red: '#ee3b2f',
  teal: '#52c1ca',
  accent: '#ebf0f1'
}

const notify = () => toast.success('Your order has been sent!', {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  })

const App = () => {

  const [products, setProducts] = useState([
    {
      id: 0,
      name: 'Apple',
      price: 0.52,
      quantity: 2
    },
    {
      id: 1,
      name: 'Banana',
      price: 0.67,
      quantity: 3
    }
  ])

  const sumbitPurchaseData = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('', products)
      notify()
      // In a real application I would probably do something with this response and the request may require some headers.
    } catch (err) {
      console.log(err)
      // Similarly in a real application I'd do more than just console log my errors!
      notify()
      // The request will always throw an error so this alert also has to be in the catch block.
    }
  }

  return (
    <StyledPageContainer>
      <ToastContainer/>
      <ThemeProvider theme={theme}>
        <StyledForm onSubmit={sumbitPurchaseData}>

          <BasketHeader />
          <OrderTable products={products} setProducts={setProducts}/>
          <BasketTotal products={products}/>

        </StyledForm>
      </ThemeProvider>
    </StyledPageContainer>
  )
}

export default App
