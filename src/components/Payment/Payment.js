import React from 'react'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckOutPage } from './CheckOutPage';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_STRIPE_PUBLISHABLE_KEY)
console.log('API key stripe:', stripePromise)

export const Payment = () => {

    const options = {
        //passing the client secret ovtained from the server
        clientSecret: '{{CLIENT_SECRET}}'
    }

  return (
    <div>
        <h3>Payment</h3>
        <hr/>
        <Elements stripe={stripePromise} options={options}>
            <CheckOutPage />
        </Elements>
    </div>
  )
}
