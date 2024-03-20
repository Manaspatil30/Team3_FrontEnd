import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, IconButton, Grid } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Aldi Basmati Rice', image: 'https://i.imgur.com/6oPzE4c.jpeg', price: 10 },
  { id: 2, name: 'Lidl Basmati Rice', image: 'https://i.imgur.com/yIy54w6.jpeg', price: 10 },
  { id: 3, name: 'Tesco Basmati Rice', image: 'https://i.imgur.com/MK9Tmso.jpeg', price: 10 },
];

const Cart = ({carttwo}) => {
  const [cart, setCart] = useState(products.map(product => ({ ...product, quantity: 0 })));

  const handleQuantityChange = (id, increment) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        let newQuantity = item.quantity + (increment ? 1 : -1);
        if (newQuantity < 0) newQuantity = 0;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                    </Grid>
                    <Grid item>
                      {item.name}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Grid container alignItems="center">
                    <Grid item>
                      <IconButton onClick={() => handleQuantityChange(item.id, false)} size="small">
                        <RemoveIcon />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">{item.quantity}</Typography>
                    </Grid>
                    <Grid item>
                      <IconButton onClick={() => handleQuantityChange(item.id, true)} size="small">
                        <AddIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>{(item.price * item.quantity).toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container justifyContent="space-between" style={{ margin: '5px', marginTop: '10px' }}>
        <Typography variant="h5">
          Total: £{getTotalPrice().toFixed(2)}
        </Typography>
        <Button variant="contained" style={{ backgroundColor: 'green', color: 'white', fontSize: '1.2rem'}}>
          <Link to="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}>
            Checkout
          </Link>
        </Button>
      </Grid>
    </div>
  );
};

export default Cart;
