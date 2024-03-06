
import React from 'react';
import img from '../images/tomato.png';
import {  Grid, Card, CardMedia,CardContent,Typography,Button } from '@mui/material';
// import { IoMdStar } from "react-icons/io";
// import { IoIosStarOutline } from "react-icons/io";


const ExploreProductCard = () => {
    const [clicked, setClicked] = React.useState(false);

    const changecolor = () => {
      setClicked(!clicked);
    };
  return (       
     
    <Grid item xs={6} sm={6}>
        <Grid container spacing={3}>
            <Grid item md={6} >
                <Card sx={{maxWidth : 300}} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius:'18px' }}>
                    <CardContent>
                        <div style={{ width: '100%', paddingTop: '100%', position: 'relative'}}>
                            <CardMedia
                            component="img"
                            style={{ position: 'absolute', top: 10, width: '100%', height: '100%', objectFit: 'contain' }}
                            image={img} 
                            alt=""
                            />
                        </div>
                        <Typography variant="body2"  gutterBottom style={{  color: 'text.secondary' ,paddingTop: '10px'}}>
                            Category
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom >
                            Product Name
                        </Typography>
                        <div>
                            {/* <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar /> */}
                            {/* <IoIosStarOutline /> */}

                
                        </div>
                        <Typography variant="body2"  gutterBottom style={{  color: 'green' }}>
                            Price: £3.59
                        </Typography>
                        <Button
              
                            style={{  backgroundColor: clicked ? 'orange' : 'white', width: '130px', textTransform: 'none' ,justifyContent: 'center', alignItems: 'center', color:'black', border: '2px solid orange', borderRadius:'20px'}}
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={changecolor}>
                            {clicked ? 'Added' : 'Add'}
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Grid>
  
    
   
  )
}

export default ExploreProductCard