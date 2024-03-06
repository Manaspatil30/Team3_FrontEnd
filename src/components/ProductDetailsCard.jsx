import React from 'react';
import img from '../images/tomato.png';
import {  Grid, Card, CardMedia,CardContent,Typography,Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  {FaCcMastercard}  from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";


const ProductDetailsCard = () => {
  return (
    <Card variant="outlined" style={{ border: 'none' , boxShadow: 'none'}}>
      <Grid container spacing={3} sx={{ paddingLeft: '10%' , paddingTop: '2%' }}>
        <Grid item xs={12} md={6}>
          <div style={{ width: '100%', paddingTop: '100%', position: 'relative'}}>
            <CardMedia
              component="img"
              
              style={{ position: 'absolute', top: 10, width: '100%', height: '100%', objectFit: 'contain' }}
              image={img} 
              alt=""
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} >
          <Card style={{  border: 'none', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h3" color='black' gutterBottom style={{ fontWeight: 'bold' }}>
                Tomato
              </Typography>
              <Typography variant="body1" color="text.secondary" style={{ paddingBottom: '10px'}}>
                5 KG ALDI TOMATO
              </Typography>
              <Typography variant="h4" color="black" gutterBottom style={{ fontWeight: 'bold' }}>
                Price: £2.99
              </Typography>
              <Typography variant="body1" color="text.secondary">
              <span   >{<FaCcMastercard size={50}/>}</span><FaCcVisa size={50} />
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom style={{ paddingBottom: '45px'}}>
                Availability: In Stock
              </Typography>
              <Button 
              style={{ backgroundColor: 'green' , textTransform: 'none'}}
              variant="contained" 
              color="primary" size="large" 
              endIcon={<ShoppingCartIcon />}>
                Add to cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6}>
            <Card style={{ marginBottom:'10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    Product Name 2
                  </Typography>
                  <div style={{ width: '100%', paddingTop: '100%', position: 'relative'}}>
                    <CardMedia
                    component="img"
              
                    style={{ position: 'absolute', top: 10, width: '100%', height: '100%', objectFit: 'contain' }}
                    image={img} 
                    alt=""
                    />
                  </div>
                  <Typography variant="body2"  gutterBottom style={{ paddingTop:'10px',  color: 'text.secondary' }}>
                  Price: £3.59
                  </Typography>
                  <Button
                    style={{ backgroundColor: 'green' ,textTransform: 'none'}}
                    variant="contained"
                    color="primary"
                    size="small"
                    endIcon={<ShoppingCartIcon size={20} />}
                  >
                    Add to cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Card style={{ marginBottom:'10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    Product Name 3
                  </Typography>
                  <div style={{ width: '100%', paddingTop: '100%', position: 'relative'}}>
                    <CardMedia
                    component="img"
              
                    style={{ position: 'absolute', top: 10, width: '100%', height: '100%', objectFit: 'contain' }}
                    image={img} 
                    alt=""
                    />
                  </div>
                  <Typography variant="body2" gutterBottom style={{ paddingTop:'10px',  color: 'text.secondary' }}>
                    Price: £3.99
                  </Typography>
                  <Button
                    style={{ backgroundColor: 'green', textTransform: 'none'}}
                    variant="contained"
                    color="primary"
                    size="small"
                    endIcon={<ShoppingCartIcon size={20} />}
                  >
                    Add to cart
                  </Button >
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
    </Card>
        
  )
}

export default ProductDetailsCard