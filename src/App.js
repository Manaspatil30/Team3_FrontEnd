import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import axios from "axios";
import Cart from './pages/Cart';

function App() {

  axios.defaults.baseURL = 'http://localhost:3001/';

  return (
    <div className="app">
      <Navbar />
      <Searchbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/signUp' element={<Signup/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
