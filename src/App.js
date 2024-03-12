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
import ErrorPage from './pages/Error';
import ContactUs from './pages/ContactUs'; 

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
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/productdetails/:id' element={<ProductPage/>}/>
            <Route path='/Error' element={<ErrorPage/>}/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
            <Route path='/CartTwo' element={<ShoppingCart/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
      <Footer/>
      {/* </ThemeProvider> */}
    </div>
  );
}
export default App;
