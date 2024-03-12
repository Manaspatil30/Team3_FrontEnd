import React, { useState } from 'react';
import AdminSideBar from '../../components/AdminSideBar';
import AdminTopBar from '../../components/AdminTopBar';
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

const productData = [
  { id: 1, adminName: 'Oguzhan', surname: 'Cetinkaya', title: 'Manager', email: 'oguzhancetinkaya@gmail.com', password: 'ogyzhan313', address: 'Coventry CV1' }
];

const Products = () => {
  const [products, setProducts] = useState(productData);
  const [open, setOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProductForEdit, setSelectedProductForEdit] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setSelectedProductId(null);
    setSelectedProductForEdit(null);
  };

  const handleOpen = () => {
    setOpen(true);
    setSelectedProductId(null);
    setSelectedProductForEdit(null);
  };

  const handleSave = () => {
    if (selectedProductId !== null) {
      const updatedProducts = products.map(product =>
        product.id === selectedProductId ? { ...product, ...selectedProductForEdit } : product
      );
      setProducts(updatedProducts);
    } else {
      const newProduct = { ...selectedProductForEdit, id: products.length + 1 };
      setProducts([...products, newProduct]);
    }
    handleClose();
  };

  const handleEdit = (id) => {
    const selectedProduct = products.find(product => product.id === id);
    setSelectedProductId(id);
    setSelectedProductForEdit(selectedProduct);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedProductForEdit(prevState => ({ ...prevState, [name]: value }));
  };

  const columns = [
    { field: 'id', headerName: 'AdminID', width: 110 },
    { field: 'adminName', headerName: 'Admin Name', width: 150, editable: true },
    { field: 'surname', headerName: 'Surname', width: 150, editable: true },
    { field: 'title', headerName: 'Title', width: 150, editable: true },
    { field: 'email', headerName: 'E-mail', width: 250, editable: true },
    { field: 'password', headerName: 'Password', width: 200, editable: true },
    { field: 'address', headerName: 'Address', width: 400, editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div>
          <EditIcon
            color="secondary"
            onClick={() => handleEdit(params.row.id)}
          >
          </EditIcon>
          <DeleteForeverIcon
            color="secondary"
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
        <Box component="main" sx={{ flexGrow: 1, p: 3, justifyContent: 'center', paddingTop: '75px' }}>
          <div style={{ height: 750, width: '100%' }}>
            <Button variant="contained" color='secondary' onClick={handleOpen}>Add Admin</Button>
            <DataGrid
              rows={products}
              columns={columns}
              pageSize={5}
            />
          </div>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedProductId !== null ? 'Edit Product' : 'New Product'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Admin Name"
            type="text"
            name="adminName"
            fullWidth
            value={selectedProductForEdit?.adminName || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Surname"
            type="text"
            name="surname"
            fullWidth
            value={selectedProductForEdit?.surname || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Title"
            type="text"
            name="title"
            fullWidth
            value={selectedProductForEdit?.title || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="E-mail"
            type="text"
            name="email"
            fullWidth
            value={selectedProductForEdit?.email || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Password"
            type="text"
            name="password"
            fullWidth
            value={selectedProductForEdit?.password || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Address"
            type="text"
            name="address"
            fullWidth
            value={selectedProductForEdit?.address || ''}
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

export default Products;