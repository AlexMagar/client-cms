import React from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { Form } from 'react-bootstrap'
import { Box, Button, Stack, TextField } from '@mui/material'

export const NewAccount = () => {

    const handleOnSubmit =(e) => {
        e.preventDefault()
        const {name, value} = e.target

        console.log(name, value)
    }

  return (
    <div>
        <Header/>
        <Form onSubmit={handleOnSubmit}>
            <Stack spacing={2} direction='column' width='100%' alignItems='center'>
                <h3>Create New Account</h3>
                <TextField label='First Name' type='text' name='firstName'/>
                <TextField label='Email' type='email' name='email'/>
                <Button type='submit' variant='contained' sx={{width:'200px'}}>Register</Button>
            </Stack>
        </Form>
        <Footer/>
    </div>
  )
}
