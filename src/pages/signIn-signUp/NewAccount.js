import React, { useState } from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { Form } from 'react-bootstrap'
import { Box, Button, Stack, TextField } from '@mui/material'


const initialState = {
    firstName: "",
    email: ""
}

export const NewAccount = () => {

    const [form, setForm] = useState(initialState)


    const handleOnChange = (e) => {
        const {name, value} = e.target

        setForm({
            ...form,
            [name]:value
        })
    }

    const handleOnSubmit =(e) => {
        e.preventDefault()

        console.log(form)
    }

  return (
    <div>
        <Header/>
        <Form onSubmit={handleOnSubmit}>
            <Stack spacing={2} direction='column' width='100%' alignItems='center'>
                <h3>Create New Account</h3>
                <TextField label='First Name' type='text' name='firstName' onChange={handleOnChange}/>
                <TextField label='Email' type='email' name='email' onChange={handleOnChange}/>
                <Button type='submit' variant='contained' sx={{width:'200px'}}>Register</Button>
            </Stack>
        </Form>
        <Footer/>
    </div>
  )
}
