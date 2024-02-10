import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';
import Searchbar from './components/Searchbar'

function App() {
  
  return (
    <div className="app">
      <Navbar />
      <Searchbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
