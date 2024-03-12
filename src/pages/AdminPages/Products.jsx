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
  { id: 1, productName: 'Tomato', category: 'Vegi', stock: '30', description: 'ASDNJASBDJ', benefits: 'ASDBAJHSBVDAHJD', imageUrl: 'ASDJABSJDAJDS.JPG' },
  { id: 1, productName: 'Tomato', category: 'Vegi', stock: '30', description: 'ASDNJASBDJ', benefits: 'ASDBAJHSBVDAHJD', imageUrl: 'ASDJABSJDAJDS.JPG' },
  { id: 1, productName: 'Tomato', category: 'Vegi', stock: '30', description: 'ASDNJASBDJ', benefits: 'ASDBAJHSBVDAHJD', imageUrl: 'ASDJABSJDAJDS.JPG' },
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
    { field: 'id', headerName: 'ProductID', width: 120 },
    { field: 'productName', headerName: 'Product Name', width: 170},
    { field: 'category', headerName: 'Category', width: 150},
    { field: 'stock', headerName: 'Stock', width: 150},
    { field: 'description', headerName: 'Description', width: 200},
    { field: 'benefits', headerName: 'Benefits', width: 250 },
    { field: 'imageUrl', headerName: 'Image URL', width: 350},
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div>
          <EditIcon
            color='secondary'
            onClick={() => handleEdit(params.row.id)}
          >
          </EditIcon>
          <DeleteForeverIcon
            color='secondary'
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
        <Box component='main' sx={{ flexGrow: 1, p: 3, justifyContent: 'center', paddingTop: '75px' }}>
          <div style={{ height: 750, width: '100%' }}>
            <Button color= 'secondary' variant='contained' onClick={handleOpen}>Add Product</Button>
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
            margin='dense'
            label='Product Name'
            type='text'
            name='productName'
            fullWidth
            value={selectedProductForEdit?.productName || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin='dense'
            label='Category'
            type='text'
            name='category'
            fullWidth
            value={selectedProductForEdit?.category || ''}
            onChange={handleInputChange}
          />
            <TextField
            margin='dense'
            label='Stock'
            type='text'
            name='stock'
            fullWidth
            value={selectedProductForEdit?.stock || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin='dense'
            label='Description'
            type='text'
            name='description'
            fullWidth
            value={selectedProductForEdit?.description || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin='dense'
            label='Benefits'
            type='text'
            name='benefits'
            fullWidth
            value={selectedProductForEdit?.benefits || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin='dense'
            label='Image URL'
            type='text'
            name='imageUrl'
            fullWidth
            value={selectedProductForEdit?.imageUrl || ''}
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
