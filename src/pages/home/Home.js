import React from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { Hero } from '../../components/Hero/Hero'
import { CardView } from '../../components/CustomCard/CardView'

export const Home = () => {
  return (
    <div>
        <Header />
        <main className='main'>
          <Hero />
          <CardView />
        </main>
        <Footer />
    </div>
  )
}
