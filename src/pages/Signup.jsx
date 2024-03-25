import { Divider, Grid, TextField, Typography, Button } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState(null);
  const [membership, setMembership] = useState(1);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [error, setError] = useState();

  // const formData = new FormData();
  // console.log(formData);

  const data = {
    "first_name" : firstName,
    "last_name" : lastName,
    "phone_number" : phone,
    "email" : email,
    "address" : address,
    "MembershipTypeID" : membership,
    "password" : password,
    "userType" : "C"
  }



  const validations = () => {
    let error = {}
  
    if (!firstName) {
      error.firstName = 'Please enter your first name'
    } else if (!/^[a-zA-Z]+$/.test(firstName)) {
      error.firstName = "First name must be letters";
  }
  
    if (!lastName) {
      error.lastName = 'Please enter your last name'
    } else if (!/^[a-zA-Z]+$/.test(lastName)) {
    error.lastName = "Last name must be letters"; 
}
  
    if (!phone) {
      error.phone = 'Please enter your phone number'
    }
  
    if (!email) {
      error.email = 'Please enter your e-mail address'
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      error.email = 'Invalid e-mail'
    }
  
    if (!password) {
      error.password = 'Please enter a password'
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(password)) {
      error.password = 'Your password must be at least 8 characters, containing one uppercase , one lowercase and one digit'
    }
  
    setError(error);

  }

  const addUser = () => {
      axios.post('user/add', data)
      .then(()=>{
        toast.success("User Added Successfully")
      })
      .catch((err)=>{
        toast.error("Failed to add User")
      })
  }



  console.log(data)

  return (
    <>
    <Typography variant='h2' textAlign={'center'} mb={2}> Sign up</Typography>
    <Divider/>
    <Grid container mt={2} spacing={3}>
        
        <Grid item md={12} display={'flex'} justifyContent={'space-evenly'}>
            {/* @ts-ignore */}
            <TextField required variant='outlined' label='First Name' onChange={(e)=>{setFirstName(e.target.value)}} error={error && error.firstName} helperText={error && error.firstName}/>
            {/* @ts-ignore */}
            <TextField required variant='outlined' label='Last Name' onChange={(e)=>{setLastName(e.target.value)}} error={error && error.lastName} helperText={error && error.lastName}/>
            {/* @ts-ignore */}
            <TextField required variant='outlined' label='Email' onChange={(e)=>{setEmail(e.target.value)}} error={error && error.email} helperText={error && error.email}/>
            {/* @ts-ignore */}
            <TextField required variant='outlined' type='number' label='Phone Number' onChange={(e)=>{setPhone(e.target.value)}} error={error && error.phone} helperText={error && error.phone}/>
        </Grid>
        <Grid item md={12} display={'flex'} justifyContent={'space-evenly'}>
          {/* @ts-ignore */}
            <TextField required variant='outlined' label='Password' onChange={(e)=>{setPassword(e.target.value)}} error={error && error.password} helperText={error && error.password}/>
            <TextField variant='outlined' label='Address Line 2'/>
            <TextField variant='outlined' label='City'/>
            <TextField variant='outlined' label='Post Code'/>
        </Grid>
        <Button variant='contained' sx={{margin:'10% auto'}} onClick={addUser}>
            Sign Up
        </Button>
    </Grid>
    </>
  )
}

export default Signup