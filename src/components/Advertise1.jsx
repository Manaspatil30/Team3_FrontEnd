import { Box, Button, Paper } from '@mui/material'
import React from 'react'
import ad1 from "../images/Ad1.jpg"
import ad2 from "../images/ad2.jpg"
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';


const Advertise1 = () => {
  return (
    <Box display={'flex'} justifyContent={'space-evenly'} width={'100%'} mt={10} mb={20}>
        <Paper sx={{background: `url(${ad1})`, backgroundSize:'100% 500px',width:'55%', height:'500px', display:'flex', alignItems:'end'}}>
            <Button variant='contained' endIcon={<ArrowForwardRoundedIcon/>} sx={{margin:'5%', backgroundColor:'#4DB528',"&:hover" : {backgroundColor:'#4DB528'}, textTransform:'none'}}>Shop Now</Button>
        </Paper>
        <Paper sx={{background: `url(${ad2})`, backgroundSize:'100% 500px',width:'35%', height:'500px', display:'flex', alignItems:'end'}}>
            <Button variant='contained' endIcon={<ArrowForwardRoundedIcon/>} sx={{margin:'5%', backgroundColor:'#FF7C0A',"&:hover" : {backgroundColor:'#FF7C0A'}, textTransform:'none'}}>Shop Now</Button>
        </Paper>
    </Box>
  )
}

export default Advertise1