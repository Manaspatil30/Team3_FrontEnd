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
import { Box, Grid, MenuItem, Select, TextField } from '@mui/material';
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
  };

const columns = [
    { id: 'name', label: 'Product Name', minWidth: 170 },
    { id: 'code', label: 'Category', minWidth: 100 },
    {
      id: 'population',
      label: 'Stock',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Description',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Store',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
  ];

const AdminProducts = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [adminProds, setAdminProds] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [pName, setPname] = useState();
  const [pStore, setpStore] = useState();
  const [pCategory, setpCategory] = useState();
  const [pQuantity, setpQuantity] = useState();
  const [pDesc, setpDesc] = useState();
  const [pPrice, setpPrice] = useState();

  const [imgStore, setimgStore] = useState();
  const [imgProd, setimgProd] = useState();

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - adminProds?.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const checkStore = (store) => {
    if(store == 1){
      return "Tesco"
    }
    if(store == 2){
      return "Aldi"
    }
    if (store == 3){
      return "Lidl"
    }
  }

  

  useEffect(()=>{
    axios.get("adminproducts", Cookies.get("user_id")).then((data) => {setAdminProds(data.data)})
  },[])
  console.log("adminProds", adminProds)



  const productDetail = { 
    "product_name" : pName, 
    "description" : pDesc, 
    "category" : pCategory, 
    "quantity" : pQuantity, 
    "store_id" : pStore, 
    "price" : pPrice
    }

    const prodImgData = {
        "store" : imgStore, 
        "product_id" : imgProd, 
        "file_url" : selectedFile
    }

    console.log("img data", prodImgData)

    const handleProductChange = (event) => {
        const selectedItem = event.target.value;
    setimgProd(selectedItem.product_id); // Assuming product_id is the property name for product id
    setimgStore(selectedItem.store_id);
      };

      const handleUploadimg = () => {
        // Check if a file is selected
        if (!selectedFile) {
          alert('Please select a file.');
          return;
        }
      
        // Convert the file to a base64-encoded string
        const fileReader = new FileReader();
        fileReader.readAsDataURL(selectedFile);
        fileReader.onload = () => {
          const base64EncodedFile = fileReader.result.split(',')[1];
          const prodImgData = {
            "store": imgStore,
            "product_id": imgProd,
            "file_url": base64EncodedFile
          };
      
          axios.post("uploadin", prodImgData)
            .then(toast.success("Image added successfully"))
            .catch((err) => {
              toast.error("Failed to upload image");
              console.error(err);
            });
        };
      
        fileReader.onerror = (error) => {
          console.error('Error reading file:', error);
        };
      };
    
      const handleFileChange = (event) => {
        // Get the selected file
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log("file data", selectedFile)
      };

  const addProduct = () => {
    axios.post("product/add", productDetail)
    .then(()=>{toast.success("Product added successfully")})
    .then(()=>{handleClose()})
  };

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
            {adminProds?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        <TableCell align='center'>
                          {row.product_name}
                        </TableCell>
                        <TableCell align='center'>
                          {row.category}
                        </TableCell>
                        <TableCell align='center'>
                          {row.quantity}
                        </TableCell>
                        <TableCell align='center'>
                          {row.description}
                        </TableCell>
                        <TableCell align='center'>
                          {row.store_id}
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
        count={adminProds?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    <Button variant='contained' onClick={handleOpen}>Add Product</Button>
    <Button variant='contained' onClick={handleOpen1}>Add Product Image</Button>
        </Grid>
    </Grid>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField
            autoFocus
            margin='dense'
            label='Product Name'
            type='text'
            name='productName'
            fullWidth
            onChange={(e)=>{setPname(e.target.value)}}
            // value={selectedProductForEdit?.productName || ''}
          />
          <Select
          label="Store"
          onChange={(e)=>{setpStore(e.target.value)}}
          fullWidth
        >
          <MenuItem value={1}>Tesco</MenuItem>
          <MenuItem value={2}>Aldi</MenuItem>
          <MenuItem value={3}>Lidl</MenuItem>
        </Select>
          
          <Select
          label="Category"
          onChange={(e)=>{setpCategory(e.target.value)}}
          fullWidth
        >
          <MenuItem value={"Fruits"}>Fruits</MenuItem>
          <MenuItem value={"Dairy"}>Dairy</MenuItem>
          <MenuItem value={"Vegetables"}>Vegetables</MenuItem>
          <MenuItem value={"Bakery"}>Bakery</MenuItem>
          <MenuItem value={"Meat"}>Meat</MenuItem>
        </Select>
            <TextField
            margin='dense'
            label='Quantity'
            type='text'
            name='stock'
            fullWidth
            onChange={(e)=>{setpQuantity(e.target.value)}}
            // value={selectedProductForEdit?.stock || ''}
          />
          <TextField
            margin='dense'
            label='Description'
            type='text'
            name='description'
            fullWidth
            onChange={(e)=>{setpDesc(e.target.value)}}
            // value={selectedProductForEdit?.description || ''}
          />
          <TextField
            margin='dense'
            label='Price'
            type='text'
            name='benefits'
            fullWidth
            onChange={(e)=>{setpPrice(e.target.value)}}
            // value={selectedProductForEdit?.benefits || ''}
          />
          <Button variant='contained' sx={{textDecoration:'none'}} onClick={addProduct}> Add </Button>
          {/* <span style={{margin:'50px', paddingRight:'10px'}}>
            Upload Product Image
            </span>
            <input type="file" onChange={handleFileChange} style={{color:'red',}}/>
            <button onClick={handleUpload}>Upload</button> */}
        </Box>
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Select
          label="Products"
          onChange={handleProductChange}
          fullWidth
        >
            {adminProds?.map((item)=>{
                return(
                    <MenuItem value={item}>{checkStore(item.store_id)} {item.product_name}</MenuItem>
                )
            })}
        </Select>
          
          <span style={{margin:'50px', paddingRight:'10px'}}>
            Upload Product Image
            </span>
            <input type="file" onChange={handleFileChange} style={{color:'red',}}/>
            <button onClick={handleUploadimg}>Upload</button>
        </Box>
      </Modal>
    </>
  )
}

export default AdminProducts