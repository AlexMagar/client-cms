import React, { useState } from 'react'
import { CardCvcElement, CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from 'axios'

export const CheckOutPage = () => {

  const stripe = useStripe()
  const elements = useElements()
  const [form, setForm] = useState({})

  const cart = {
    amount: 25,
    name: 'pen box'
  }

  const handleOnChange = (e) =>{
    const {name, value} = e.target

    setForm({
      ...form,
      [name]: value
    })

  }

  const handleOnSubmit = async (e) =>{
    e.preventDefault()
    //you should have user and other details
    if(!stripe ||  !elements){
      return
    }

    //call our api server to get the client secret
    try {
      const apiUrl = "http://localhost:8000/payment"
      const {data} = await axios.post(apiUrl, {
        amount: cart.amount,
        currency: 'aud',
        PaymentMethodType: 'card'
      })
      const clientSecret = data.clientSecret

      const {paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: form.name,
            email: form.email
          }
        }
      })

      if(paymentIntent.status === 'succeeded'){
        alert('Your order has been successfully')

        //call your order server to create new order in the db
      }else{
        alert("couldn't process the payment, try again later")
      }

      //confirming the payment to strip server


    } catch (error) {
      console.log(error)
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
