{/*import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Container, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Cookies from 'js-cookie';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const Cart = () => {
    const [basketData, setBasketData] = useState();

    useEffect(() => {
        axios.get('basket/' + Cookies.get('user_id'))
        .then((data) => {setBasketData(data.data)})
        .catch((err) => {})
    },[])

    const deleteProduct = (product_id) => {
        axios.delete(`basket/${product_id}`).then(()=>{alert('Delete successfull')}).then(()=>{window.location.reload()})
    }


    console.log('basket data' , basketData)
    {/* @ts-ignore */}
    console.log('123', basketData?.product_id)
  return (
    <Container maxWidth={'xl'}>
    <TableContainer sx={{marginBottom : '10%', marginTop: '10%'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'700'}}>Product</TableCell>
            <TableCell sx={{fontWeight:'700'}} align="right">Description</TableCell>
            <TableCell sx={{fontWeight:'700'}} align="right">Price</TableCell>
            <TableCell sx={{fontWeight:'700'}} align="right">Quantity</TableCell>
            <TableCell sx={{fontWeight:'700'}} align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* @ts-ignore */}
          {basketData?.map((row) => (
            <TableRow
              key={row.basket_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product_name}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right"><IconButton onClick={(e) => {e.preventDefault(); deleteProduct(row.product_id)}} ><DeleteIcon/></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Box textAlign={'center'} marginBottom={5}>
    <Button variant='contained'>
        Checkout
    </Button>
    </Box>
    </Container>
  )
}

export default Cart

*/}