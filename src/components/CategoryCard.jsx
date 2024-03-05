import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const CategoryCard = (props) => {
  return (
        <Box width={'100%'} marginTop={'3%'} display={'flex'} justifyContent={'center'}>
            <Paper elevation={0} sx={{width:'130px', padding:'25px', textAlign:'center', borderRadius:'12px'}}>
                <img src={props.img} alt='vegetable'/>
                <Box sx={{marginTop:2}}>
                <Typography fontSize={'1rem'} fontWeight={700}>{props.heading}</Typography>
                </Box>
            </Paper>
        </Box>
  )
}

export default CategoryCard