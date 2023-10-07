import React, { useState } from 'react'
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";

export const CheckOutPage = () => {

  const stripe = useStripe()
  const elements = useElements()
  const [form, setForm] = useState({})

  const handleOnChange = (e) =>{
    const {name, value} = e.target

    setForm({
      ...form,
      [name]: value
    })

  }

  const handleOnSubmit = e =>{
    e.preventDefault()
    //you should have user and other details
    if(!stripe ||  !elements){
      return
    }

  }

  return (
    <form onSubmit={handleOnSubmit}>
      <p>name: <input onChange={handleOnChange} type='text' name='name' /></p>
      <p>email: <input onChange={handleOnChange} type='email' name='email'/></p>
        <PaymentElement options={{hidePostalCode: true}}/>
        <button>Submit</button>
    </form>
  )
}
