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
import AdminHome from './pages/AdminPages/AdminHome';
import Products from './pages/AdminPages/Products';
import Customers from './pages/AdminPages/Customers';
import Admins from './pages/AdminPages/Admins';
import Sales from './pages/AdminPages/Sales';
import ErrorPage from './pages/Error';
import ContactUs from './pages/ContactUs';
import Checkout from './pages/Checkout';


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
  axios.defaults.baseURL = 'http://localhost:3001/';


  return (
    <div className="app">
      {/* <ThemeProvider theme={theme}> */}
      <NavbarSearch />
      {/* <Navbar/> */}
      <Container maxWidth='xl'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/signUp' element={<Signup/>}/>
            {/*<Route path='/Cart' element={<Cart/>}/> */}
            <Route path='/productdetails/:id' element={<ProductPage/>}/>
            <Route path='/Error' element={<ErrorPage/>}/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
            <Route path='/CartTwo' element={<ShoppingCart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
      <Footer/>
      {/* </ThemeProvider> */}
    </div>
  );
}
export default App;
