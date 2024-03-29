import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import axios from "axios";
import Cart from './pages/Cart';
import ShoppingCart from './pages/CartTwo';
import NavbarSearch from './components/NavbarSearch';
import { Container, ThemeProvider } from '@mui/material';
import theme from "./utils/theme";
import "./styles/app.css";
import ProductPage from './pages/ProductPage';
import ContactUs from './pages/ContactUs';
import AdminHome from './pages/AdminPages/AdminHome';
import Products from './pages/AdminPages/Products';
import Customers from './pages/AdminPages/Customers';
import Admins from './pages/AdminPages/Admins';
import Sales from './pages/AdminPages/Sales';
import SearchPage from './pages/SearchPage';
import Account from './pages/Account';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from './pages/Error';
import Checkout from './pages/Checkout';
import { Cookie } from '@mui/icons-material';
import Cookies from 'js-cookie';
import "react-toastify/dist/ReactToastify.css";
import SuccessPage from './pages/SuccessPage';
import AdminProducts from './pages/AdminPages/AdminProducts';
import AdminUsers from './pages/AdminPages/AdminUsers';
import AdminSales from './pages/AdminPages/AdminSales';


function Layout({ children }) {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
}



function App() {
  axios.defaults.baseURL = 'https://team3-backend.onrender.com/';
  axios.defaults.headers.common['authorization'] = Cookies.get('jwtToken');

  return (
    <div className="app">
      {/* <ThemeProvider theme={theme}> */}
      {/* <Navbar/> */}
      <Container maxWidth='xl'>
        <BrowserRouter>
        <NavbarSearch />
        <ToastContainer position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:id' element={<Account/>}/>
            <Route path='/explore/:category' element={<Explore/>}/>
            <Route path='/signUp' element={<Signup/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/productdetails/:id/:storeid' element={<ProductPage/>}/>
            <Route path='/Error' element={<ErrorPage/>}/>
            <Route path='/search/:value' element={<SearchPage/>}/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
            <Route path='/success' element={<SuccessPage/>}/>
            <Route path='/CartTwo' element={<ShoppingCart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/admin' element={<AdminHome/>}/>
            <Route path='/admin/sales' element={<AdminSales/>}/>
            <Route path='/admin/products' element={<AdminProducts/>}/>
            <Route path='/admin/customers' element={<AdminUsers/>}/>
            <Route path='/admin/admins' element={<Admins/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
      <Footer/>
      {/* </ThemeProvider> */}
    </div>
  );
}
export default App;
