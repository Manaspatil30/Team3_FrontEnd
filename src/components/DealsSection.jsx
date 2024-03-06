import { Box, Typography } from '@mui/material'
import React from 'react'
import SlickSlider from './SlickSlider'

const DealsSection = () => {
  return (
    <Box textAlign={'center'} width={'100%'} mb={20}>
        <Typography variant='h3' fontWeight={700}>Great Deals</Typography>
        <Typography variant='h6' color={'#A49E9E'}>Get the best deals and discounts for university students</Typography>
        <SlickSlider/>
    </Box>
  )
}

export default DealsSection