import React from 'react';

import ProductDetailsCard from '../components/ProductDetailsCard';
import ProductBenefits from '../components/ProductBenefits';
import { Container, Divider } from "@mui/material";
import SimilarProducts from '../components/SimilarProducts';
import { withParam } from '../utils/Router.Helper';

const ProductPage = (props) => {
  console.log("Product params", props.params)
  return (
    <Container maxWidth="xl" style={{ paddingTop: '30px', paddingLeft: '75px' }}>
      <ProductDetailsCard></ProductDetailsCard>
      <Divider style={{ paddingBottom: '100px'}}></Divider>
      <ProductBenefits></ProductBenefits>
      <SimilarProducts></SimilarProducts>
    </Container>
  );
}

export default withParam(ProductPage);


