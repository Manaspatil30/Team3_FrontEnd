import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import "../styles/home.css";
import SlickSlider from "../components/SlickSlider";
import AddSlider from "../components/AddSlider";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Container sx={{overflow:'hidden'}} maxWidth={"xl"}>

        <SlickSlider/>

        <Grid container mt={'10%'} mb={'10%'}>
          <Grid item md={6} style={{justifyContent:'center', display:'flex'}}>
            <img className="img1" src="https://hips.hearstapps.com/hmg-prod/images/online-buying-and-delivery-concept-royalty-free-image-1675370119.jpg?crop=0.74996xw:1xh;center,top&resize=1200:*" alt=""/>
          </Grid>
          <Grid item md={6} style={{justifyContent:'center', display:'flex'}}>
            <Typography>Image description</Typography>
          </Grid>
        </Grid>

        <AddSlider/>

        <Grid container mt={'10%'} mb={'10%'}>
          <Grid item md={6} style={{justifyContent:'center', display:'flex'}}>
          <Typography>Image description</Typography>
          </Grid>
          <Grid item md={6} style={{justifyContent:'center', display:'flex'}}>
            <img className="img1" src="https://hips.hearstapps.com/hmg-prod/images/online-buying-and-delivery-concept-royalty-free-image-1675370119.jpg?crop=0.74996xw:1xh;center,top&resize=1200:*" alt=""/>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </>
  );
};

export default Home;
