import { Paper } from '@mui/material'
import React from 'react'

export const CarouselItems = (item) => {
  return (
    <div className=' d-flex'>
    <Paper >
        <img src={item.item.image} alt={item.item.title} style={{width:'100%', height:'50vh'}}/>
        <h2>{item.item.title}</h2>
    </Paper>
    </div>
  )
}
