import { Button, Paper } from '@mui/material'
import React from 'react'

export const CarouselItems = (props) => {
  return (
    <div className=' d-flex'>
    <Paper >
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
        <Button className='checkButton'>Check it out!!</Button>
    </Paper>
    </div>
  )
}
