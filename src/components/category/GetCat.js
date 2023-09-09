import { Button } from '@mui/material'
import React from 'react'
import { getAdminAction } from './getCatAction'

export const GetCat = () => {

    const handleOnClick = (e) => {
        e.preventDefault()
        const result = getAdminAction()
        result && console.log("Admin got", result)
    }
  return (
    <div>
        <Button variant='contained' onClick={handleOnClick}>Click me</Button>
    </div>
  )
}
