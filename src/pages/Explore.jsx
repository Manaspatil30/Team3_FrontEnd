import { Container, Box, Grid } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import ExploreProductCard from '../components/ExploreProductCard';

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
        <Grid md={3}>
          <Filters/>
        </Grid>
        <Grid sx={{maxWidth: '1200px', margin: 'auto'}} container md={9}>
        {
      products?.map((item) => {
        return(
          <Grid item key={item.product_id} xs={12} sm={6} md={4}>
            {/* <ProductCard id={item.product_id} heading = {item.product_name} description = {item.description}/> */}
            <ExploreProductCard id={item.product_id} name={item.product_name} desc={item.description} category={item.category}/>
          </Grid>
        )
      })
    }
        </Grid>
      </Grid>
      
      
    </Container>
    </>
  )
}

export default Explore