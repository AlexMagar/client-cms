import React from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { Hero } from '../../components/Hero/Hero'
import { CardView } from '../../components/CustomCard/CardView'
import { Link } from '@mui/material'
import { GetCat } from '../../components/category/GetCat'

export const Home = () => {
  return (
    <div>
        <Header />
        <main className='main'>
          <Hero />
          <Link className='nav-link' to='/viewCart'> <CardView /> </Link>
          <GetCat />
        </main>
        <Footer />
    </div>
  )
}
