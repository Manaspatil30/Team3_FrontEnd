import { Box, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import successimg from '../images/check_mark.png'

const SuccessPage = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Hides the progress bar after 5 seconds

    return () => clearTimeout(timer); // Cleanup function to clear the timeout
  }, []);
  return (
    <>
    <Typography variant='h4' textAlign={'center'} fontWeight={700} mt={5}>Order Placed Successfully!</Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
      <img width={'600px'} src={successimg}/>
    </Box>
    </>
  )
}

export default SuccessPage