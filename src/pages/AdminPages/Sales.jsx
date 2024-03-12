import React from 'react';
import { useState } from 'react';
import AdminSideBar from '../../components/AdminSideBar';
import AdminTopBar from '../../components/AdminTopBar';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { Checkbox }from '@mui/material/';
import { FormControlLabel } from '@mui/material/';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const saleData = [
  { id: 1, CustomerID: '012327387', ProductID: '003', price: '£12.03', shippingAddress: 'Coventry Cathedral CV1', waitingForDelivery: false, notes: 'Delivery between 12:00 to 14:00' },
  { id: 2, CustomerID: '012327333', ProductID: '031', price: '£9.03', shippingAddress: 'Aston Street B4', waitingForDelivery: true, notes: 'Do not disturb after 22:00' },
  { id: 3, CustomerID: '012327331', ProductID: '055', price: '£59.03', shippingAddress: 'Bullring B1', waitingForDelivery: true, notes: 'Leave at porch' },
];

const Sales = () => {
  const [sales, setsales] = useState(saleData);
  const [open, setOpen] = useState(false);
  const [selectedSaleId, setSelectedSaleId] = useState(null);
  const [newsaleData, setNewsaleData] = useState({ id: null, CustomerID: '', ProductID: '', price: '', shippingAddress: '', waitingForDelivery: true, notes: '' });

  const handleClose = () => {
    setOpen(false);
    setSelectedSaleId(null);
    setNewsaleData({ id: null, CustomerID: '', ProductID: '', price: '', shippingAddress: '', waitingForDelivery: true, notes: '' });
  };


  const handleSave = () => {
    const updatedSales = sales.map(sale => {
      if (sale.id === selectedSaleId) {
        return { ...sale, ...newsaleData };
      }
      return sale;
    });
    setsales(updatedSales);
    handleClose();
  };

  const handleEdit = (id) => {
    const selectedSale = sales.find(sale => sale.id === id);
    setSelectedSaleId(id);
    setNewsaleData(selectedSale);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setsales(sales.filter(sale => sale.id !== id));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewsaleData({ ...newsaleData, [name]: value });
  };

  const columns = [
    { field: 'id', headerName: 'SaleID', width: 75},
    { field: 'CustomerID', headerName: 'CustomerID', width: 120},
    { field: 'ProductID', headerName: 'ProductID', width: 120},
    { field: 'price', headerName: 'Price', width: 100},
    { field: 'shippingAddress', headerName: 'Shipping Address', width: 330},
    { field: 'waitingForDelivery', headerName: 'Waiting for delivery?', width: 150, valueGetter: (params) => params.value ? 'Yes' : 'No',},
    { field: 'notes', headerName: 'Notes', width: 310, editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div>
          <EditIcon
            color='primary'
            onClick={() => handleEdit(params.row.id)}
          >
          </EditIcon>
          <DeleteForeverIcon
            color='primary'
            onClick={() => handleDelete(params.row.id)}
          >
          </DeleteForeverIcon>
        </div>
      ),
    },
  ];

  return (
    <>
      <AdminTopBar />
      <Box sx={{ display: 'flex' }}>
        <AdminSideBar />
        <Box component='main' sx={{ flexGrow: 1, p: 3, justifyContent: 'center', paddingTop: '75px', marginLeft: '50px' }}>
          <div style={{ height: 750, width: '90%' }}>
            <DataGrid
              rows={sales}
              columns={columns}
              pageSize={5}
            />
          </div>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedSaleId ? 'Edit sale' : 'New sale'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            label='CustomerID'
            type='text'
            name='CustomerID'
            fullWidth
            value={newsaleData.CustomerID}
            onChange={handleInputChange}
          />
          <TextField
            margin='dense'
            label='ProductID'
            type='text'
            name='ProductID'
            fullWidth
            value={newsaleData.ProductID}
            onChange={handleInputChange}
          />
          <TextField
            margin='dense'
            label='Price'
            type='text'
            name='price'
            fullWidth
            value={newsaleData.price}
            onChange={handleInputChange}
          />
          <TextField
            margin='dense'
            label='Shipping Address'
            type='text'
            name='shippingAddress'
            fullWidth
            value={newsaleData.shippingAddress}
            onChange={handleInputChange}
          />
          <TextField
            margin='dense'
            label='Notes'
            type='text'
            name='notes'
            fullWidth
            value={newsaleData.notes}
            onChange={handleInputChange}
          />
          <div style={{ display: 'flex', alignItems: 'center' ,justifyContent:'center'}}>
            <span>Waiting for delivery?</span>
            <FormControlLabel
              style={{marginLeft:'50px'}}  
              control={<Checkbox checked={newsaleData.waitingForDelivery} onChange={(event) => handleInputChange({ target: { name: 'waitingForDelivery', value: event.target.checked } })} color='primary' />}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Sales;
