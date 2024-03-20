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
  const [membership, setMembership] = useState(null);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

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
            <TextField required variant='outlined' label='First Name' onChange={(e)=>{setFirstName(e.target.value)}}/>
            {/* @ts-ignore */}
            <TextField required variant='outlined' label='Last Name' onChange={(e)=>{setLastName(e.target.value)}}/>
            {/* @ts-ignore */}
            <TextField required variant='outlined' label='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
            {/* @ts-ignore */}
            <TextField required variant='outlined' type='number' label='Phone Number' onChange={(e)=>{setPhone(e.target.value)}}/>
        </Grid>
        <Grid item md={12} display={'flex'} justifyContent={'space-evenly'}>
          {/* @ts-ignore */}
            <TextField required variant='outlined' label='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
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