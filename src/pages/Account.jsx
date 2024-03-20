import { Divider, Grid, TextField, Typography, Button } from '@mui/material'
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';



const Account = () => {
    const [userData, setUserData] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [address, setAddress] = useState(null);
    const [membership, setMembership] = useState(null);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [update, setUpdate] = useState(true);
    
    // const formData = new FormData();
    // console.log(formData);
    
    const data = {
      "first_name" : firstName?firstName:"",
      "last_name" : lastName,
      "phone_number" : phone,
      "email" : email,
      "address" : address,
    }

    console.log("Data", data)

    const updateUser = () => {
      axios.put('user/update/' + Cookies.get("user_id"), data)
      .then(()=>{
        toast.success("User Upodated Successfully")
      })
      .catch((err)=>{
        toast.error("Failed to update User")
      })
    }
    
    useEffect(() => {
      axios.get("user/" + Cookies.get("user_id"))
          .then((response) => {
              const data = response.data;
              setUserData(data);
              setFirstName(data[0]?.first_name); 
              setLastName(data[0]?.last_name); 
              setPhone(data[0]?.phone_number);
              setEmail(data[0]?.email);
          })
          .catch((error) => {
              // Handle error if necessary
              console.error('Error fetching user data:', error);
          });
  }, []);
  console.log("User Data", userData);
    
    console.log(data)
  return (
    <>
    {/* <Typography variant='h2' textAlign={'center'} mb={2}></Typography> */}
    <Divider/>
    <Grid container mt={2} spacing={3}>
        {
          // @ts-ignore
          userData?.map((data)=>{
            return (
              <>
                <Grid
                  item
                  md={12}
                  display={"flex"}
                  justifyContent={"space-evenly"}
                >
                  <TextField
                    required
                    variant="outlined"
                    label="First Name"
                    defaultValue={data.first_name}
                    disabled = {update}
                    onChange={(e) => {
                      // @ts-ignore
                      setFirstName(e.target.value);
                    }}
                  />
                  <TextField
                    required
                    variant="outlined"
                    label="Last Name"
                    defaultValue={data.last_name}
                    disabled = {update}
                    onChange={(e) => {
                      {/* @ts-ignore */}
                      setLastName(e.target.value);
                    }}
                  />
                  
                  <TextField
                    required
                    variant="outlined"
                    label="Email"
                    defaultValue={data.email}
                    disabled = {update}
                    onChange={(e) => {
                      {/* @ts-ignore */}
                      setEmail(e.target.value);
                    }}
                  />
                  
                  <TextField
                    required
                    variant="outlined"
                    type="number"
                    label="Phone Number"
                    defaultValue={data.phone_number}
                    disabled = {update}
                    onChange={(e) => {
                      {/* @ts-ignore */}
                      setPhone(e.target.value);
                    }}
                  />
                </Grid>
                <Grid
                  item
                  md={12}
                  display={"flex"}
                  justifyContent={"space-evenly"}
                >
                  
                  <TextField
                    required
                    variant="outlined"
                    label="Password"
                    onChange={(e) => {
                      {/* @ts-ignore */}
                      setPassword(e.target.value);
                    }}
                  />
                  <TextField variant="outlined" label="Address Line 2" />
                  <TextField variant="outlined" label="City" />
                  <TextField variant="outlined" label="Post Code" />
                </Grid>
              </>
            );
          })
        }
        {
          update ? 
          <Button variant='contained' sx={{margin:'10% auto'}} onClick={()=>{setUpdate(false)}}>
            Update Info
          </Button>
          :
          <Button variant='contained' sx={{margin:'10% auto'}} onClick={()=>{updateUser(); setUpdate(true)}}>
          Done
        </Button>
        }
        
    </Grid>
    </>
  )
}

export default Account