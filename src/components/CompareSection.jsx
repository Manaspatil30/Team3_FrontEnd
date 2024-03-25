import { Box, Typography } from '@mui/material'
import React from 'react'
import AddSlider from './AddSlider'

const CompareSection = () => {
  return (
    <Box textAlign={'center'} width={'100%'} mt={20} mb={10}>
        <Typography variant='h3' fontWeight={700}>Compare Products</Typography>
        <Typography variant='h6' color={'#A49E9E'}>Pick and choose which stores and prices you like best!</Typography>
        <AddSlider/>
    </Box>
  )
}

export default CompareSection