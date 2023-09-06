import { Button, Paper } from '@mui/material'
import React from 'react'

export const CarouselItems = (item) => {
  return (
    <div className=' d-flex'>
    <Paper >
        <img src={item.image} alt={item.title} style={{width:'100%', height:'45vh'}}/>
        <h2>{item.title}</h2>
        <Button className='checkButton'>Check it out!!</Button>
    </Paper>
    </div>
  )
}
