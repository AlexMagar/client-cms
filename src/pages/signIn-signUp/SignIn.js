import React, { useState } from 'react'
import Box from "@mui/material/Box";
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import FormControl from '@mui/material/FormControl';
import { Button, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Form } from "react-bootstrap";

const initialState = {
    UserName: '',
    password: ''
}

export const SignIn = () => {
    
    const [form, setForm] = useState(initialState)
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOnChange = (e) =>{
    const {name, value} = e.target

    setForm({
        ...form,
        [name]: value,
    })
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault()
    console.log(form)
  }
  return (
    <div>
        <Header />
        <Box sx={{display: 'flex', flexWrap:'wrap'}}>
           <div>
            <Form style={{width: " 450px"}} className='m-auto border p-3 mt-5 shadow-lg rounded' onSubmit={handleOnSubmit}>
                <h3 className='App'>Login</h3>
            <FormControl sx={{m: 1, width: '25ch'}} variant='outlined'>
                <TextField id='outlined' label='User Name' onChange={handleOnChange} name='UserName'/>
            </FormControl>
            <FormControl sx={{m: 1, width: '25ch'}} variant='outlined'>
                <InputLabel htmlFor='outlined-adornment-password'  label='Password'>Password</InputLabel>
                <OutlinedInput 
                    id='outlined-adornment-password'
                    onChange={handleOnChange}
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    endAdornment ={
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label='toggle password visibility'
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge= 'end'
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <Button variant='contained' type='submit'>Login</Button>
            </FormControl>
            </Form>
           </div>
        </Box>
        <Footer />
    </div>
  )
}
