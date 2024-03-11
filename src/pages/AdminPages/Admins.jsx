import AdminSideBar from '../../components/AdminSideBar';
import AdminTopBar from '../../components/AdminTopBar';
import React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';


const columns = [
  { field: 'id', headerName: 'AdminID', width: 100 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'surname', headerName: 'Surname', width: 200 },
  { field: 'title', headerName: 'Title', width: 150},
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'password', headerName: 'Password', width: 200 }, 
  { field: 'address', headerName: 'Address', width: 300},
];

const adminData = [
  { id: 1, name: 'Oguzhan', surname: 'Cetinkaya', title:'Manager', email: 'oguzhancetinkaya@gmail.com', password: '12312313', address: 'Aston Street Birmingham B4 7TU' },

];

const Admins = () => {
  const [rows, setRows] = useState(adminData);
  const [open, setOpen] = useState(false);
  const [newadminData, setnewadminData] = useState({ name: '', surname: '', title:'', email: '', password: '', address: '' });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    const newCustomer = { ...newadminData, id: rows.length + 1 };
    setRows([...rows, newCustomer]);
    handleClose();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setnewadminData({ ...newadminData, [name]: value });
  };

  return (
    <>
      <AdminTopBar />
      <Box sx={{ display: 'flex' }}>
        <AdminSideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, justifyContent: 'center', paddingTop: '75px' }}>
          <div style={{ height: 500, width: '100%' }}>
            <Button variant="contained" onClick={handleOpen}>Add Admin</Button>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
            />
          </div>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Admin</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            name="name"
            fullWidth
            value={newadminData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Surname"
            type="text"
            name="surname"
            fullWidth
            value={newadminData.surname}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Title"
            type="text"
            name="title"
            fullWidth
            value={newadminData.title}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            name="email"
            fullWidth
            value={newadminData.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            name="password"
            fullWidth
            value={newadminData.password}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Address"
            type="text"
            name="address"
            fullWidth
            value={newadminData.address}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default Admins