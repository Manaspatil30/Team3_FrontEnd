import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Box, Grid, TextField } from '@mui/material';
import AdminSideBar from '../../components/AdminSideBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';

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

const columns = [
    { id: 'name', label: 'First Name', minWidth: 170 },
    { id: 'code', label: 'Last Name', minWidth: 100 },
    {
      id: 'population',
      label: 'Phone',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Email',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'User Type',
      label: 'User Id',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
  ];


const AdminUsers = () => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [adminUsers, setAdminUsers] = useState();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState(null);
  const [membership, setMembership] = useState(1);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - adminUsers?.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(()=>{
    axios.get("users").then((data) => {setAdminUsers(data.data)})
  },[])
  console.log("adminUsers", adminUsers)

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

  return (
    <>
    <Grid container sx={{margin:"10% 0"}}>
        <Grid sx={{height:'100%'}} item md={3}>
            <AdminSideBar/>
        </Grid>
        <Grid item md={9}>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {adminUsers?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        <TableCell align='center'>
                          {row.first_name}
                        </TableCell>
                        <TableCell align='center'>
                          {row.last_name}
                        </TableCell>
                        <TableCell align='center'>
                          {row.phone_number}
                        </TableCell>
                        <TableCell align='center'>
                          {row.email}
                        </TableCell>
                        <TableCell align='center'>
                          {row.user_id}
                        </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={adminUsers?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    <Button variant='contained' onClick={handleOpen}>Add User</Button>
        </Grid>
    </Grid>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* @ts-ignore */}
          <TextField required variant='outlined' label='First Name' onChange={(e)=>{setFirstName(e.target.value)}} />
            {/* @ts-ignore */}
            <TextField required variant='outlined' label='Last Name' onChange={(e)=>{setLastName(e.target.value)}}/>
            {/* @ts-ignore */}
            <TextField required variant='outlined' label='Email' onChange={(e)=>{setEmail(e.target.value)}} />
            {/* @ts-ignore */}
            <TextField required variant='outlined' type='number' label='Phone Number' onChange={(e)=>{setPhone(e.target.value)}}/>
            <TextField required variant='outlined' label='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <TextField variant='outlined' label='Address Line 2'/>
            <TextField variant='outlined' label='City'/>
            <TextField variant='outlined' label='Post Code'/>
            <Button variant='contained' onClick={addUser}>Add</Button>
        </Box>
      </Modal>
    </>
  )
}

export default AdminUsers