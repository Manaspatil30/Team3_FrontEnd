import React from 'react';
import AdminSideBar from '../../components/AdminSideBar';
import AdminTopBar from '../../components/AdminTopBar';
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
  { field: 'id', headerName: 'ProductID', width: 120 },
  { field: 'productName', headerName: 'Product Name', width: 200,editable: true   },
  { field: 'category', headerName: 'Category', width: 150 ,editable: true  },
  { field: 'description', headerName: 'Description', width: 200,editable: true   },
  { field: 'benefits', headerName: 'Benefits', width: 250 ,editable: true  },
  { field: 'imageUrl', headerName: 'Image URL', width: 300 ,editable: true  },
];

const productData = [
  { id: 1, productName: 'Tomato', category: 'Vegi', description: 'ASDNJASBDJ', benefits: 'ASDBAJHSBVDAHJD', imageUrl: 'ASDJABSJDAJDS.JPG' }
  
];

const Products = () =>{
  const [products, setProducts] = useState(productData);
  const [open, setOpen] = useState(false);
  const [newProductData, setNewProductData] = useState({ productName: '', category: '', description: '', benefits: '', imageUrl: '' });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    const newProduct = { ...newProductData, id: products.length + 1 };
    setProducts([...products, newProduct]);
    handleClose();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProductData({ ...newProductData, [name]: value });
  };

  return (
    <>
      <AdminTopBar />
      <Box sx={{ display: 'flex' }}>
        <AdminSideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, justifyContent: 'center', paddingTop: '75px' }}>
          <div style={{ height: 500, width: '100%' }}>
            <Button variant="contained" onClick={handleOpen}>Add Product</Button>
            <DataGrid
              rows={products}
              columns={columns}
              pageSize={5}
              checkboxSelection
            />
          </div>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Product Name"
            type="text"
            name="productName"
            fullWidth
            value={newProductData.productName}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Category"
            type="text"
            name="category"
            fullWidth
            value={newProductData.category}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            name="description"
            fullWidth
            value={newProductData.description}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Benefits"
            type="text"
            name="benefits"
            fullWidth
            value={newProductData.benefits}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Image URL"
            type="text"
            name="imageUrl"
            fullWidth
            value={newProductData.imageUrl}
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
export default Products