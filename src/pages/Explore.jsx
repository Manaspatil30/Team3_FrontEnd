import { Container, Box, Grid } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

const Explore = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get('products').then((data) => setProducts(data.data))
  },[])

  console.log(products);
  return (
    <>
    <Container maxWidth='xl' >
      <Grid container spacing={4} mt={4} mb={4}>
    {
      products?.map((item) => {
        return(
          <Grid item key={item.product_id} md={4}>
            <ProductCard id={item.product_id} heading = {item.product_name} description = {item.description}/>
          </Grid>
        )
      })
    }
      </Grid>
      
      
    </Container>
    </>
  )
}

export default Explore