import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import axios from "axios";
import Cart from './pages/Cart';
import ProductDetailsCard from './components/ProductDetailsCard';
import ProductBenefits from './components/ProductBenefits';
import ProductPage from './pages/ProductPage';
import ExploreProductCard from './components/ExploreProductCard';

function App() {

  axios.defaults.baseURL = 'http://localhost:3001/';

  return (
    <div className="app">
      <Navbar />

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/signUp' element={<Signup/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/productdetails' element={<ProductPage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
