import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getAdmin } from '../../pages/signIn-signUp/adminAction'

export const GetCat = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAdmin())
  }, [dispatch])

  const handleOnClick = (e) => {
      e.preventDefault()
      const result = dispatch(getAdmin())
      result && console.log("Admin got", result)
  }
  return (
    <div>
        <Button variant='contained' onClick={handleOnClick} type='submit'>Click me</Button>
    </div>
  )
}
