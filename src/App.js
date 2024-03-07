import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import axios from "axios";
import Cart from './pages/Cart';
<<<<<<< HEAD
import ProductDetailsCard from './components/ProductDetailsCard';
import ProductBenefits from './components/ProductBenefits';
import ProductPage from './pages/ProductPage';
import ExploreProductCard from './components/ExploreProductCard';
import ContactUs from './pages/ContactUs';
import ErrorPage from './pages/Error';
=======
>>>>>>> Manas
import NavbarSearch from './components/NavbarSearch';
import { Container, ThemeProvider } from '@mui/material';
import theme from "./utils/theme"
import "./styles/app.css"
<<<<<<< HEAD
=======
import ProductPage from './pages/ProductPage';
>>>>>>> Manas

function App() {

  axios.defaults.baseURL = 'http://localhost:3001/';

  return (
    <div className="app">
      {/* <ThemeProvider theme={theme}> */}
      <NavbarSearch />
      <Container maxWidth='xl'>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/signUp' element={<Signup/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/productdetails' element={<ProductPage/>}/>
        <Route path='/Error' element={<ErrorPage/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
      </Routes>
      </BrowserRouter>
      </Container>
      <Footer/>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
