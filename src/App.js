import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
