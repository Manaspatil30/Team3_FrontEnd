import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import axios from "axios";
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';
import AdminHome from './pages/AdminPages/AdminHome';
import Products from './pages/AdminPages/Products';
import Customers from './pages/AdminPages/Customers';
import Admins from './pages/AdminPages/Admins';
import Sales from './pages/AdminPages/Sales';





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
      

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/explore' element={<Layout><Explore /></Layout>} />
        <Route path='/signUp' element={<Layout><Signup /></Layout>} />
        <Route path='/Cart' element={<Layout><Cart /></Layout>} />
        <Route path='/productdetails' element={<Layout><ProductPage /></Layout>} />
        <Route path='/admin/' element={<AdminHome />} />
        <Route path='/admin/products' element={<Products />} />
        <Route path='/admin/customers' element={<Customers />} />
        <Route path='/admin/admins' element={<Admins />} />
        <Route path='/admin/sales' element={<Sales />} />
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
