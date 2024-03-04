import React from 'react';
import img from '../images/tomato.png';
import {  Grid, Divider, Container, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  {FaCcMastercard}  from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";

const ProductPage = () => {
  return (
    <Container maxWidth="lg" style={{ paddingTop: '30px', paddingLeft: '75px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="500"
              image={img} 
              alt=""
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card style={{ paddingLeft: '50px', border: 'none', boxShadow: 'none' }}>
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
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6}>
            <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    Product Name 2
                  </Typography>
                  <CardMedia
                    component="img"
                    height="150"
                    image={img}
                    alt=""
                  />
                  <Typography variant="body2" color="text.secondary" gutterBottom>
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
              <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    Product Name 3
                  </Typography>
                  <CardMedia
                    component="img"
                    height="150"
                    image={img}
                    alt=""
                  />
                  <Typography variant="body2" color="text.secondary" gutterBottom>
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
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom style={{ paddingBottom: '15px' , fontWeight: 'bold' }}>
                Benefits
              </Typography>
              <ul>
                <li style={{ paddingBottom: '15px' }}>Rich source of essential vitamins and minerals including A, C, and K, as well as folate and potassium.</li>
                <li style={{ paddingBottom: '15px' }}>High antioxidant content, notably lycopene, reduces the risk of chronic diseases such as heart disease and cancer.</li>
                <li style={{ paddingBottom: '15px' }}>Supports immune function, vision, and bone health due to its nutrient profile.</li>
                <li style={{ paddingBottom: '15px' }}>Versatile ingredient in cooking, can be enjoyed raw, cooked, or juiced, adding flavor and nutrition to various dishes.</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
          <CardContent>
              <Typography variant="h5" gutterBottom style={{ paddingBottom: '15px' , fontWeight: 'bold' }}>
                Product Information 
              </Typography>
                <Typography variant="body1" style={{ paddingBottom: '15px' ,whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                  <span style={{ fontWeight: 'bold' }}>{"AN Code:"}</span> {"13423"}
                </Typography>
                <Typography variant="body1" style={{ paddingBottom: '15px' ,whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                  <span style={{ fontWeight: 'bold' }}>{"Country of Origin:"}</span> {"UK"}
                </Typography>
                <Typography variant="body1" style={{ paddingBottom: '15px' ,whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                  <span style={{ fontWeight: 'bold' }}>{"Manifacturing Details: "}</span> {"Tomatoes are grown in warm climates, harvested, sorted, washed, and blanched. They're crushed, heated, and strained to extract juice or pulp before packaging for distribution "}
                </Typography>
                <Typography variant="body1" style={{ paddingBottom: '15px' ,whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                  <span style={{ fontWeight: 'bold' }}>{"Customer Care No:"}</span> {"1-3423-313-21"}
                </Typography>
                <Typography variant="body1" style={{ paddingBottom: '15px' ,whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                  <span style={{ fontWeight: 'bold' }}>{"Disclaimer:"}</span> {"The information provided about tomatoes is for general informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding your health or a medical condition."}
                </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductPage;

