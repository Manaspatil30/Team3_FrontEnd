import { Box, Hidden, Typography } from '@mui/material'
import React from 'react'
import SlickSlider from './SlickSlider'

const DealsSection = () => {
  return (
    <Box textAlign={'center'} width={'100%'} mb={20}>
        <Typography variant='h3' fontWeight={700}>Great Deals</Typography>
        <Typography variant='h6' color={'#A49E9E'}>Reinvigorate your student life</Typography>
        <SlickSlider/>
    </Box>
  )
}

export default DealsSection