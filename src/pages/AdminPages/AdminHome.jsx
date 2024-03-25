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

const columns = [
    { id: 'name',align: 'center', label: 'Product name', minWidth: 170 },
    { id: 'code',align: 'center', label: 'Quantity', minWidth: 100 },
    {
      id: 'population',
      label: 'Store Name',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
  ];

  const columns1 = [
    { id: 'name',align: 'center', label: 'Name', minWidth: 170 },
    { id: 'code',align: 'center', label: 'Email', minWidth: 100 },
    {
      id: 'population',
      label: 'Message',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
  ];

const AdminHome = () => {
  //1
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    //2
    const [page1, setPage1] = useState(0);
    const [rowsPerPage1, setRowsPerPage1] = useState(5);
    const handleChangePage1 = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage1 = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };


    const [review , setReview] = useState();
    const [lowStock, setLowStock] = useState();

    useEffect(()=>{
        axios.get("low-stock")
        .then((data)=>{
          setLowStock(data.data)
        })
    },[])

    useEffect(()=>{
      axios.get("contact-admin")
      .then((data) => {
        setReview(data.data)
      })
    },[])

    console.log("Reviews", review)

    
  return (
    <>
      <Grid container sx={{margin:"10% 0"}}>
        <Grid sx={{height:'100%'}} item md={3}>
            <AdminSideBar/>
        </Grid>
        <Grid item md={9}>
        <Typography sx={{marginBottom:3}} variant='h5' fontWeight={700} textAlign={'center'}>Low in Stock</Typography>
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
            {lowStock?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        <TableCell align='center'>
                          {row.product_name}
                        </TableCell>
                        <TableCell align='center'>
                          {row.quantity}
                        </TableCell>
                        <TableCell align='center'>
                          {row.store_name}
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
        count={lowStock?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
        </Paper>
        <Typography sx={{marginBottom:3, marginTop:3}} variant='h5' fontWeight={700} textAlign={'center'}>Customer reviews</Typography>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns1.map((column) => (
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
            {review?.slice(page1 * rowsPerPage1, page1 * rowsPerPage1 + rowsPerPage1)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        <TableCell align='center'>
                          {row.name}
                        </TableCell>
                        <TableCell align='center'>
                          {row.email}
                        </TableCell>
                        <TableCell align='center'>
                          {row.message}
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
        count={review?.length}
        rowsPerPage={rowsPerPage1}
        page={page1}
        onPageChange={handleChangePage1}
        onRowsPerPageChange={handleChangeRowsPerPage1}
      />
        </Paper>
        </Grid>
    </Grid>
    </>
  );
};

export default AdminHome;
