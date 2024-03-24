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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [adminProds, setAdminProds] = useState();

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

  useEffect(()=>{
    axios.get("adminproducts", Cookies.get("user_id")).then((data) => {setAdminProds(data.data)})
  },[])
  console.log("adminProds", adminProds)

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
            // value={selectedProductForEdit?.productName || ''}
          />
          <TextField
            margin='dense'
            label='Category'
            type='text'
            name='category'
            fullWidth
            // value={selectedProductForEdit?.category || ''}
          />
            <TextField
            margin='dense'
            label='Stock'
            type='text'
            name='stock'
            fullWidth
            // value={selectedProductForEdit?.stock || ''}
          />
          <TextField
            margin='dense'
            label='Description'
            type='text'
            name='description'
            fullWidth
            // value={selectedProductForEdit?.description || ''}
          />
          <TextField
            margin='dense'
            label='Benefits'
            type='text'
            name='benefits'
            fullWidth
            // value={selectedProductForEdit?.benefits || ''}
          />
          <span style={{margin:'50px', paddingRight:'10px'}}>Upload Product Image</span><input type="file" style={{color:'red',}}/>
        </Box>
      </Modal>
    </>
  )
}

export default AdminProducts