import React from 'react'
import { Box, Grid, Typography } from "@mui/material";
import AdminSideBar from '../../components/AdminSideBar';
import AdminTopBar from '../../components/AdminTopBar';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Chart } from "react-google-charts";
import CardContent from '@mui/material/CardContent';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

export const data = [
  ["Diary", "Hours per Day"],
  ["Breads", 11],
  ["Beverages", 2],
  ["Meat", 2],
  ["Cleaners", 2],
  ["Personal Care", 7],
];

export const options = {
  title: "Daily Sales by Categories",
};

const AdminHome = () => {
  return (
    <>
    <AdminTopBar/> 

    <Box height={100}/>   
    <Box sx={{display: 'flex'}}>
        <AdminSideBar></AdminSideBar>
        <Grid container spacing={2}>
        <Grid item xs={8}>
        <Stack spacing={10} direction={'row'}>
        <Card sx={{ maxWidth: 70+ '%',  paddingTop:'30px', backgroundColor: 'green'}}>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={'white'}>
          <PointOfSaleIcon style={{paddingTop:'1px'}}></PointOfSaleIcon><span>Today's Sales</span>
        </Typography>
        <Typography variant="body2" color={'white'} >
        <ol>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>

        </ol> 

        </Typography>
      </CardContent>

        </Card>
        <Card sx={{ maxWidth: 70 + '%', paddingTop:'30px' , backgroundColor: '#808000'}}>

    <CardContent>
      <Typography gutterBottom variant="h5" component="div"  color={'white'}>
      <LocalShippingOutlinedIcon ></LocalShippingOutlinedIcon><span> Waiting for delivery</span>
      </Typography>
      <Typography variant="body2"  color={'white'}>
      <ol>
      <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        <li>Product ID: 123123 CustomerID: 31233231</li>
        </ol> 

      </Typography>
    </CardContent>

    </Card>
    </Stack>

          
        </Grid>
        <Grid item xs={4}>
        <Stack spacing={2} >
        <Card sx={{ maxWidth: 345, paddingTop:'30px', backgroundColor: '#008080	' }}>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={'white'}>
            Today's income
          </Typography>
          <Typography variant="body2" color={'white'}>
            £312.32
          </Typography>
        </CardContent>

          </Card>
          <Card sx={{ maxWidth: 345, paddingTop:'30px' ,backgroundColor: 'orange'}}>

        <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={'white'}>
          Total income
        </Typography>
        <Typography variant="body2" color={'white'} >
          £103,331.03
        </Typography>
        </CardContent>

        </Card>
        

        
          
        <div style={{ marginRight: '110px' }}>
  <Chart
    chartType="PieChart"
    data={data}
    options={options}
    width={"100%"}
    height={"400px"}
  />
</div>
        
        

          
        

        </Stack>

        
        </Grid>

      </Grid>
 
    </Box>
    </>

   



  
  )
}

export default AdminHome