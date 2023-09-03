import React from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { Hero } from '../../components/Hero/Hero'

export const Home = () => {
  return (
    <div>
        <Header />
        <main className='main'>
            <Hero />
        </main>
        <Footer />
    </div>
  )
}
