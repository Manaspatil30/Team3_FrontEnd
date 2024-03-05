import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import CategoryCard from './CategoryCard'
import vegetable from '../images/vegetables.svg'
import coffee from "../images/coffee.svg"
import dairy from "../images/dairy.svg"
import meat from "../images/meat.svg"
import fruit from "../images/fruits.svg"
import cleaning from "../images/cleaning.svg"

const CategorySection = () => {
  return (
    <Box textAlign={'center'} width={'100%'} mt={3}>
        <Typography variant='h3' fontWeight={700}>Browse All Categories</Typography>
        <Typography variant='h6' color={'#A49E9E'}>Empowering Targeted Markets through Purpose-Driven Networks</Typography>

        <Box display={'flex'} justifyContent={'space-between'} margin={'0, auto'}>
        <CategoryCard img={vegetable} heading={"Vegetables"}/>
        <CategoryCard img={coffee} heading={"Coffee & Drinks"}/>
        <CategoryCard img={dairy} heading={"Milk & Dairy"}/>
        <CategoryCard img={meat} heading={"Meat"}/>
        <CategoryCard img={fruit} heading={"Fresh Fruits"}/>
        <CategoryCard img={cleaning} heading={"Cleaning Esssentials"}/>
        </Box>
        
        {/* <Box width={'100%'} marginTop={'3%'}>
            <Paper elevation={0} sx={{width:'15vh', padding:'3%', textAlign:'center', borderRadius:'12px'}}>
                <img src="src/images/vegetables.svg" alt='vegetable'/>
                <Box sx={{marginTop:2}}>
                <Typography fontSize={'1rem'} fontWeight={700}>Vegetables</Typography>
                </Box>
            </Paper>
        </Box> */}
    </Box>
  )
}

export default CategorySection