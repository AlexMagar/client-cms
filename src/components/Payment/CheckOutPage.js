import React from 'react'
import { PaymentElement } from "@stripe/react-stripe-js";

export const CheckOutPage = () => {
  return (
    <form>
        <input type='text'/>
        <PaymentElement />
        <button>Submit</button>
    </form>
  )
}
