import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import Cart from './CartTwo';


const Checkout = ({ productsInCart }) => { 
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your logic to process the order
    console.log('Order placed with card details:', { cardNumber, expiryDate, cvv });
    // Reset the form after submission
    setCardNumber('');
    setExpiryDate('');
    setCVV('');
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
    
    {/*<div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
  <Cart carttwo={productsInCart} /> */}
      

      <Typography variant="h5" align="center" gutterBottom style={{ marginTop: '50px' }}>
        Checkout
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Card Number"
          fullWidth
          variant="outlined"
          value={cardNumber}
          onChange={handleCardNumberChange}
          style={{ marginBottom: '20px', borderColor: 'green' }}
        />
        <TextField
          label="Expiry Date (MM/YY)"
          fullWidth
          variant="outlined"
          value={expiryDate}
          onChange={handleExpiryDateChange}
          style={{ marginBottom: '20px', borderColor: 'green' }} 
        />
        <TextField
          label="CVV"
          fullWidth
          variant="outlined"
          value={cvv}
          onChange={handleCVVChange}
          style={{ marginBottom: '20px', borderColor: 'green'}} 
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          style={{ marginBottom: '20px', borderColor: 'green' }} 
          href='/success'
        >
          Place Order
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
