import React, { useEffect, useState } from 'react';
import img from '../images/tomato.png';
import {  Grid, Card, CardMedia,CardContent,Typography,Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';
import { withParam } from '../utils/Router.Helper';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
// import  {FaCcMastercard}  from "react-icons/fa";
// import { FaCcVisa } from "react-icons/fa6";


const ProductDetailsCard = (props) => {
  const [productDetail , setProductDetail] = useState();
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const [quantity3, setQuantity3] = useState(1);

  //1
  const addQuantity1 = (event) => {
    event.preventDefault();
    setQuantity1(quantity1 + 1)
  }

  const delQuantity1 = (event) => {
    if(quantity1 == 1){
      event.preventDefault();
    }else{
        event.preventDefault();
        setQuantity1(quantity1 - 1)
    }
  }

  //2
  const addQuantity2 = (event) => {
    event.preventDefault();
    setQuantity2(quantity2 + 1)
  }

  const delQuantity2 = (event) => {
    if(quantity2 == 1){
      event.preventDefault();
    }else{
        event.preventDefault();
        setQuantity2(quantity2 - 1)
    }
  }

  //3
  const addQuantity3 = (event) => {
    event.preventDefault();
    setQuantity3(quantity3 + 1)
  }

  const delQuantity3 = (event) => {
    if(quantity3 == 1){
      event.preventDefault();
    }else{
        event.preventDefault();
        setQuantity3(quantity3 - 1)
    }
  }

  const data1 = {
    "userId" : Cookies.get("user_id"),
    "quantity" : quantity1
  }

  const data2 = {
    "userId" : Cookies.get("user_id"),
    "quantity" : quantity2
  }

  const data3 = {
    "userId" : Cookies.get("user_id"),
    "quantity" : quantity3
  }

  const addToBasket1 = (store) => {
    axios
      .post(`basket/add/${props.params.id}/${store}`, data1)
      .then(() => {
        toast.success("Product Added Successfully");
      })
      .catch((err) => {
        toast.error("Error! Try Again");
      });
  };

  const addToBasket2 = (store) => { 
    axios
      .post(`basket/add/${props.params.id}/${store}`, data2)
      .then(() => {
        toast.success("Product Added Successfully");
      })
      .catch((err) => {
        toast.error("Error! Try Again");
      });
  };

  const addToBasket3 = (store) => {
    axios
      .post(`basket/add/${props.params.id}/${store}`, data3)
      .then(() => {
        toast.success("Product Added Successfully");
      })
      .catch((err) => {
        toast.error("Error! Try Again");
      });
  };

  useEffect(()=>{
    axios.get("/productWithStores/"+props.params.id)
    .then((data)=>{
      setProductDetail(data.data)
    })
  },[])
  console.log(productDetail)
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
              {productDetail ? productDetail[0].storeName : ""} {productDetail ? productDetail[0].productname : ""}
              </Typography>
              <Typography variant="body1" color="text.secondary" style={{ paddingBottom: '10px'}}>
                {productDetail ? productDetail[0].description : ""}
              </Typography>
              <Typography variant="h4" color="black" gutterBottom style={{ fontWeight: 'bold' }}>
                Price: £{productDetail ? productDetail[0].price : ""}
              </Typography>
              <Typography variant="body1" color="text.secondary">
              {/* <span   >{<FaCcMastercard size={50}/>}</span><FaCcVisa size={50} /> */}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom style={{ paddingBottom: '45px'}}>
                Availability: {productDetail ? productDetail[0].quantity > 0 ? <>In stock</> : <>Out of Stock</> : ""}
              </Typography>
              <Button 
              style={{ backgroundColor: 'green' , textTransform: 'none'}}
              variant="contained" 
              color="primary" size="large" 
              endIcon={<ShoppingCartIcon />}
              onClick={(e)=>{e.preventDefault(); addToBasket1(productDetail ? productDetail[0].store_id : "")}}
              >
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
                  {productDetail ? productDetail[1].storeName : ""} {productDetail ? productDetail[1].productname : ""}
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
                  Price: £{productDetail ? productDetail[1].price : ""}
                  </Typography>
                  <Button
                    style={{ backgroundColor: 'green' ,textTransform: 'none'}}
                    variant="contained"
                    color="primary"
                    size="small"
                    endIcon={<ShoppingCartIcon size={20} />}
                    onClick={(e)=>{e.preventDefault(); addToBasket2(productDetail ? productDetail[1].store_id : "")}}
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
                  {productDetail ? productDetail[2].storeName : ""} {productDetail ? productDetail[2].productname : ""}
                  {/* {checkStore(productDetail ? productDetail[2].store_id : "")} */}
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
                    Price: £{productDetail ? productDetail[2].price : ""}
                  </Typography>
                  <Button
                    style={{ backgroundColor: 'green', textTransform: 'none'}}
                    variant="contained"
                    color="primary"
                    size="small"
                    endIcon={<ShoppingCartIcon size={20} />}
                    onClick={(e)=>{e.preventDefault(); addToBasket3(productDetail ? productDetail[2].store_id : "")}}
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

export default withParam(ProductDetailsCard)