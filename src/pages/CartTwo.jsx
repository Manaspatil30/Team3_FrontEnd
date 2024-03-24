import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, IconButton, Grid, Box } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const [basketData, setBasketData] = useState();
  const [price, setPrice] = useState();

  // const handleQuantityChange = (id, increment) => {
  //   const updatedCart = cart.map(item => {
  //     if (item.id === id) {
  //       let newQuantity = item.quantity + (increment ? 1 : -1);
  //       if (newQuantity < 0) newQuantity = 0;
  //       return { ...item, quantity: newQuantity };
  //     }
  //     return item;
  //   });
  //   setCart(updatedCart);
  // };

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

  // const getTotalPrice = () => {
  //   return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  // };

  useEffect(() => {
    axios.get('basket/' + Cookies.get('user_id'))
    .then((data) => {setBasketData(data.data)})
    .catch((err) => {})
  },[])
  console.log(basketData);

  const deleteProduct = (userId, productId, quantityToRemove, storeId) => {
    axios.post(`basket/remove`, {
      userId,
      productId,
      quantityToRemove,
      storeId
    })
    .then(() => {
      alert('Delete successful');
    })
  }

// const totalPrice = () => {
//   basketData?.map((item) => {
//     setPrice(price + item.total_price)
//   })
// }

const totalPrice = basketData?.reduce((total, item) => total + item.total_price, 0);

// useEffect(()=>{
// totalPrice()
// },[])

console.log("Price", price)

  return (
    <Box sx={{margin:'10% 5%'}}>
      <Typography variant='h6' align='center' style={{marginBottom: '20px'}}>
        Your Shopping Cart
      </Typography>
      <TableContainer component={Paper} style={{ backgroundColor: 'transparent' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price (£)</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basketData?.map(item => (
              <TableRow key={item.product_id}>
                <TableCell>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                    </Grid>
                    <Grid item>
                      {checkStore(item.store_id)} {item.product_name}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Typography variant="body1">{item.quantity}</Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>{item.total_price}</TableCell>
                <TableCell><IconButton onClick={(e) => {e.preventDefault(); deleteProduct(Cookies.get("user_id"),item.product_id, item.quantity,item.store_id)}} ><DeleteIcon/></IconButton></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container justifyContent="space-between" style={{ margin: '5px', marginTop: '10px' }}>
        <Typography variant="h5">
          Total: £{totalPrice?.toFixed(2)}
        </Typography>
        <Button variant="contained" style={{ backgroundColor: 'green', color: 'white', fontSize: '1.2rem'}}>
          <Link to="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}>
            Checkout
          </Link>
        </Button>
      </Grid>
    </Box>
  );
};

export default Cart;
