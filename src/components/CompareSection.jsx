import { Box, Typography } from '@mui/material'
import React from 'react'
import AddSlider from './AddSlider'

const CompareSection = () => {
  return (
    <Box textAlign={'center'} width={'100%'} mb={20}>
        <Typography variant='h3' fontWeight={700}>Compare Prices</Typography>
        <Typography variant='h6' color={'#A49E9E'}>Pick and choose which brands and prices are best for you!</Typography>
        <AddSlider/>
    </Box>
  )
}

export default CompareSection