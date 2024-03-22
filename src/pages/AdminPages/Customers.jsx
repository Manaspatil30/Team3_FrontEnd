import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CustomerData = [
  { id: 1, customerID: '313', customerName: 'Oguzhan', surname: 'Cetinkaya', email: 'oguzhancetinkaya@gmail.com', password: 'oguzhan123', address: 'Aston Street B4' }
];

const Customers = () => {
  const [Customers, setCustomers] = useState(CustomerData);
  const [open, setOpen] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [selectedCustomerForEdit, setSelectedCustomerForEdit] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setSelectedCustomerId(null);
    setSelectedCustomerForEdit(null);
  };

  const handleOpen = () => {
    setOpen(true);
    setSelectedCustomerId(null);
    setSelectedCustomerForEdit(null);
  };

  const handleSave = () => {
    if (selectedCustomerId !== null) {
      const updatedCustomers = Customers.map(Customer =>
        Customer.id === selectedCustomerId ? { ...Customer, ...selectedCustomerForEdit } : Customer
      );
      setCustomers(updatedCustomers);
    } else {
      const newCustomer = { ...selectedCustomerForEdit, id: Customers.length + 1 };
      setCustomers([...Customers, newCustomer]);
    }
    handleClose();
  };

  const handleEdit = (id) => {
    const selectedCustomer = Customers.find(Customer => Customer.id === id);
    setSelectedCustomerId(id);
    setSelectedCustomerForEdit(selectedCustomer);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setCustomers(Customers.filter(Customer => Customer.id !== id));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedCustomerForEdit(prevState => ({ ...prevState, [name]: value }));
  };

  const columns = [
    { field: 'id', headerName: 'CustomerID', width: 250 },
    {field: 'customerName', headerName: 'Name', width: 250},
    { field: 'surname', headerName: 'Surname', width: 250},
    { field: 'email', headerName: 'E-mail', width: 250},
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div>
          <EditIcon
            color="success"
            onClick={() => handleEdit(params.row.id)}
          >
          </EditIcon>
          <DeleteForeverIcon
            color="success"
            onClick={() => handleDelete(params.row.id)}
          >
          </DeleteForeverIcon>
        </div>
      ),
    },
  ];

  return (
    <>

      <Box sx={{ display: 'flex' }}>
        
        <Box component="main" sx={{flexGrow: 1, p: 3, justifyContent: 'center', paddingTop: '0px' }}>
          <div style={{ height: 750, width: '100%',paddingLeft:'180px'}}>
            <Button color='secondary' variant="contained" onClick={handleOpen}>Add Customer</Button>
            <DataGrid
              rows={Customers}
              columns={columns}
              pageSize={5}
            />
          </div>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedCustomerId !== null ? 'Edit Customer' : 'New Customer'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            name="customerName"
            fullWidth
            value={selectedCustomerForEdit?.customerName || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Surname"
            type="text"
            name="surname"
            fullWidth
            value={selectedCustomerForEdit?.surname || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="E-mail"
            type="text"
            name="email"
            fullWidth
            value={selectedCustomerForEdit?.email || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Password"
            type="text"
            name="password"
            fullWidth
            value={selectedCustomerForEdit?.password || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Address"
            type="text"
            name="address"
            fullWidth
            value={selectedCustomerForEdit?.address || ''}
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
};

export default Customers;
