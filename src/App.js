import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import axios from "axios";
import Cart from './pages/Cart';
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
        <Route path='/productdetails' element={<ProductPage/>}/>
      </Routes>
      </BrowserRouter>
      </Container>
      <Footer/>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
