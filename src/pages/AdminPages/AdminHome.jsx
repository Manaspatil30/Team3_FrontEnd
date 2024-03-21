import React, { useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogContent, DialogActions, Button } from "@mui/material";
import AdminSideBar from '../../components/AdminSideBar';
import AdminTopBar from '../../components/AdminTopBar';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Slide from '@mui/material/Slide';
import { Chart } from "react-google-charts";
import money from "../../images/money.png"
import delivery from "../../images/delivery.png"
import outofstock from "../../images/outofstock.png"


export const LineChartdata = [
  ["Day", "Sales", "Deliveries"],
  ["Monday", 10, 10],
  ["Tuesday", 13, 11],
  ["Wednesday", 7, 9],
  ["Thursday", 5, 2],
  ["Friday", 22, 11],
];

export const PieChartdata = [
  ["Category", "Sales today"],
  ["Veg", 5],
  ["Drinks", 2],
  ["Diary", 2],
  ["Meat", 2],
  ["Fruits", 7],
  ["Cleaning", 7]
];
export const Pieoptions = {
  title: "Daily Sales by Category",
};

export const Lineoptions = {
  title: "Performance",
  curveType: "function",
  legend: { position: "bottom" },
  chartArea: { backgroundColor: '#f0f0f0' }
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AdminHome = () => {
  const [openSalesDialog, setOpenSalesDialog] = useState(false);
  const [openDeliveryDialog, setOpenDeliveryDialog] = useState(false);
  const [openOutOfStockDialog, setOpenOutOfStockDialog] = useState(false);

  const handleOpenSalesDialog = () => {
    setOpenSalesDialog(true);
  };

  const handleCloseSalesDialog = () => {
    setOpenSalesDialog(false);
  };

  const handleOpenDeliveryDialog = () => {
    setOpenDeliveryDialog(true);
  };

  const handleCloseDeliveryDialog = () => {
    setOpenDeliveryDialog(false);
  };

  const handleOpenOutOfStockDialog = () => {
    setOpenOutOfStockDialog(true);
  };

  const handleCloseOutOfStockDialog = () => {
    setOpenOutOfStockDialog(false);
  };

  const salesData = [
    { id: 1, saleId: '3133' },
    { id: 2, saleId: '3134' },
    { id: 3, saleId: '3134' },
  ];
  const deliveryData = [
    { id: 1, saleId: '3133' },
    { id: 2, saleId: '3134' },
    { id: 3, saleId: '3134' },
  ];

  const outofStockData = [
    { id: 1, productId: '3133' },
    { id: 2, productId: '3134' },
    { id: 3, productId: '31334' },
  ];

  return (
    <>
      <AdminTopBar/>
      <Box />
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <AdminSideBar/>
        <Grid container spacing={2} >
          <Grid width={'100%'}>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '0px 30px 30px 30px', paddingLeft:'200px' }}>
              <Card
                sx={{ paddingTop:'30px', paddingBottom: '10px', cursor: 'pointer', width: 'calc(33.33% - 20px)', backgroundImage:`url(${money})`}}
                onClick={handleOpenSalesDialog}
              >
                
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color={'white'}>
                    <PointOfSaleIcon style={{paddingTop:'5px'}}/> <span>Today's Sales</span>
                  </Typography>
                </CardContent>
              </Card>


              <Card
                sx={{ paddingTop:'30px', paddingBottom: '10px', backgroundColor: 'SaddleBrown', cursor: 'pointer', width: 'calc(33.33% - 20px)', backgroundImage:`url(${delivery})` ,backgroundSize: 'cover'}}
                onClick={handleOpenDeliveryDialog}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color={'white'}>
                    <LocalShippingOutlinedIcon style={{paddingTop:'5px'}}/> <span>Waiting for delivery</span>
                  </Typography>

                </CardContent>
              </Card>
              <Card
                sx={{ paddingTop:'30px', paddingBottom: '10px', backgroundColor: 'Maroon', cursor: 'pointer', width: 'calc(33.33% - 20px)',backgroundImage:`url(${outofstock})` ,backgroundSize: 'cover', backgroundPosition:'center' }}
                onClick={handleOpenOutOfStockDialog}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color={'white'}>
                    <DisabledByDefaultIcon style={{paddingTop:'5px'}}/> <span>Products Out of Stock</span>
                  </Typography>                 
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width:'100%', }}>
          <Chart
            chartType="LineChart"
            width={700}
            height={500}
            data={LineChartdata}
            options={Lineoptions}
            style={{ backgroundColor: '#f0f0f0', marginRight: '20px' }}
            

          />
          <Chart
            chartType="PieChart"
            data={PieChartdata}
            options={Pieoptions}
            width={600}
            height={500}
          />
        </Box>
      </Box>
      
      
      <Dialog
        open={openSalesDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseSalesDialog}
      >
        <DialogContent sx={{ width: '20vw' }}>
          <Typography variant="h6" gutterBottom component="div">
            Today's Sales
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Sale ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {salesData.map((sale, index) => (
                  <TableRow key={sale.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{sale.saleId}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSalesDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDeliveryDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDeliveryDialog}
      >
        <DialogContent sx={{ width: '20vw' }}>
          <Typography variant="h6" gutterBottom component="div">
            Sales waiting for delivery
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Sale ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deliveryData.map((sale, index) => (
                  <TableRow key={sale.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{sale.saleId}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeliveryDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openOutOfStockDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseOutOfStockDialog}
      >
        <DialogContent sx={{ width: '20vw' }}>
          <Typography variant="h6" gutterBottom component="div">
            Products out of stock
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Product ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {outofStockData.map((product, index) => (
                  <TableRow key={product.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{product.productId}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOutOfStockDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AdminHome;
