import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, IconButton, Grid, Box, TextField } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '1px solid #e9e9e9',
  p: 4,
  borderRadius :'15px'
};

const Cart = () => {
  const [basketData, setBasketData] = useState();
  const [orders, setOrders] = useState();
  const [price, setPrice] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

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
    .then(()=>{window.location.reload()})
  }


const totalPrice = basketData?.reduce((total, item) => total + item.total_price, 0);

console.log("Price", price)

//checkout


  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  const orderData = {
    "userId": Cookies.get("user_id"),
    "orderStatus": "Completed",
    "deliveryAddress": "1234 Main St, Anytown, AN 12345",
    "orderItems": 
      basketData?.map((item) => {
        return(
          {
            "storeProductId": item.product_id,
            "quantity": item.quantity,
            "storeId": item.store_id
          }
        )
      })
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your logic to process the order
    axios.post("orders/createe", orderData)
    .then(()=>{axios.delete("basket/"+ Cookies.get("user_id"))})
    .then(toast.success("Order Placed!"))
    .then(()=>{navigate('/success')})
    .catch((err)=>{toast.error("Error")})
    // console.log('Order placed with card details:', { cardNumber, expiryDate, cvv });

    // Reset the form after submission
    setCardNumber('');
    setExpiryDate('');
    setCVV('');
  };

  //get orders
  useEffect(()=>{
    axios.get("orders/by-user/" + Cookies.get("user_id"))
    .then((data)=>{setOrders(data.data)})
  },[])
  console.log("Orders", orders)
  return (
    <>
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
        <Button disabled={basketData?.length == 0} variant="contained" onClick={handleOpen} style={{ backgroundColor: 'green', color: 'white', fontSize: '1.2rem'}}>
          {/* <Link to="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}> */}
            Checkout
          {/* </Link> */}
        </Button>
      </Grid>
    </Box>
    <Box sx={{margin:'10% 5%'}}>
      <Typography variant='h6' align='center' style={{marginBottom: '20px'}}>
        Your Orders
      </Typography>
      <TableContainer component={Paper} style={{ backgroundColor: 'transparent' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  {orders?.map(order => (
    <TableRow key={order.orderId}>
      <TableCell>
        {order.orderDetails.map((detail, index) => (
          <span key={index}>
            {detail.productName}
            {index < order.orderDetails.length - 1 && ', '}
          </span>
        ))}
      </TableCell>
      <TableCell>
        {order.orderDetails.map((detail, index) => (
          <span key={index}>
            {detail.quantity}
            {index < order.orderDetails.length - 1 && ', '}
          </span>
        ))}
      </TableCell>
      <TableCell>
        {
          order.status == 'Returned' ? 
          <Button variant='contained' disabled> Returned </Button>
          :
        <Button variant='contained' 
          onClick={()=>{
            axios.post("orders/return" , {"orderId" : order.orderId})
            .then(toast.success("Product returned"))
            .then(()=>{window.location.reload()})
          }}>Return</Button>
        }
      </TableCell>
    </TableRow>
  ))}
</TableBody>
        </Table>
      </TableContainer>
      <Grid container justifyContent="space-between" style={{ margin: '5px', marginTop: '10px' }}>
      </Grid>
    </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography variant="h5" align="center" gutterBottom style={{ marginTop: '50px' }}>
        Checkout
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Card Number"
          fullWidth
          variant="outlined"
          value={cardNumber}
          error={cardNumber}
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
          onClick={handleSubmit}
        >
          Place Order
        </Button>
      </form>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;


{/* <TableBody>
            {orders?.map(item => (
              <TableRow key={item.product_id}>
                <TableCell>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                    </Grid>
                    <Grid item>
                      {item.orderDetails?.map((item)=>{return(item.product_name)})}
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
                <TableCell><Button variant='contained'>Return</Button></TableCell>
              </TableRow>
            ))}
          </TableBody> */}