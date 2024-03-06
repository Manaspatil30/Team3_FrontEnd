import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import axios from "axios";
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';
import ErrorPage from './pages/Error';
import NavbarSearch from './components/NavbarSearch';
import { Container, ThemeProvider } from '@mui/material';
import theme from "./utils/theme"
import "./styles/app.css"

function App() {

  axios.defaults.baseURL = 'http://localhost:3001/';

  return (
    <div className="app">
      {/* <ThemeProvider theme={theme}> */}
      <NavbarSearch />
      <Container maxWidth='xl'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/signUp' element={<Signup/>}/>
        <Route path='/Cart' element={<Cart/>}/>
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
