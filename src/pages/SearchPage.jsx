import React, { useEffect, useState } from 'react'
import { withParam } from '../utils/Router.Helper'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Box, Container, Grid, Typography } from '@mui/material';
import ExploreProductCard from '../components/ExploreProductCard';


const SearchPage = (props) => {
    const [searchResult, setSearchResult] = useState();

    useEffect(()=>{
        axios.get("products/search?search="+props.params.value)
        .then((data) => {
            setSearchResult(data.data)
            console.log("SearchResult", data.data)
        })
        .catch((err) => {
            toast.error("Could not search Products")
        })
    },[])

    const imgUrl = (item) => {
      if(item.store_id == 1){
        return(item.image_url_tesco)
      }
      if(item.store_id == 2){
        return(item.image_url_aldi)
      }
      if(item.store_id == 3){
        return(item.image_url_lidl)
      }
    }
    
  return (
    <Container maxWidth="xl">
        <Box mt={5}>
        {/* @ts-ignore */}
        {searchResult?.length > 0 ?
        <Grid sx={{maxWidth: '1200px', margin: 'auto'}} container md={9}>
            {
              // @ts-ignore
                 searchResult?.map((item) => {
                    return (
                      <Grid item key={item.product_id} xs={12} sm={6} md={4}>
                        {/* <ProductCard id={item.product_id} heading = {item.product_name} description = {item.description}/> */}
                        <ExploreProductCard
                          id={item.product_id}
                          name={item.product_name}
                          desc={item.description}
                          category={item.category}
                          store_id = {item.store_id}
                          price = {item.price}
                          img = {imgUrl(item)}
                        />
                      </Grid>
                    );
                }) 
            }
        </Grid>
        :
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Typography variant='h2' textAlign={'center'}> No Search Results</Typography>
        </Box>}
        </Box>
    </Container>
  )
}

export default withParam(SearchPage)