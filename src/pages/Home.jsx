import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import "../styles/home.css";
import CategorySection from "../components/CategorySection";
import ExploreProductCard from "../components/ExploreProductCard";
import Advertise1 from "../components/Advertise1";
import Advertise2 from "../components/Advertise2";
// import Advertise3 from "../components/Advertise3";
import CompareSection from "../components/CompareSection";
import DealsSection from "../components/DealsSection";
// import DisplaySection from "../components/DisplaySection";


const Home = () => {
  return (
    <>
      <Container sx={{overflow:'hidden'}} maxWidth={"xl"}>
        {/* <SlickSlider/> */}
        <Advertise1/>
        <CategorySection/>
        {/*<Advertise2/> */}
        <CompareSection/>
        <DealsSection/>
        {/* <Grid container mt={'10%'} mb={'10%'}>
          <Grid item md={6} style={{justifyContent:'center', display:'flex'}}>
            <img className="img1" src={vegetable} alt=""/>
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
        </Grid> */}
      </Container>
    </>
  );
};

export default Home;
