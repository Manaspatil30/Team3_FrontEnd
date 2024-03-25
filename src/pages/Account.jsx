import { Divider, Grid, TextField, Typography, Button, Modal, Box } from '@mui/material'
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display :'flex',
  flexDirection : 'column',
};


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
    const [oldPass, setOldPass] = useState();
    const [newPass, setNewPass] = useState();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    
    // const formData = new FormData();
    // console.log(formData);
    
    const data = {
      "first_name" : firstName?firstName:"",
      "last_name" : lastName,
      "phone_number" : phone,
      "email" : email,
      "address" : address,
    }

    const passwordData = {
      "oldPassword": oldPass, 
      "newPassword" : newPass, 
      "tokenUserId" : Cookies.get("user_id")
    }

    const changePass = () => {
      axios.put("user/change-password/"+Cookies.get("user_id"), passwordData)
      .then(toast.success("Password Changed Successfully"))
      .then(()=>{window.location.reload()})
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
        <Button variant='contained' sx={{margin:'10% auto'}} onClick={handleOpen}>Change Password</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* @ts-ignore */}
          <TextField required variant='outlined' label='Old Password' sx={{marginBottom:'20px'}} onChange={(e)=>{setOldPass(e.target.value)}} />
            {/* @ts-ignore */}
          <TextField required variant='outlined' label='New Password' onChange={(e)=>{setNewPass(e.target.value)}}/>
          <Box sx={{display:'flex', justifyContent:'center', marginTop:'10px'}}>
          <Button variant='contained' onClick={changePass} sx={{width:'15%'}}>Submit</Button>
          </Box>
        </Box>
      </Modal>
    </Grid>
    </>
  )
}

export default Account