import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import ad1 from "../images/Ad1.jpg"
import ad2 from "../images/ad2.jpg"
import ad3 from "../images/grocery-bag.png"
import ad4 from "../images/plate.png"
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { TypeAnimation } from 'react-type-animation';

const Advertise1 = () => {
  return (
    <Box display={'flex'} justifyContent={'space-evenly'} width={'100%'} mt={10} mb={20}>
        <Paper sx={{position: 'relative', backgroundColor: '#C5EAD9', backgroundSize:'100% 500px',width:'55%', height:'500px', display:'flex', alignItems:'flex-end', flexDirection: 'column'}}>
            <Typography variant="h5" sx={{ textAlign: 'left', color: 'black', position: 'absolute', bottom: '65px', left: '20px', zIndex: 1 }}>
              <TypeAnimation
                sequence={['Fresh Produce Every Day!', 2000, '']}
                speed={50}
                 repeat={Infinity}
              />
            </Typography>
            <Button variant='contained' endIcon={<ArrowForwardRoundedIcon/>} sx={{position: 'absolute', bottom: '20px', left: '20px', backgroundColor:'#4DB528', "&:hover": {backgroundColor:'#4DB528'}, textTransform:'none', zIndex: 1}}>Shop Now</Button>
            <img src={ad3} alt="Advert" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
        </Paper>
        <Paper sx={{position: 'relative', backgroundSize:'100% 500px',width:'35%', height:'500px', display:'flex', alignItems:'end', backgroundColor:'#FFF5E1', overflow: 'hidden'}}>
          <Typography variant="h5" sx={{ textAlign: 'left', color: 'black', position: 'absolute', bottom: '65px', left: '20px', zIndex: 1 }}>
              Discover new ingredients
            </Typography>
          <Button variant='contained' endIcon={<ArrowForwardRoundedIcon/>} sx={{margin:'5%', backgroundColor:'#FF7C0A',"&:hover" : {backgroundColor:'#FF7C0A'}, textTransform:'none'}}>Shop Now</Button> 
          <img src={ad4} alt="" style={{ position: 'absolute', top: -180, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
        </Paper>
    </Box>
  );
};

export default Advertise1;
