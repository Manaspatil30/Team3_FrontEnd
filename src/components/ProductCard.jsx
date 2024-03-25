import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, IconButton, TextField } from '@mui/material';
import grocery from "../images/grocery.jpeg"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from 'axios';
import Cookies from 'js-cookie';


const ProductCard = (props) => {
    const [quantity, setQuantity] = useState(1);

    const data = {
      "userId" : Cookies.get("user_id"),
        "product_id" : props.id,
        "quantity" : quantity,
        "storeId" : props.storeId
    }

    const addToBasket = () => {
        axios.post(`basket/add`, data).then(()=>{alert('Product Added to Basket')}).then(()=>{window.location.reload()})
    }

    return (
        <Card sx={{ maxWidth: 345, marginTop:5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={grocery}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.heading}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          {quantity <= 0 ? 
            <IconButton aria-label="delete" disabled >
                <AddShoppingCartIcon />
            </IconButton>
            :
            <IconButton aria-label="delete" onClick={addToBasket}  >
                <AddShoppingCartIcon />
            </IconButton>
          }
            <TextField label='Quantity' type='number' defaultValue={1} sx={{width:'22%'}} onChange={(e)=>{setQuantity(e.target.value)}}/>
        </Card>
      );
}

export default ProductCard