import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Paper } from '@mui/material'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Box sx={{height:'100%', display:'flex', justifyContent:'center'}}>
        <Paper sx={{width:"200px", height: "300px", marginTop:'100px', backgroundColor:'#edf3fd', borderRadius:'15px'}} elevation={0}>

        </Paper>
    </Box>
    </>
  )
}

export default Home