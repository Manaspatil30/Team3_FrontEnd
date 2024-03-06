import { Box, Button, Paper } from '@mui/material'
import React from 'react'
import ad3 from "../images/ad3.jpg"
import ad4 from "../images/ad4.jpg"
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const Advertise2 = () => {
  return (
    <Box display={'flex'} justifyContent={'space-evenly'} width={'100%'} mt={20} mb={20}>
        <Paper sx={{background: `url(${ad4})`, backgroundSize:'100% 500px',width:'25%', height:'500px', display:'flex', alignItems:'end'}}>
            <Button variant='contained' endIcon={<ArrowForwardRoundedIcon/>} sx={{margin:'5%', backgroundColor:'#FF7C0A',"&:hover" : {backgroundColor:'#FF7C0A'}, textTransform:'none'}}>Shop Now</Button>
        </Paper>
        <Paper sx={{background: `url(${ad3})`, backgroundSize:'100% 500px',width:'65%', height:'500px', display:'flex', alignItems:'end'}}>
            <Button variant='contained' endIcon={<ArrowForwardRoundedIcon/>} sx={{margin:'5%', backgroundColor:'#4DB528',"&:hover" : {backgroundColor:'#4DB528'}, textTransform:'none'}}>Shop Now</Button>
        </Paper>
    </Box>
  )
}

export default Advertise2